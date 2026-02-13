# =============================================================================
# EmailVerse Landing Page - GCP Terraform Configuration
# Minimal Cost Deployment using Cloud Run
# =============================================================================

terraform {
  required_version = ">= 1.0"
  
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }

  # Optional: Use GCS for remote state (recommended for production)
  # backend "gcs" {
  #   bucket = "your-terraform-state-bucket"
  #   prefix = "emailverse-landing"
  # }
}

# -----------------------------------------------------------------------------
# Provider Configuration
# -----------------------------------------------------------------------------
provider "google" {
  project = var.project_id
  region  = var.region
}

# -----------------------------------------------------------------------------
# Enable Required APIs
# -----------------------------------------------------------------------------
resource "google_project_service" "required_apis" {
  for_each = toset([
    "run.googleapis.com",
    "artifactregistry.googleapis.com",
    "cloudbuild.googleapis.com",
    "firestore.googleapis.com",
    "storage.googleapis.com",
    "identitytoolkit.googleapis.com", # Firebase Authentication / Identity Platform
  ])
  
  project            = var.project_id
  service            = each.key
  disable_on_destroy = false
}

# -----------------------------------------------------------------------------
# Artifact Registry Repository (for Docker images)
# -----------------------------------------------------------------------------
resource "google_artifact_registry_repository" "emailverse" {
  location      = var.region
  repository_id = "emailverse-repo"
  description   = "Docker repository for EmailVerse landing page"
  format        = "DOCKER"

  # Clean up old images to minimize storage costs
  cleanup_policies {
    id     = "keep-minimum-versions"
    action = "KEEP"
    most_recent_versions {
      keep_count = 3
    }
  }

  depends_on = [google_project_service.required_apis]
}

# -----------------------------------------------------------------------------
# Cloud Run Service
# -----------------------------------------------------------------------------
resource "google_cloud_run_v2_service" "emailverse" {
  name     = var.service_name
  location = var.region
  
  # Allow unauthenticated access (public website)
  ingress = "INGRESS_TRAFFIC_ALL"

  template {
    # Use service account for GCP API access
    service_account = google_service_account.emailverse_service.email

    # Minimal resources for cost optimization
    containers {
      image = "${var.region}-docker.pkg.dev/${var.project_id}/${google_artifact_registry_repository.emailverse.repository_id}/${var.image_name}:${var.image_tag}"
      
      ports {
        container_port = 8080
      }

      resources {
        limits = {
          cpu    = var.cpu_limit
          memory = var.memory_limit
        }
        cpu_idle = true  # Important: Scale to zero when idle
      }

      # Environment variables
      env {
        name  = "NODE_ENV"
        value = "production"
      }
      env {
        name  = "GCP_PROJECT_ID"
        value = var.project_id
      }
      env {
        name  = "GCS_BUCKET_NAME"
        value = google_storage_bucket.blog_images.name
      }
      env {
        name  = "NEXT_PUBLIC_FIREBASE_PROJECT_ID"
        value = var.project_id
      }
      env {
        name  = "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"
        value = "${var.project_id}.firebaseapp.com"
      }
    }

    scaling {
      min_instance_count = 0  # Scale to zero for minimal costs
      max_instance_count = var.max_instances
    }

    # Use 2nd gen execution environment for better cold start
    execution_environment = "EXECUTION_ENVIRONMENT_GEN2"
  }

  traffic {
    type    = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
    percent = 100
  }

  depends_on = [
    google_project_service.required_apis,
    google_artifact_registry_repository.emailverse,
    google_firestore_database.default,
    google_storage_bucket.blog_images,
    google_service_account.emailverse_service,
  ]
}

# -----------------------------------------------------------------------------
# IAM - Allow public access to Cloud Run
# -----------------------------------------------------------------------------
resource "google_cloud_run_v2_service_iam_member" "public_access" {
  project  = google_cloud_run_v2_service.emailverse.project
  location = google_cloud_run_v2_service.emailverse.location
  name     = google_cloud_run_v2_service.emailverse.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}

# -----------------------------------------------------------------------------
# Firestore Database (Native mode - cost-effective)
# -----------------------------------------------------------------------------
resource "google_firestore_database" "default" {
  project     = var.project_id
  name        = "(default)"
  location_id = var.region
  type        = "FIRESTORE_NATIVE"

  depends_on = [google_project_service.required_apis]
}

# -----------------------------------------------------------------------------
# Cloud Storage Bucket for Blog Images
# -----------------------------------------------------------------------------
resource "google_storage_bucket" "blog_images" {
  name          = "${var.project_id}-blog-images"
  location      = var.region
  force_destroy = false

  uniform_bucket_level_access = true

  # Cost optimization: Lifecycle rules
  lifecycle_rule {
    condition {
      age = 365 # Delete objects older than 1 year
    }
    action {
      type = "Delete"
    }
  }

  # CORS configuration for image uploads
  cors {
    origin          = ["*"]
    method          = ["GET", "HEAD", "PUT", "POST", "DELETE"]
    response_header = ["*"]
    max_age_seconds = 3600
  }

  depends_on = [google_project_service.required_apis]
}

# Make bucket publicly readable for images
resource "google_storage_bucket_iam_member" "public_read" {
  bucket = google_storage_bucket.blog_images.name
  role   = "roles/storage.objectViewer"
  member = "allUsers"
}

# Service account for Cloud Run to access Firestore and Storage
resource "google_service_account" "emailverse_service" {
  account_id   = "emailverse-service"
  display_name = "EmailVerse Service Account"
  project      = var.project_id
}

# Grant Firestore access
resource "google_project_iam_member" "firestore_user" {
  project = var.project_id
  role    = "roles/datastore.user"
  member  = "serviceAccount:${google_service_account.emailverse_service.email}"
}

# Grant Storage access
resource "google_project_iam_member" "storage_admin" {
  project = var.project_id
  role    = "roles/storage.admin"
  member  = "serviceAccount:${google_service_account.emailverse_service.email}"
}


# -----------------------------------------------------------------------------
# Identity Platform (Firebase Auth) Configuration
# Note: API key needs to be created manually in Firebase Console
# or via gcloud, then set as environment variable
# -----------------------------------------------------------------------------
resource "google_identity_platform_config" "default" {
  project = var.project_id

  sign_in {
    allow_duplicate_emails = false

    email {
      enabled           = true
      password_required = true
    }
  }

  depends_on = [google_project_service.required_apis]
}

# Web API key for Firebase (needs to be created manually or via gcloud)
# You can get this from Firebase Console > Project Settings > General > Web API Key
# Or create it via: gcloud alpha identity platform oauth-clients create --display-name="Web Client"

# -----------------------------------------------------------------------------
# Optional: Custom Domain Mapping
# -----------------------------------------------------------------------------
resource "google_cloud_run_domain_mapping" "custom_domain" {
  count    = var.custom_domain != "" ? 1 : 0
  location = var.region
  name     = var.custom_domain

  metadata {
    namespace = var.project_id
  }

  spec {
    route_name = google_cloud_run_v2_service.emailverse.name
  }

  depends_on = [google_cloud_run_v2_service.emailverse]
}

# -----------------------------------------------------------------------------
# Optional: Cloud CDN with Load Balancer (for production with high traffic)
# Uncomment if you need CDN caching (adds ~$18/month minimum)
# -----------------------------------------------------------------------------
# resource "google_compute_region_network_endpoint_group" "serverless_neg" {
#   name                  = "emailverse-neg"
#   network_endpoint_type = "SERVERLESS"
#   region                = var.region
#   
#   cloud_run {
#     service = google_cloud_run_v2_service.emailverse.name
#   }
# }


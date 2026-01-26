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
    google_artifact_registry_repository.emailverse
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


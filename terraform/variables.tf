# =============================================================================
# Variables for EmailVerse GCP Deployment
# =============================================================================

variable "project_id" {
  description = "GCP Project ID"
  type        = string
}

variable "region" {
  description = "GCP region for deployment"
  type        = string
  default     = "us-central1"  # Usually cheapest region
}

variable "service_name" {
  description = "Cloud Run service name"
  type        = string
  default     = "emailverse-landing"
}

variable "image_name" {
  description = "Docker image name"
  type        = string
  default     = "emailverse-landing"
}

variable "image_tag" {
  description = "Docker image tag"
  type        = string
  default     = "latest"
}

# -----------------------------------------------------------------------------
# Resource Configuration (optimized for minimal costs)
# -----------------------------------------------------------------------------
variable "cpu_limit" {
  description = "CPU limit for Cloud Run container"
  type        = string
  default     = "1"  # 1 vCPU is usually sufficient for a landing page
}

variable "memory_limit" {
  description = "Memory limit for Cloud Run container"
  type        = string
  default     = "512Mi"  # 512MB is enough for Next.js
}

variable "max_instances" {
  description = "Maximum number of Cloud Run instances"
  type        = number
  default     = 3  # Limit to control costs
}

# -----------------------------------------------------------------------------
# Optional: Custom Domain
# -----------------------------------------------------------------------------
variable "custom_domain" {
  description = "Custom domain for the website (leave empty to skip)"
  type        = string
  default     = ""
}


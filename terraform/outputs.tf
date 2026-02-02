# =============================================================================
# Outputs for EmailVerse GCP Deployment
# =============================================================================

output "cloud_run_url" {
  description = "URL of the deployed Cloud Run service"
  value       = google_cloud_run_v2_service.emailverse.uri
}

output "artifact_registry_url" {
  description = "Artifact Registry repository URL"
  value       = "${var.region}-docker.pkg.dev/${var.project_id}/${google_artifact_registry_repository.emailverse.repository_id}"
}

output "service_name" {
  description = "Cloud Run service name"
  value       = google_cloud_run_v2_service.emailverse.name
}

output "region" {
  description = "Deployed region"
  value       = var.region
}

output "custom_domain_status" {
  description = "Custom domain mapping status"
  value       = var.custom_domain != "" ? google_cloud_run_domain_mapping.custom_domain[0].status : null
}

output "docker_push_command" {
  description = "Command to push Docker image"
  value       = "docker push ${var.region}-docker.pkg.dev/${var.project_id}/${google_artifact_registry_repository.emailverse.repository_id}/${var.image_name}:${var.image_tag}"
}


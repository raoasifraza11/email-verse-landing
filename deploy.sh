#!/bin/bash

# =============================================================================
# EmailVerse Landing Page - Deployment Script
# =============================================================================

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Starting EmailVerse Landing Page Deployment${NC}\n"

# Load variables from terraform.tfvars
cd terraform
PROJECT_ID=$(grep '^project_id' terraform.tfvars | sed 's/.*= *"\(.*\)".*/\1/' | head -1)
REGION=$(grep '^region' terraform.tfvars | sed 's/.*= *"\(.*\)".*/\1/' | head -1)
IMAGE_NAME=$(grep '^image_name' terraform.tfvars | sed 's/.*= *"\(.*\)".*/\1/' | head -1)
IMAGE_TAG=$(grep '^image_tag' terraform.tfvars | sed 's/.*= *"\(.*\)".*/\1/' | head -1)
SERVICE_NAME=$(grep '^service_name' terraform.tfvars | sed 's/.*= *"\(.*\)".*/\1/' | head -1)
cd ..

if [ -z "$PROJECT_ID" ]; then
    echo -e "${RED}❌ Error: project_id not found in terraform/terraform.tfvars${NC}"
    exit 1
fi

echo -e "${YELLOW}📋 Configuration:${NC}"
echo "  Project ID: $PROJECT_ID"
echo "  Region: ${REGION:-us-central1}"
echo "  Image: $IMAGE_NAME:$IMAGE_TAG"
echo "  Service: ${SERVICE_NAME:-emailverse-landing}"
echo ""

# Step 1: Check Docker
echo -e "${YELLOW}🐳 Step 1: Checking Docker...${NC}"
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker is not installed. Please install Docker first.${NC}"
    exit 1
fi

if ! docker info &> /dev/null; then
    echo -e "${RED}❌ Docker daemon is not running. Please start Docker Desktop.${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Docker is running${NC}\n"

# Step 2: Check gcloud
echo -e "${YELLOW}☁️  Step 2: Checking Google Cloud SDK...${NC}"
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}❌ gcloud CLI is not installed. Please install it first.${NC}"
    echo "   Visit: https://cloud.google.com/sdk/docs/install"
    exit 1
fi
echo -e "${GREEN}✅ gcloud CLI is installed${NC}\n"

# Step 3: Authenticate with GCP
echo -e "${YELLOW}🔐 Step 3: Authenticating with Google Cloud...${NC}"
gcloud auth configure-docker ${REGION:-us-central1}-docker.pkg.dev
echo -e "${GREEN}✅ Authenticated${NC}\n"

# Step 4: Set up buildx for multi-platform builds
echo -e "${YELLOW}🔧 Step 4: Setting up Docker buildx...${NC}"
docker buildx create --use --name multiplatform-builder 2>/dev/null || docker buildx use multiplatform-builder 2>/dev/null || true
docker buildx inspect --bootstrap 2>/dev/null || true
echo -e "${GREEN}✅ Buildx ready${NC}\n"

# Step 5: Build and push directly to Artifact Registry (ensures amd64 only)
ARTIFACT_REGISTRY_URL="${REGION:-us-central1}-docker.pkg.dev/${PROJECT_ID}/emailverse-repo"
echo -e "${YELLOW}🔨 Step 5: Building and pushing image to Artifact Registry...${NC}"
docker buildx build --platform linux/amd64 --push -t ${ARTIFACT_REGISTRY_URL}/${IMAGE_NAME}:${IMAGE_TAG} .
echo -e "${GREEN}✅ Image built and pushed${NC}\n"

# Step 7: Initialize Terraform (if needed)
echo -e "${YELLOW}🏗️  Step 7: Initializing Terraform...${NC}"
cd terraform
if [ ! -d ".terraform" ]; then
    terraform init
fi
echo -e "${GREEN}✅ Terraform initialized${NC}\n"

# Step 8: Apply Terraform configuration
echo -e "${YELLOW}🚀 Step 8: Deploying to Cloud Run...${NC}"
terraform apply -auto-approve
echo -e "${GREEN}✅ Deployment complete!${NC}\n"

# Step 9: Get the service URL
echo -e "${YELLOW}📊 Step 9: Getting service URL...${NC}"
SERVICE_URL=$(terraform output -raw cloud_run_url)
echo -e "${GREEN}✅ Deployment successful!${NC}\n"
echo -e "${GREEN}🌐 Your website is live at: ${SERVICE_URL}${NC}\n"

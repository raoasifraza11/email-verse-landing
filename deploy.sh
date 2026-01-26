#!/bin/bash
# =============================================================================
# EmailVerse GCP Deployment Script
# One-click deployment for minimal cost setup
# =============================================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║     EmailVerse - GCP Cloud Run Deployment                  ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}Error: gcloud CLI is not installed.${NC}"
    echo "Please install it from: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Error: Docker is not installed.${NC}"
    echo "Please install it from: https://docs.docker.com/get-docker/"
    exit 1
fi

# Get configuration
PROJECT_ID=$(gcloud config get-value project 2>/dev/null)
if [ -z "$PROJECT_ID" ]; then
    echo -e "${YELLOW}No default project set.${NC}"
    read -p "Enter your GCP Project ID: " PROJECT_ID
    gcloud config set project "$PROJECT_ID"
fi

REGION="${GCP_REGION:-us-central1}"
SERVICE_NAME="${SERVICE_NAME:-emailverse-landing}"
REPO_NAME="${REPO_NAME:-emailverse-repo}"
IMAGE_NAME="${IMAGE_NAME:-emailverse-landing}"

echo -e "${GREEN}Configuration:${NC}"
echo "  Project ID:   $PROJECT_ID"
echo "  Region:       $REGION"
echo "  Service:      $SERVICE_NAME"
echo ""

# Confirm deployment
read -p "Proceed with deployment? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment cancelled."
    exit 0
fi

echo ""
echo -e "${YELLOW}Step 1/5: Enabling required APIs...${NC}"
gcloud services enable \
    run.googleapis.com \
    artifactregistry.googleapis.com \
    cloudbuild.googleapis.com \
    --quiet

echo ""
echo -e "${YELLOW}Step 2/5: Creating Artifact Registry repository...${NC}"
gcloud artifacts repositories create "$REPO_NAME" \
    --repository-format=docker \
    --location="$REGION" \
    --description="EmailVerse Docker repository" \
    2>/dev/null || echo "Repository already exists, continuing..."

echo ""
echo -e "${YELLOW}Step 3/5: Configuring Docker authentication...${NC}"
gcloud auth configure-docker "$REGION-docker.pkg.dev" --quiet

echo ""
echo -e "${YELLOW}Step 4/5: Building Docker image...${NC}"
IMAGE_URI="$REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$IMAGE_NAME:latest"
docker build -t "$IMAGE_URI" .

echo ""
echo -e "${YELLOW}Step 5/5: Pushing and deploying to Cloud Run...${NC}"
docker push "$IMAGE_URI"

gcloud run deploy "$SERVICE_NAME" \
    --image "$IMAGE_URI" \
    --region "$REGION" \
    --platform managed \
    --allow-unauthenticated \
    --cpu 1 \
    --memory 512Mi \
    --min-instances 0 \
    --max-instances 3 \
    --set-env-vars "NODE_ENV=production"

echo ""
echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║     Deployment Complete! 🚀                                ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Get the service URL
SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" --region "$REGION" --format 'value(status.url)')
echo -e "${GREEN}Your site is live at:${NC} $SERVICE_URL"
echo ""
echo -e "${YELLOW}Cost Optimization Tips:${NC}"
echo "  • min-instances=0 means you pay nothing when idle"
echo "  • You only pay for actual requests (~\$0.40/million requests)"
echo "  • Estimated monthly cost for low traffic: \$0 - \$5"
echo ""


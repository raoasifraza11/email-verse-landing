# EmailVerse - Advanced Email Marketing Platform

A modern, feature-rich email marketing platform built with Next.js 15, TypeScript, and Tailwind CSS. Inspired by leading email marketing platforms like ScaledMail, this project showcases a complete email marketing solution with beautiful design, comprehensive features, and excellent user experience.

## 🚀 Features

### 🏠 Home Page + Free Tools
- **Hero Section** with compelling value proposition and statistics
- **Features Overview** highlighting key platform capabilities
- **Free Tools Section** with interactive tool previews:
  - Email Template Builder
  - Subject Line Analyzer
  - Audience Segmentation Tool
  - Performance Analytics Dashboard
- **Statistics Section** with real-time platform metrics
- **Testimonials** from satisfied customers
- **Call-to-Action** section with signup form

### 📊 Features Page
- **Comprehensive Feature List** organized by categories:
  - Campaign Creation (Drag & Drop Builder, Templates, HTML Editor)
  - Automation & AI (Smart Workflows, Segmentation, Send Time Optimization)
  - Analytics & Insights (Real-time Analytics, A/B Testing, Audience Insights)
  - Deliverability & Compliance (Spam Testing, GDPR Compliance, 24/7 Support)
- **Feature Comparison Table** vs competitors
- **Integrations Section** with 500+ available integrations
- **API Documentation** preview
- **Pricing Preview** with transparent pricing tiers

### 📝 Blog Page
- **Dynamic Blog System** with categorized articles
- **Search Functionality** for finding relevant content
- **Category Filtering** (AI & Automation, Analytics, Best Practices, etc.)
- **Featured Articles** highlighting important content
- **Newsletter Signup** for blog subscribers
- **Responsive Article Grid** with rich previews

### 📈 Statistics Page
- **Live Platform Statistics** with real-time updates
- **Industry Benchmarks** comparing performance across sectors
- **Performance Metrics** showing platform reliability and speed
- **Global Insights** with regional user distribution and trends
- **Interactive Data Visualizations**

### 💬 Live Chat
- **Interactive Chat Widget** for customer support
- **Minimizable Interface** that doesn't interfere with browsing
- **Real-time Messaging** simulation
- **Professional Chat Experience**

## 🛠 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **UI Components**: Headless UI
- **Responsive Design**: Mobile-first approach

## 🎨 Design Features

- **Modern UI/UX** with clean, professional design
- **Responsive Layout** optimized for all devices
- **Beautiful Animations** and micro-interactions
- **Consistent Color Scheme** with primary/secondary colors
- **Well-structured Components** with reusable design patterns
- **Accessibility Compliant** following WCAG guidelines

## 📱 Pages Structure

```
/                    # Home page with free tools
/features           # Comprehensive features overview
/blog              # Dynamic blog with articles
/statistics        # Platform statistics and insights
```

## 🚀 Getting Started

1. **Navigate to Project Directory**
   ```bash
   cd emailverse-platform
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Navigate to `http://localhost:3000`

### Testing the blog and admin locally (GCP-backed)

You can run the full blog (posts, categories, settings, images) and admin panel against real GCP services from your machine.

1. **Run the one-time local bootstrap script** (recommended):
   ```bash
   cd /Users/raoasifraza/code/clients/email-verse-landing
   ADMIN_EMAIL=admin@example.com ./scripts/bootstrap-local.sh
   ```
   This will:
   - Ensure `gcloud auth login` and `gcloud auth application-default login` are set up
   - Enable required APIs on your current `gcloud` project
   - Generate a `.env` file from your gcloud/Firebase config
   - Grant the `admin` custom claim to the `ADMIN_EMAIL` user in Firebase Auth  
     - If the user doesn’t exist, it will be **created for local use** with a default password `Admin12345!`  
     - You can override this by setting `ADMIN_PASSWORD` before running the script

   After it runs, open `.env` and, if needed, paste `NEXT_PUBLIC_FIREBASE_API_KEY` from Firebase Console.

   **Or** do the steps manually:

   1a. **Log in with gcloud and generate `.env`**:
   ```bash
   gcloud auth login
   gcloud auth application-default login
   gcloud config set project YOUR_PROJECT_ID   # if not already set
   chmod +x scripts/generate-env.sh
   ./scripts/generate-env.sh
   ```
   The script uses your current `gcloud` project and default GCS bucket name, and optionally pulls Firebase web config if you have `firebase-tools` and a web app in the project. Edit `.env` if needed (e.g. add `NEXT_PUBLIC_FIREBASE_API_KEY` from Firebase Console if the script couldn’t get it).

   **Or** create `.env` manually: copy `.env.example` to `.env` and set:
   - **GCP_PROJECT_ID** – your Google Cloud project ID
   - **GCS_BUCKET_NAME** – Cloud Storage bucket for blog images (e.g. `your-project-id-blog-images`). Create the bucket in GCP Console if it doesn’t exist.
   - **GOOGLE_APPLICATION_CREDENTIALS** – path to a [service account key JSON](https://console.cloud.google.com/iam-admin/serviceaccounts) (or leave unset and use `gcloud auth application-default login`)
   - **NEXT_PUBLIC_FIREBASE_*** – from [Firebase Console → Project settings](https://console.firebase.google.com/project/_/settings/general): API Key, Auth domain, Project ID.

2. **Enable APIs** in your GCP project (if not already):
   ```bash
   gcloud services enable firestore.googleapis.com storage.googleapis.com identitytoolkit.googleapis.com
   ```

3. **Create an admin user:**
   - In [Firebase Console → Authentication](https://console.firebase.google.com/project/_/authentication/users), enable Email/Password and create a user (e.g. `admin@example.com`).
   - Grant admin claim (from project root, with `GOOGLE_APPLICATION_CREDENTIALS` set):
     ```bash
     node scripts/set-admin.js admin@example.com
     ```

4. **Run the app:**
   ```bash
   npm run dev
   ```
   - **Blog (public):** http://localhost:3000/blog  
   - **Admin:** http://localhost:3000/admin → log in with the Firebase user, then use **Posts**, **Categories**, and **Settings** (all stored in Firestore; images in GCS).

5. **First-time setup in admin:** Open **Categories**, add categories (e.g. “AI & Automation”, “Best Practices”). Then create or edit posts and assign categories; uploads go to your GCS bucket.

6. **Blog list 500 / missing index:** The first time you open `/blog`, the API may return 500 because Firestore needs a composite index. Either open the index-creation URL from the error in your terminal and click **Create index**, or run `firebase use <your-project-id>` then `make firestore-indexes` to deploy indexes from `firestore.indexes.json`.

## 📦 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── features/         # Features page
│   ├── blog/            # Blog page
│   └── statistics/      # Statistics page
├── components/           # Reusable components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── LiveChat.tsx     # Chat widget
│   ├── home/           # Home page components
│   ├── features/       # Features page components
│   ├── blog/          # Blog components
│   └── statistics/    # Statistics components
├── public/            # Static assets
├── terraform/         # Infrastructure as Code
│   ├── main.tf       # GCP resources (Cloud Run, Registry)
│   ├── variables.tf  # Input variables
│   ├── outputs.tf    # Output values
│   └── .gitignore    # Ignore tfstate files
├── Dockerfile         # Container build config
├── deploy.sh          # One-click deployment script
├── cloudbuild.yaml    # CI/CD configuration
├── DEPLOYMENT.md      # Detailed deployment guide
└── README.md         # Project documentation
```

## 🎯 Key Components

### Home Page Components
- `HeroSection` - Main landing section with value proposition
- `FeaturesOverview` - Key features highlight
- `FreeToolsSection` - Interactive tools showcase
- `StatsSection` - Platform statistics
- `TestimonialsSection` - Customer testimonials
- `CTASection` - Call-to-action with signup form

### Features Page Components
- `FeaturesHero` - Features page header
- `FeaturesList` - Comprehensive feature breakdown
- `ComparisonTable` - Competitor comparison
- `IntegrationsSection` - Available integrations
- `PricingPreview` - Pricing information

### Blog Components
- `BlogHero` - Blog landing section
- `BlogCategories` - Category filtering
- `BlogGrid` - Article listings
- `BlogNewsletter` - Newsletter signup

### Statistics Components
- `StatsHero` - Statistics overview
- `LiveStats` - Real-time metrics
- `IndustryBenchmarks` - Performance comparisons
- `PerformanceMetrics` - Platform metrics
- `GlobalInsights` - Worldwide usage data

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... more shades
  }
}
```

### Content
- Update site information in component files
- Modify statistics and metrics to match your platform
- Replace placeholder images with actual assets
- Customize testimonials and case studies

### Styling
- Global styles in `app/globals.css`
- Component-specific styles using Tailwind classes
- Custom animations and transitions

## 📊 Performance Features

- **Optimized Images** with Next.js Image component
- **Code Splitting** with dynamic imports
- **SEO Optimized** with proper meta tags
- **Fast Loading** with optimized assets
- **Mobile Performance** with responsive design

## 🔒 Best Practices

- **TypeScript** for type safety
- **Component Modularity** for maintainability
- **Responsive Design** for all screen sizes
- **Accessibility** compliance
- **Clean Code** structure and organization

## ☁️ GCP Deployment

Deploy this site to Google Cloud Platform with **minimal costs** using Cloud Run (serverless containers).

### 💰 Estimated Monthly Costs

| Traffic Level | Monthly Cost |
|---------------|--------------|
| Low (< 10k views) | **$0 - $2** |
| Medium (10k-100k views) | **$2 - $10** |
| High (100k+ views) | **$10 - $30** |

> Cloud Run scales to **zero** when idle — no traffic means no cost!

#### 📊 Detailed Cost Breakdown

| GCP Service | Pricing | Your Config | Est. Monthly |
|-------------|---------|-------------|--------------|
| **Cloud Run** | $0.00002400/vCPU-sec | 1 vCPU, 512MB | ~$0-5 |
| | $0.00000250/GB-sec | min: 0, max: 3 | (scales to 0) |
| **Artifact Registry** | $0.10/GB storage | ~200MB image | ~$0.02 |
| **Network Egress** | First 1GB free | Low traffic | ~$0 |
| **SSL Certificate** | Free | Included | $0 |
| **Custom Domain** | Free | Optional | $0 |
| | | **TOTAL** | **$0 - $5** |

**Why so cheap?**
- ✅ **Scale to zero** — No instances running when idle
- ✅ **Pay per request** — Only charged for actual usage
- ✅ **No base cost** — No VMs running 24/7
- ✅ **Free tier** — 2M requests/month free

### 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          Google Cloud Platform                               │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                         Cloud Run Service                            │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                  │    │
│  │  │ Instance 0  │  │ Instance 1  │  │ Instance 2  │  (auto-scaling)  │    │
│  │  │  (Next.js)  │  │  (Next.js)  │  │  (Next.js)  │                  │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                  │    │
│  │         │                │                │                          │    │
│  │         └────────────────┴────────────────┘                          │    │
│  │                          │                                           │    │
│  └──────────────────────────│───────────────────────────────────────────┘    │
│                             │                                                │
│  ┌──────────────────────────┴───────────────────────────────────────────┐   │
│  │                    Artifact Registry                                  │   │
│  │                 (Docker Container Images)                             │   │
│  │                    emailverse-repo                                    │   │
│  └───────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ HTTPS (*.run.app)
                                    │
┌───────────────────────────────────┴───────────────────────────────────────┐
│                              Internet                                      │
│                                                                            │
│    👤 Users ──────────────────────────────────────────────────────────    │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

**Key Components:**
- **Cloud Run**: Serverless container platform (scales 0-3 instances)
- **Artifact Registry**: Stores Docker images
- **Auto-scaling**: Scales to zero when idle, up to 3 instances under load
- **HTTPS**: Free SSL certificates included

---

### 🔧 Prerequisites

1. **Google Cloud Account** — [Sign up here](https://cloud.google.com/) (includes $300 free credit)
2. **Google Cloud SDK (gcloud)** — [Install guide](https://cloud.google.com/sdk/docs/install)
3. **Docker** — [Install guide](https://docs.docker.com/get-docker/)
4. **Terraform** (optional) — [Install guide](https://developer.hashicorp.com/terraform/install)

---

### 🔌 Connect to GCP

#### Step 1: Create a GCP Project

```bash
# Login to Google Cloud
gcloud auth login

# Create a new project (or use existing)
gcloud projects create emailverse-prod --name="EmailVerse Production"

# Set as active project
gcloud config set project emailverse-prod

# Link billing account (required for Cloud Run)
# Get your billing account ID
gcloud billing accounts list

# Link it to your project
gcloud billing projects link emailverse-prod --billing-account=YOUR_BILLING_ACCOUNT_ID
```

#### Step 2: Enable Required APIs

```bash
gcloud services enable \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com
```

#### Step 3: Configure Docker Authentication

```bash
# Configure Docker to push to GCP Artifact Registry
gcloud auth configure-docker us-central1-docker.pkg.dev
```

---

### 🚀 Deploy Options

#### Option 1: One-Click Deploy (Recommended)

```bash
# Make script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

The script will:
1. Enable required GCP APIs
2. Create Artifact Registry repository
3. Build and push Docker image
4. Deploy to Cloud Run
5. Output your live URL

---

#### Option 2: Manual gcloud Deploy

```bash
# Set variables
PROJECT_ID=$(gcloud config get-value project)
REGION="us-central1"
SERVICE_NAME="emailverse-landing"

# Create Artifact Registry repo
gcloud artifacts repositories create emailverse-repo \
  --repository-format=docker \
  --location=$REGION

# Build and push image
docker build -t $REGION-docker.pkg.dev/$PROJECT_ID/emailverse-repo/emailverse-landing:latest .
docker push $REGION-docker.pkg.dev/$PROJECT_ID/emailverse-repo/emailverse-landing:latest

# Deploy to Cloud Run
gcloud run deploy $SERVICE_NAME \
  --image $REGION-docker.pkg.dev/$PROJECT_ID/emailverse-repo/emailverse-landing:latest \
  --region $REGION \
  --platform managed \
  --allow-unauthenticated \
  --cpu 1 \
  --memory 512Mi \
  --min-instances 0 \
  --max-instances 3
```

---

#### Option 3: Terraform Deploy (Infrastructure as Code)

```bash
cd terraform

# Copy and configure variables
cp terraform.tfvars.example terraform.tfvars
nano terraform.tfvars  # Add your project_id

# Initialize Terraform
terraform init

# Preview changes
terraform plan

# Deploy infrastructure
terraform apply
```

**Note:** Build and push the Docker image first before running Terraform:
```bash
# Build and push image
docker build -t us-central1-docker.pkg.dev/YOUR_PROJECT_ID/emailverse-repo/emailverse-landing:latest .
docker push us-central1-docker.pkg.dev/YOUR_PROJECT_ID/emailverse-repo/emailverse-landing:latest
```

---

### 🔄 CI/CD with Cloud Build

Set up automatic deployments on every git push:

#### 1. Connect Repository

```bash
# Connect your GitHub repo in Cloud Console
# Go to: Cloud Build > Triggers > Connect Repository
```

#### 2. Create Build Trigger

```bash
gcloud builds triggers create github \
  --repo-name=email-verse-landing \
  --repo-owner=YOUR_GITHUB_USERNAME \
  --branch-pattern="^main$" \
  --build-config=cloudbuild.yaml
```

Now every push to `main` automatically deploys!

---

### 🌐 Custom Domain Setup

To map a custom domain (e.g., `email-verse.com`), you can configure it directly via Terraform:
1. Open `terraform/terraform.tfvars`.
2. Set `custom_domain = "email-verse.com"`.
3. Run `terraform apply`. 

The Terraform configuration automatically creates domain mappings for both the root domain (`email-verse.com`) and the **www** subdomain (`www.email-verse.com`).

#### DNS Records to Add

After applying, update your domain registrar's DNS settings with the records provided in the Terraform output. Typically, Cloud Run domain mappings require:

| Type | Name/Host | Target/Value |
|------|-----------|--------------|
| A | @ | `216.239.32.21`, `216.239.34.21`, `216.239.36.21`, `216.239.38.21` |
| AAAA | @ | `2001:4860:4802:32::15`, `2001:4860:4802:34::15`, `2001:4860:4802:36::15`, `2001:4860:4802:38::15` |
| CNAME | www | `ghs.googlehosted.com.` |

---

### 📊 Monitoring

```bash
# View logs
gcloud run services logs read emailverse-landing --region us-central1

# Stream logs in real-time
gcloud run services logs tail emailverse-landing --region us-central1

# Get service URL
gcloud run services describe emailverse-landing --region us-central1 --format 'value(status.url)'
```

---

### 🗑️ Cleanup / Delete

```bash
# Delete Cloud Run service
gcloud run services delete emailverse-landing --region us-central1

# Delete Artifact Registry repo (and all images)
gcloud artifacts repositories delete emailverse-repo --location us-central1

# Or destroy everything with Terraform
cd terraform && terraform destroy
```

---

### 📁 Deployment Files

| File | Purpose |
|------|---------|
| `Dockerfile` | Multi-stage build for optimized container |
| `deploy.sh` | One-click deployment script |
| `cloudbuild.yaml` | CI/CD configuration |
| `terraform/main.tf` | GCP infrastructure definition |
| `terraform/variables.tf` | Configurable variables |
| `terraform/outputs.tf` | Output values |
| `DEPLOYMENT.md` | Detailed deployment guide |

---

## 📈 Future Enhancements

- Add actual backend integration
- Implement user authentication
- Add real-time data connections
- Integrate with email service providers
- Add more interactive features
- Implement advanced analytics

## 🤝 Contributing

This project serves as a template for building modern email marketing platforms. Feel free to use it as a starting point for your own projects.

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

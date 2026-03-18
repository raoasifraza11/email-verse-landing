.PHONY: help auth env firebase-login firebase-env bootstrap-local admin install dev build tf-apply tf-destroy bucket firestore-indexes

PROJECT_DIR  := $(shell pwd)
PROJECT_ID   ?= $(shell gcloud config get-value project 2>/dev/null)
# Default close region for Pakistan; override with `make bucket REGION=asia-south1`
REGION       ?= asia-south1
BUCKET_NAME  ?= $(shell grep -E '^GCS_BUCKET_NAME=' .env 2>/dev/null | head -1 | cut -d'=' -f2)

help:
	@echo "Useful commands:"
	@echo "  make auth              # gcloud user + ADC login"
	@echo "  make env               # generate .env from gcloud/Firebase"
	@echo "  make firebase-login    # Firebase CLI login (optional; firebase-env uses gcloud auth)"
	@echo "  make firebase-env      # fetch Firebase Web API key into .env (uses gcloud auth; no firebase init)"
	@echo "  make bucket            # create the GCS bucket from .env (idempotent)"
	@echo "  make firestore-indexes # deploy Firestore indexes (fixes blog list 500; needs firebase login)"
	@echo "  make bootstrap-local   # one-time local setup (auth, env, admin user+claim)"
	@echo "                         #   uses ADMIN_EMAIL and optional ADMIN_PASSWORD (default: Admin12345!)"
	@echo "  make admin ADMIN_EMAIL=you@example.com  # grant Firebase admin claim (uses ADMIN_PASSWORD if set)"
	@echo "  make install           # npm install"
	@echo "  make dev               # npm run dev"
	@echo "  make build             # npm run build (Next.js production build)"
	@echo "  make tf-apply          # terraform apply"
	@echo "  make tf-destroy        # terraform destroy"

auth:
	gcloud auth login
	gcloud auth application-default login

env:
	chmod +x scripts/generate-env.sh
	./scripts/generate-env.sh

firebase-login:
	firebase login

firebase-env:
	chmod +x scripts/fetch-firebase-web-config.sh
	./scripts/fetch-firebase-web-config.sh

bootstrap-local:
	chmod +x scripts/bootstrap-local.sh
	ADMIN_EMAIL=$(ADMIN_EMAIL) ./scripts/bootstrap-local.sh

admin:
ifndef ADMIN_EMAIL
	$(error ADMIN_EMAIL is not set. Usage: make admin ADMIN_EMAIL=you@example.com)
endif
	node scripts/set-admin.js $(ADMIN_EMAIL)

install:
	npm install

dev:
	npm run dev

build:
	npm run build

bucket:
ifndef PROJECT_ID
	$(error PROJECT_ID is not set and gcloud config has no active project)
endif
ifndef BUCKET_NAME
	$(error BUCKET_NAME could not be read from .env (GCS_BUCKET_NAME=...))
endif
	@echo "Ensuring bucket gs://$(BUCKET_NAME)/ exists in project $(PROJECT_ID) (region: $(REGION))..."
	@if gsutil ls -b gs://$(BUCKET_NAME)/ >/dev/null 2>&1; then \
	  echo "Bucket already exists."; \
	else \
	  gsutil mb -p $(PROJECT_ID) -l $(REGION) gs://$(BUCKET_NAME)/; \
	fi

firestore-indexes:
	@echo "Deploying Firestore indexes (firestore.indexes.json)..."
	firebase deploy --only firestore:indexes

tf-apply:
	cd terraform && terraform apply

tf-destroy:
	cd terraform && terraform destroy


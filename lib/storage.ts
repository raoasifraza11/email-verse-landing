import { Storage } from '@google-cloud/storage';

// Initialize Cloud Storage
let storage: Storage | null = null;

export function getStorage(): Storage {
  if (!storage) {
    storage = new Storage({
      projectId: process.env.GCP_PROJECT_ID || process.env.GOOGLE_CLOUD_PROJECT,
    });
  }
  return storage;
}

// Get bucket name from environment or use default
export function getBucketName(): string {
  return process.env.GCS_BUCKET_NAME || `${process.env.GCP_PROJECT_ID || 'emailverse'}-blog-images`;
}

// Upload file to Cloud Storage
export async function uploadFile(
  file: Buffer,
  fileName: string,
  contentType: string
): Promise<string> {
  const storage = getStorage();
  const bucket = storage.bucket(getBucketName());
  const fileRef = bucket.file(fileName);

  await fileRef.save(file, {
    contentType,
    metadata: {
      cacheControl: 'public, max-age=31536000',
    },
  });

  // Make file publicly readable
  await fileRef.makePublic();

  // Return public URL
  return `https://storage.googleapis.com/${getBucketName()}/${fileName}`;
}

// Delete file from Cloud Storage
export async function deleteFile(fileName: string): Promise<void> {
  const storage = getStorage();
  const bucket = storage.bucket(getBucketName());
  const fileRef = bucket.file(fileName);
  await fileRef.delete();
}

// Generate unique file name
export function generateFileName(originalName: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);
  const extension = originalName.split('.').pop();
  return `blog/${timestamp}-${random}.${extension}`;
}


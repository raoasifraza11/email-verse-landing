import { Firestore } from '@google-cloud/firestore';

// Initialize Firestore
// In production, this will use Application Default Credentials from GCP
// In development, you can use a service account key file
let firestore: Firestore | null = null;

export function getFirestore(): Firestore {
  if (!firestore) {
    // Initialize Firestore with default credentials
    // For Cloud Run, this will automatically use the service account
    firestore = new Firestore({
      projectId: process.env.GCP_PROJECT_ID || process.env.GOOGLE_CLOUD_PROJECT,
    });
  }
  return firestore;
}

// Blog post collection name
export const BLOG_POSTS_COLLECTION = 'blogPosts';

// Blog post interface
export interface BlogPost {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string; // ISO date string
  readTime: string;
  category: string;
  imageUrl: string;
  featured: boolean;
  published: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  slug?: string;
}

// Helper to convert Firestore document to BlogPost
export function docToBlogPost(doc: any): BlogPost {
  const data = doc.data();
  return {
    id: doc.id,
    ...data,
    createdAt: data.createdAt?.toDate(),
    updatedAt: data.updatedAt?.toDate(),
  } as BlogPost;
}



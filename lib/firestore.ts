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
  imageAlt?: string;
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

// --- Blog Categories (GCP Firestore) ---
export const BLOG_CATEGORIES_COLLECTION = 'blogCategories';

export interface BlogCategory {
  id?: string;
  name: string;
  slug: string;
  order: number;
  color?: string; // e.g. 'text-blue-600' for Tailwind
  createdAt?: Date;
  updatedAt?: Date;
}

export function docToBlogCategory(doc: any): BlogCategory {
  const data = doc.data();
  return {
    id: doc.id,
    ...data,
    createdAt: data.createdAt?.toDate(),
    updatedAt: data.updatedAt?.toDate(),
  } as BlogCategory;
}

// --- Blog Settings / Constants (GCP Firestore, single document) ---
export const BLOG_SETTINGS_DOC_ID = 'blogSettings';

export interface BlogSettings {
  defaultReadTime?: string;
  maxImageSizeBytes?: number;
  allowedImageTypes?: string[];
  postsPerPage?: number;
  [key: string]: unknown;
}

export const DEFAULT_BLOG_SETTINGS: BlogSettings = {
  defaultReadTime: '5 min read',
  maxImageSizeBytes: 5 * 1024 * 1024, // 5MB
  allowedImageTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'],
  postsPerPage: 12,
};

const BLOG_SETTINGS_COLLECTION = 'blogSettings';

export async function getBlogSettings(): Promise<BlogSettings> {
  const db = getFirestore();
  const doc = await db.collection(BLOG_SETTINGS_COLLECTION).doc(BLOG_SETTINGS_DOC_ID).get();
  if (!doc.exists) return { ...DEFAULT_BLOG_SETTINGS };
  const data = doc.data() || {};
  return { ...DEFAULT_BLOG_SETTINGS, ...data };
}

export async function setBlogSettings(settings: Partial<BlogSettings>): Promise<BlogSettings> {
  const db = getFirestore();
  const ref = db.collection(BLOG_SETTINGS_COLLECTION).doc(BLOG_SETTINGS_DOC_ID);
  const existing = await getBlogSettings();
  const merged = { ...existing, ...settings, updatedAt: new Date() };
  await ref.set(merged, { merge: true });
  return { ...DEFAULT_BLOG_SETTINGS, ...(await ref.get()).data() };
}



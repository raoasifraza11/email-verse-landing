import { NextRequest, NextResponse } from 'next/server';
import { getFirestore, BLOG_POSTS_COLLECTION, BlogPost, docToBlogPost } from '@/lib/firestore';
import { verifyIdToken, isAdmin } from '@/lib/auth';
import type { CollectionReference, Query } from '@google-cloud/firestore';

// GET - Fetch all blog posts (public, no auth required)
export async function GET(request: NextRequest) {
  try {
    const firestore = getFirestore();
    const { searchParams } = new URL(request.url);
    const publishedOnly = searchParams.get('published') === 'true';
    const featured = searchParams.get('featured') === 'true';
    const category = searchParams.get('category');

    let query: CollectionReference | Query = firestore.collection(BLOG_POSTS_COLLECTION);

    if (publishedOnly) {
      query = query.where('published', '==', true);
    }

    if (featured) {
      query = query.where('featured', '==', true);
    }

    if (category) {
      query = query.where('category', '==', category);
    }

    // Prefer ordering by date descending, but gracefully handle missing composite index
    let snapshot;
    try {
      const orderedQuery = (query as Query).orderBy('date', 'desc');
      snapshot = await orderedQuery.get();
    } catch (error: any) {
      if (
        error?.code === 9 &&
        (error?.details || error?.message || '').includes('The query requires an index')
      ) {
        console.warn(
          'Firestore composite index missing for blogPosts query; falling back without orderBy. ' +
            'Create the index from the Firestore error link or run `make firestore-indexes`.'
        );
        snapshot = await query.get();
      } else {
        throw error;
      }
    }
    const posts = snapshot.docs.map(docToBlogPost);

    return NextResponse.json({ posts }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts', details: error.message },
      { status: 500 }
    );
  }
}

// POST - Create new blog post (requires admin auth)
export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const idToken = authHeader.substring(7);
    const decodedToken = await verifyIdToken(idToken);
    
    // Check if user is admin
    const userIsAdmin = await isAdmin(decodedToken.uid);
    if (!userIsAdmin) {
      return NextResponse.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    const firestore = getFirestore();
    const body: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'> = await request.json();

    // Validate required fields
    if (!body.title || !body.content || !body.author) {
      return NextResponse.json(
        { error: 'Missing required fields: title, content, author' },
        { status: 400 }
      );
    }

    // Generate slug from title
    const slug = body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Create blog post document
    const docRef = firestore.collection(BLOG_POSTS_COLLECTION).doc();
    const now = new Date();
    
    const blogPost: BlogPost = {
      ...body,
      slug,
      createdAt: now,
      updatedAt: now,
    };

    await docRef.set(blogPost);

    return NextResponse.json(
      { id: docRef.id, ...blogPost },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post', details: error.message },
      { status: 500 }
    );
  }
}


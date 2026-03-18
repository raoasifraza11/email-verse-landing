import { NextRequest, NextResponse } from 'next/server';
import {
  getFirestore,
  BLOG_CATEGORIES_COLLECTION,
  BLOG_POSTS_COLLECTION,
  BlogCategory,
  docToBlogCategory,
} from '@/lib/firestore';
import { verifyIdToken, isAdmin } from '@/lib/auth';

// GET - List categories (public). ?counts=true adds post count per category.
export async function GET(request: NextRequest) {
  try {
    const firestore = getFirestore();
    const { searchParams } = new URL(request.url);
    const withCounts = searchParams.get('counts') === 'true';

    const snapshot = await firestore
      .collection(BLOG_CATEGORIES_COLLECTION)
      .orderBy('order', 'asc')
      .get();

    const categories = snapshot.docs.map(docToBlogCategory);

    if (!withCounts) {
      return NextResponse.json({ categories }, { status: 200 });
    }

    // Fetch published posts and aggregate counts by category
    const postsSnapshot = await firestore
      .collection(BLOG_POSTS_COLLECTION)
      .where('published', '==', true)
      .get();

    const countByCategory: Record<string, number> = {};
    postsSnapshot.docs.forEach((doc) => {
      const cat = doc.data().category as string;
      countByCategory[cat] = (countByCategory[cat] || 0) + 1;
    });

    const categoriesWithCounts = categories.map((c) => ({
      ...c,
      count: countByCategory[c.name] ?? 0,
    }));

    return NextResponse.json({ categories: categoriesWithCounts }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch categories',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// POST - Create category (admin only)
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const idToken = authHeader.substring(7);
    const decodedToken = await verifyIdToken(idToken);
    const userIsAdmin = await isAdmin(decodedToken.uid);
    if (!userIsAdmin) {
      return NextResponse.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    const body: Omit<BlogCategory, 'id' | 'createdAt' | 'updatedAt'> = await request.json();
    if (!body.name || body.name.trim() === '') {
      return NextResponse.json({ error: 'Category name is required' }, { status: 400 });
    }

    const slug =
      body.slug?.trim() ||
      body.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    const order = typeof body.order === 'number' ? body.order : 0;

    const firestore = getFirestore();
    const now = new Date();
    const docRef = firestore.collection(BLOG_CATEGORIES_COLLECTION).doc();

    // Build category object without undefined fields (Firestore does not allow undefined)
    const category: BlogCategory = {
      name: body.name.trim(),
      slug,
      order,
      createdAt: now,
      updatedAt: now,
    };

    if (body.color && typeof body.color === 'string' && body.color.trim() !== '') {
      category.color = body.color.trim();
    }

    await docRef.set(category);

    return NextResponse.json(
      { id: docRef.id, ...category },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Error creating category:', error);
    return NextResponse.json(
      {
        error: 'Failed to create category',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

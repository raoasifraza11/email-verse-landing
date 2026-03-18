import { NextRequest, NextResponse } from 'next/server';
import {
  getFirestore,
  BLOG_CATEGORIES_COLLECTION,
  BLOG_POSTS_COLLECTION,
  BlogCategory,
  docToBlogCategory,
} from '@/lib/firestore';
import { verifyIdToken, isAdmin } from '@/lib/auth';

// PUT - Update category (admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const firestore = getFirestore();
    const { id } = await params;
    const body: Partial<BlogCategory> = await request.json();

    const docRef = firestore.collection(BLOG_CATEGORIES_COLLECTION).doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    const existingData = doc.data() as BlogCategory;
    const oldName = existingData.name;

    const updates: Partial<BlogCategory> = { ...body, updatedAt: new Date() };
    if (body.name !== undefined) updates.name = body.name.trim();
    if (body.slug !== undefined) updates.slug = body.slug.trim();
    if (body.order !== undefined) updates.order = body.order;
    if (body.color !== undefined) updates.color = body.color;

    await docRef.update(updates);
    const updated = await docRef.get();

    // If the category name changed, propagate to posts that reference the old name
    if (body.name && body.name.trim() && body.name.trim() !== oldName) {
      const newName = body.name.trim();
      const postsSnapshot = await firestore
        .collection(BLOG_POSTS_COLLECTION)
        .where('category', '==', oldName)
        .get();

      if (!postsSnapshot.empty) {
        const batchSize = 500;
        let batch = firestore.batch();
        let counter = 0;
        const commits: Promise<FirebaseFirestore.WriteResult[]>[] = [];

        postsSnapshot.docs.forEach((postDoc) => {
          batch.update(postDoc.ref, { category: newName });
          counter += 1;
          if (counter === batchSize) {
            commits.push(batch.commit());
            batch = firestore.batch();
            counter = 0;
          }
        });

        if (counter > 0) {
          commits.push(batch.commit());
        }

        await Promise.all(commits);
      }
    }

    return NextResponse.json(
      { category: docToBlogCategory(updated) },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Error updating category:', error);
    return NextResponse.json(
      {
        error: 'Failed to update category',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// DELETE - Delete category (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const firestore = getFirestore();
    const { id } = await params;
    const docRef = firestore.collection(BLOG_CATEGORIES_COLLECTION).doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    const data = doc.data() as BlogCategory;
    const oldName = data.name;

    // Ensure a fallback "Uncategorized" category exists
    const fallbackName = 'Uncategorized';
    const fallbackSlug = 'uncategorized';
    const categoriesCol = firestore.collection(BLOG_CATEGORIES_COLLECTION);
    const existingFallback = await categoriesCol.where('slug', '==', fallbackSlug).limit(1).get();

    if (existingFallback.empty) {
      const now = new Date();
      await categoriesCol.add({
        name: fallbackName,
        slug: fallbackSlug,
        order: 9999,
        createdAt: now,
        updatedAt: now,
      } as BlogCategory);
    }

    // Reassign posts that used this category to "Uncategorized"
    const postsSnapshot = await firestore
      .collection(BLOG_POSTS_COLLECTION)
      .where('category', '==', oldName)
      .get();

    if (!postsSnapshot.empty) {
      const batchSize = 500;
      let batch = firestore.batch();
      let counter = 0;
      const commits: Promise<FirebaseFirestore.WriteResult[]>[] = [];

      postsSnapshot.docs.forEach((postDoc) => {
        batch.update(postDoc.ref, { category: fallbackName });
        counter += 1;
        if (counter === batchSize) {
          commits.push(batch.commit());
          batch = firestore.batch();
          counter = 0;
        }
      });

      if (counter > 0) {
        commits.push(batch.commit());
      }

      await Promise.all(commits);
    }

    await docRef.delete();
    return NextResponse.json({ message: 'Category deleted and posts reassigned' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error deleting category:', error);
    return NextResponse.json(
      {
        error: 'Failed to delete category',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

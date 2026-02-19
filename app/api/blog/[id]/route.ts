import { NextRequest, NextResponse } from 'next/server';
import { getFirestore, BLOG_POSTS_COLLECTION, BlogPost, docToBlogPost } from '@/lib/firestore';
import { verifyIdToken, isAdmin } from '@/lib/auth';

// GET - Fetch single blog post by ID or slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const firestore = getFirestore();
    const { id } = await params;

    // Try to get by ID first
    const docRef = firestore.collection(BLOG_POSTS_COLLECTION).doc(id);
    const doc = await docRef.get();

    if (doc.exists) {
      return NextResponse.json({ post: docToBlogPost(doc) }, { status: 200 });
    }

    // If not found by ID, try to find by slug
    const slugQuery = await firestore
      .collection(BLOG_POSTS_COLLECTION)
      .where('slug', '==', id)
      .limit(1)
      .get();

    if (!slugQuery.empty) {
      return NextResponse.json(
        { post: docToBlogPost(slugQuery.docs[0]) },
        { status: 200 }
      );
    }

    return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
  } catch (error: any) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post', details: error.message },
      { status: 500 }
    );
  }
}

// PUT - Update blog post (requires admin auth)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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
    const { id } = await params;
    const body: Partial<BlogPost> = await request.json();

    const docRef = firestore.collection(BLOG_POSTS_COLLECTION).doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    // Update slug if title changed
    if (body.title) {
      body.slug = body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }

    // Update the document
    await docRef.update({
      ...body,
      updatedAt: new Date(),
    });

    const updatedDoc = await docRef.get();
    return NextResponse.json(
      { post: docToBlogPost(updatedDoc) },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to update blog post', details: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Delete blog post (requires admin auth)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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
    const { id } = await params;

    const docRef = firestore.collection(BLOG_POSTS_COLLECTION).doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    // Delete associated image if exists
    const postData = doc.data() as BlogPost;
    if (postData.imageUrl) {
      try {
        const { deleteFile } = await import('@/lib/storage');
        // Extract file name from URL
        const urlParts = postData.imageUrl.split('/');
        const fileName = urlParts.slice(-2).join('/'); // Get 'blog/filename.ext'
        await deleteFile(fileName);
      } catch (error) {
        console.error('Error deleting image:', error);
        // Continue with post deletion even if image deletion fails
      }
    }

    await docRef.delete();

    return NextResponse.json({ message: 'Blog post deleted successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post', details: error.message },
      { status: 500 }
    );
  }
}


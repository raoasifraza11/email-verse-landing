import { NextRequest, NextResponse } from 'next/server';
import { verifyIdToken, isAdmin } from '@/lib/auth';
import { uploadFile, generateFileName } from '@/lib/storage';
import { getBlogSettings, DEFAULT_BLOG_SETTINGS } from '@/lib/firestore';

// POST - Upload image file (uses blog settings from GCP for allowed types/size)
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

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Use blog settings from GCP (constants)
    let allowedTypes: string[];
    let maxSize: number;
    try {
      const settings = await getBlogSettings();
      allowedTypes = (settings.allowedImageTypes as string[]) ?? DEFAULT_BLOG_SETTINGS.allowedImageTypes!;
      maxSize = (settings.maxImageSizeBytes as number) ?? DEFAULT_BLOG_SETTINGS.maxImageSizeBytes!;
    } catch {
      allowedTypes = DEFAULT_BLOG_SETTINGS.allowedImageTypes!;
      maxSize = DEFAULT_BLOG_SETTINGS.maxImageSizeBytes!;
    }

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only images are allowed.' },
        { status: 400 }
      );
    }

    if (file.size > maxSize) {
      return NextResponse.json(
        { error: `File size exceeds ${Math.round(maxSize / 1024 / 1024)}MB limit` },
        { status: 400 }
      );
    }

    // Convert File to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Generate unique file name
    const fileName = generateFileName(file.name);

    // Upload to Cloud Storage
    const url = await uploadFile(buffer, fileName, file.type);

    return NextResponse.json({ url, fileName }, { status: 200 });
  } catch (error: any) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Failed to upload file', details: error.message },
      { status: 500 }
    );
  }
}



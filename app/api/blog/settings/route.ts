import { NextRequest, NextResponse } from 'next/server';
import { getBlogSettings, setBlogSettings, BlogSettings } from '@/lib/firestore';
import { verifyIdToken, isAdmin } from '@/lib/auth';

// GET - Get blog settings/constants (public)
export async function GET() {
  try {
    const settings = await getBlogSettings();
    // Serialize for JSON (dates etc.)
    const serialized: Record<string, unknown> = { ...settings };
    return NextResponse.json({ settings: serialized }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error fetching blog settings:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch blog settings',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// PUT - Update blog settings (admin only)
export async function PUT(request: NextRequest) {
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

    const body: Partial<BlogSettings> = await request.json();
    const settings = await setBlogSettings(body);
    return NextResponse.json({ settings }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error updating blog settings:', error);
    return NextResponse.json(
      {
        error: 'Failed to update blog settings',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

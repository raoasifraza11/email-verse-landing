'use client';

import { useEffect, useState } from 'react';
import { Settings } from 'lucide-react';
import { BlogSettings } from '@/lib/firestore';

interface SettingsManagerProps {
  authToken: string;
}

export default function SettingsManager({ authToken }: SettingsManagerProps) {
  const [settings, setSettings] = useState<BlogSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    defaultReadTime: '5 min read',
    maxImageSizeBytes: 5 * 1024 * 1024,
    allowedImageTypes: 'image/jpeg, image/jpg, image/png, image/webp, image/gif',
    postsPerPage: 12,
  });

  useEffect(() => {
    fetch('/api/blog/settings')
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (data?.settings) {
          const s = data.settings as BlogSettings;
          setSettings(s);
          setForm({
            defaultReadTime: (s.defaultReadTime as string) ?? '5 min read',
            maxImageSizeBytes: (s.maxImageSizeBytes as number) ?? 5 * 1024 * 1024,
            allowedImageTypes: Array.isArray(s.allowedImageTypes)
              ? (s.allowedImageTypes as string[]).join(', ')
              : 'image/jpeg, image/jpg, image/png, image/webp, image/gif',
            postsPerPage: (s.postsPerPage as number) ?? 12,
          });
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const allowedImageTypes = form.allowedImageTypes
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      const res = await fetch('/api/blog/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          defaultReadTime: form.defaultReadTime,
          maxImageSizeBytes: form.maxImageSizeBytes,
          allowedImageTypes,
          postsPerPage: form.postsPerPage,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setSettings(data.settings);
      } else {
        const err = await res.json();
        alert(err.error || 'Failed to save');
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center py-8 text-gray-500">Loading settings...</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="h-6 w-6 text-primary-600" />
        <h2 className="text-xl font-semibold text-gray-900">Blog Settings</h2>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        These values control how your blog behaves (e.g. image upload limits, default read time).
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Default read time</label>
          <input
            type="text"
            value={form.defaultReadTime}
            onChange={(e) => setForm((f) => ({ ...f, defaultReadTime: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Max image size (bytes)</label>
          <input
            type="number"
            value={form.maxImageSizeBytes}
            onChange={(e) => setForm((f) => ({ ...f, maxImageSizeBytes: Number(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            Current: {Math.round(form.maxImageSizeBytes / 1024 / 1024)} MB
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Allowed image MIME types (comma-separated)</label>
          <input
            type="text"
            value={form.allowedImageTypes}
            onChange={(e) => setForm((f) => ({ ...f, allowedImageTypes: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Posts per page</label>
          <input
            type="number"
            min={1}
            value={form.postsPerPage}
            onChange={(e) => setForm((f) => ({ ...f, postsPerPage: Number(e.target.value) }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="pt-2">
          <button type="submit" disabled={saving} className="btn-primary disabled:opacity-50">
            {saving ? 'Saving...' : 'Save settings'}
          </button>
        </div>
      </form>
    </div>
  );
}

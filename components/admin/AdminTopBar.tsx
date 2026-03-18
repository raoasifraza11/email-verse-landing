'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LayoutDashboard, LogOut, ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface AdminUser {
  uid: string;
  email: string | null;
}

function parseJwt(token: string): any | null {
  try {
    const base64Url = token.split('.')[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

const AdminTopBar = () => {
  const router = useRouter();
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const token = window.localStorage.getItem('authToken');
    if (!token) return;

    const payload = parseJwt(token);
    if (!payload || payload.admin !== true) return;

    try {
      const userRaw = window.localStorage.getItem('user');
      const user = userRaw ? (JSON.parse(userRaw) as AdminUser) : null;
      setAdminUser(user ?? { uid: payload.uid, email: null });
    } catch {
      setAdminUser({ uid: payload.uid, email: null });
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('authToken');
      window.localStorage.removeItem('user');
    }
    // Immediately hide the admin bar
    setAdminUser(null);
    router.push('/');
  };

  if (!adminUser) {
    return null;
  }

  return (
    <div className="w-full bg-gray-900 text-gray-100 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-800 px-2 py-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Admin
          </span>
          <span className="hidden sm:inline text-gray-300">
            Logged in as{' '}
            <span className="font-medium text-white">
              {adminUser.email ?? adminUser.uid}
            </span>
          </span>
          <span className="sm:hidden text-gray-300">
            {adminUser.email ?? adminUser.uid}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/admin"
            className="inline-flex items-center gap-1 rounded-md bg-gray-800 px-2.5 py-1 text-gray-100 hover:bg-gray-700 transition-colors"
          >
            <LayoutDashboard className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Admin Dashboard</span>
            <span className="sm:hidden">Admin</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-gray-200 hover:bg-gray-800 transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">View Site</span>
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-gray-300 hover:bg-red-600/90 hover:text-white transition-colors"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminTopBar;


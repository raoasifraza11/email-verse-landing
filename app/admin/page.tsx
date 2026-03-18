'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Edit, Trash2, Eye, LogOut, FileText, FolderOpen, Settings } from 'lucide-react';
import Link from 'next/link';
import BlogPostForm from '@/components/admin/BlogPostForm';
import CategoriesManager from '@/components/admin/CategoriesManager';
import SettingsManager from '@/components/admin/SettingsManager';
import { BlogPost } from '@/lib/firestore';
import { getAuth, onIdTokenChanged, signOut } from 'firebase/auth';
import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

function getFirebaseAuth() {
  if (!getApps().length) initializeApp(firebaseConfig);
  return getAuth();
}

type AdminTab = 'posts' | 'categories' | 'settings';

export default function AdminPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<AdminTab>('posts');

  useEffect(() => {
    const auth = getFirebaseAuth();
    const unsubscribe = onIdTokenChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Get a fresh token every time (Firebase refreshes it automatically when near expiry)
        const freshToken = await firebaseUser.getIdToken();
        localStorage.setItem('authToken', freshToken);
        localStorage.setItem('user', JSON.stringify({ email: firebaseUser.email, uid: firebaseUser.uid }));
        setAuthToken(freshToken);
        setUser({ email: firebaseUser.email, uid: firebaseUser.uid });
        fetchPosts(freshToken);
      } else {
        // No user signed in — check localStorage for legacy sessions
        const token = localStorage.getItem('authToken');
        const userData = localStorage.getItem('user');
        if (token && userData) {
          setAuthToken(token);
          setUser(JSON.parse(userData));
          fetchPosts(token);
        } else {
          router.push('/admin/login');
        }
      }
    });
    return () => unsubscribe();
  }, [router]);

  const fetchPosts = async (token: string) => {
    try {
      setLoading(true);
      const response = await fetch('/api/blog?published=false');
      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts || []);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        setPosts(posts.filter(p => p.id !== id));
      } else {
        alert('Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Error deleting post');
    }
  };

  const handleLogout = async () => {
    try {
      const auth = getFirebaseAuth();
      await signOut(auth);
    } catch { }
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    router.push('/admin/login');
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingPost(null);
    if (authToken) {
      fetchPosts(authToken);
    }
  };

  if (!authToken || !user) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <FileText className="h-8 w-8 text-primary-600" />
              <h1 className="text-2xl font-bold text-gray-900">Blog Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user.email}</span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          <button
            type="button"
            onClick={() => setActiveTab('posts')}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 font-medium text-sm transition-colors ${activeTab === 'posts'
              ? 'border-primary-600 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            <FileText className="h-4 w-4" />
            Posts
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('categories')}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 font-medium text-sm transition-colors ${activeTab === 'categories'
              ? 'border-primary-600 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            <FolderOpen className="h-4 w-4" />
            Categories
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 font-medium text-sm transition-colors ${activeTab === 'settings'
              ? 'border-primary-600 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            <Settings className="h-4 w-4" />
            Settings
          </button>
        </div>

        {activeTab === 'categories' && authToken && (
          <div className="mb-8">
            <CategoriesManager authToken={authToken} />
          </div>
        )}

        {activeTab === 'settings' && authToken && (
          <div className="mb-8">
            <SettingsManager authToken={authToken} />
          </div>
        )}

        {activeTab === 'posts' && (
          <>
            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-sm font-medium text-gray-500 mb-1">Total Posts</p>
                <p className="text-3xl font-bold text-gray-900">{posts.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-sm font-medium text-gray-500 mb-1">Published</p>
                <div className="flex items-center gap-2">
                  <p className="text-3xl font-bold text-green-600">
                    {posts.filter(p => p.published).length}
                  </p>
                  <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full">Live</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-sm font-medium text-gray-500 mb-1">Drafts</p>
                <div className="flex items-center gap-2">
                  <p className="text-3xl font-bold text-yellow-600">
                    {posts.filter(p => !p.published).length}
                  </p>
                  <span className="text-xs font-medium text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded-full">In Progress</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Blog Posts</h2>
              <button
                onClick={() => {
                  setEditingPost(null);
                  setShowForm(true);
                }}
                className="btn-primary flex items-center space-x-2 shadow-lg shadow-primary-200"
              >
                <Plus className="h-5 w-5" />
                <span>New Post</span>
              </button>
            </div>

            {/* Posts Table */}
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                <p className="mt-4 text-gray-600">Loading posts...</p>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">No blog posts yet</p>
                <button
                  onClick={() => {
                    setEditingPost(null);
                    setShowForm(true);
                  }}
                  className="btn-primary"
                >
                  Create Your First Post
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Author
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {posts.map((post) => (
                      <tr key={post.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{post.title}</div>
                          {post.featured && (
                            <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-primary-100 text-primary-800 rounded">
                              Featured
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {post.author}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {post.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${post.published
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                              }`}
                          >
                            {post.published ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(post.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            {post.published ? (
                              <Link
                                href={`/blog/${post.slug || post.id}`}
                                target="_blank"
                                className="text-primary-600 hover:text-primary-900"
                                title="View published"
                              >
                                <Eye className="h-4 w-4" />
                              </Link>
                            ) : (
                              <Link
                                href={`/blog/${post.slug || post.id}?preview=true`}
                                target="_blank"
                                className="text-yellow-600 hover:text-yellow-900"
                                title="Preview draft"
                              >
                                <Eye className="h-4 w-4" />
                              </Link>
                            )}
                            <button
                              onClick={() => {
                                setEditingPost(post);
                                setShowForm(true);
                              }}
                              className="text-blue-600 hover:text-blue-900"
                              title="Edit"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => post.id && handleDelete(post.id)}
                              className="text-red-600 hover:text-red-900"
                              title="Delete"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>

      {/* Blog Post Form Modal */}
      {showForm && (
        <BlogPostForm
          post={editingPost}
          authToken={authToken}
          onClose={handleFormClose}
        />
      )}
    </div>
  );
}



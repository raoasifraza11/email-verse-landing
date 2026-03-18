'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Clock, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/firestore';

interface CategoryOption {
  name: string;
  slug: string;
}

const BlogGrid = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || '';

  const POSTS_PER_PAGE = 6;
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  useEffect(() => {
    fetch('/api/blog/categories')
      .then((r) => (r.ok ? r.json() : { categories: [] }))
      .then((data) => setCategories(data.categories || []))
      .catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    setVisibleCount(POSTS_PER_PAGE);
    fetchPosts();
  }, [categoryFromUrl]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const url = categoryFromUrl
        ? `/api/blog?published=true&category=${encodeURIComponent(categoryFromUrl)}`
        : '/api/blog?published=true';

      const response = await fetch(url);
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

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    } catch {
      return dateString;
    }
  };

  if (loading && posts.length === 0) {
    return (
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            <p className="mt-4 text-gray-600">Loading posts...</p>
          </div>
        </div>
      </section>
    );
  }

  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
          <div className="flex items-center space-x-4">
            <select
              value={categoryFromUrl}
              onChange={(e) => {
                const v = e.target.value;
                const params = new URLSearchParams(searchParams.toString());
                if (v) params.set('category', v);
                else params.delete('category');
                router.push(`/blog${params.toString() ? `?${params.toString()}` : ''}`);
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.slug} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No blog posts found.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visiblePosts.map((post) => (
                <article key={post.id} className="card overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-white border border-gray-100 rounded-2xl">
                  <div className="relative">
                    <img
                      src={post.imageUrl || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 shadow-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 shadow-sm backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1.5 font-medium">
                        <User className="h-4 w-4 text-gray-400" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 font-medium">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                      <span className="text-sm font-medium text-gray-400">{formatDate(post.date)}</span>
                      <Link
                        href={`/blog/${post.slug || post.id}`}
                        className="text-primary-600 hover:text-primary-700 font-bold text-sm flex items-center space-x-1 group/link"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {posts.length > visibleCount && (
              <div className="mt-16 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + POSTS_PER_PAGE)}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:border-primary-600 hover:text-primary-600 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Load More Articles
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default BlogGrid
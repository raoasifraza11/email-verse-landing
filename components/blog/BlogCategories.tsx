'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Grid, BarChart3, TrendingUp, Hash, Layers } from 'lucide-react';

interface CategoryItem {
  id?: string;
  name: string;
  slug: string;
  order: number;
  color?: string;
  count?: number;
}

const BlogCategories = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || '';

  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetch('/api/blog/categories?counts=true')
      .then((r) => (r.ok ? r.json() : { categories: [] }))
      .then((data) => {
        const cats = data.categories || [];
        setCategories(cats);
        const total = cats.reduce((sum: number, c: CategoryItem) => sum + (c.count || 0), 0);
        setTotalCount(total);
      })
      .catch(() => setCategories([]))
      .finally(() => setLoading(false));
  }, []);

  const activeCategory = categoryFromUrl || 'All';

  const setCategory = (name: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (name === 'All' || !name) {
      params.delete('category');
    } else {
      params.set('category', name);
    }
    router.push(`/blog${params.toString() ? `?${params.toString()}` : ''}`);
  };

  const allItem: CategoryItem = { name: 'All', slug: '', order: -1, count: totalCount };

  if (loading) {
    return (
      <section className="py-12 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-12 bg-gray-200 rounded-lg animate-pulse max-w-2xl mx-auto" />
        </div>
      </section>
    );
  }

  const displayCategories = [allItem, ...categories];
  const activeCount = activeCategory === 'All' ? totalCount : (categories.find((c) => c.name === activeCategory)?.count ?? 0);
  const articleLabel = activeCount === 1 ? 'article found' : 'articles found';
  const showChipCounts = totalCount > 1;
  const showStats = categories.length > 1 && totalCount > 1;

  // Icons for stat cards
  const statIcons = [TrendingUp, Hash, Layers, BarChart3];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50/50 border-b border-gray-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute top-12 -left-24 w-72 h-72 bg-accent-100 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-3">
            Explore Topics
          </h2>
          <p className="text-gray-500 font-medium flex items-center justify-center gap-2">
            <Grid className="h-4 w-4 text-primary-500" />
            Showing {activeCount} {articleLabel} in {activeCategory}
          </p>
        </div>

        {/* Desktop Categories */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-10">
          {displayCategories.map((category) => {
            const isActive = activeCategory === category.name;
            return (
              <button
                key={category.slug || 'all'}
                type="button"
                onClick={() => setCategory(category.name)}
                className={`
                  group flex items-center space-x-2 px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 shadow-sm border
                  ${isActive
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 border-transparent text-white shadow-md scale-105'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-primary-300 hover:shadow-md hover:-translate-y-0.5'
                  }
                `}
              >
                <span className={`font-semibold ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-primary-700 transition-colors'}`}>
                  {category.name}
                </span>
                {showChipCounts && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-bold shadow-sm transition-colors ${isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-500 group-hover:bg-primary-50 group-hover:text-primary-600'
                      }`}
                  >
                    {category.count ?? 0}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Categories */}
        <div className="md:hidden mb-8 max-w-sm mx-auto">
          <div className="relative">
            <select
              value={activeCategory}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full pl-4 pr-10 py-3 appearance-none bg-white border border-gray-300 text-gray-700 font-medium rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
            >
              <option value="All">
                All Topics {totalCount > 0 ? `(${totalCount})` : ''}
              </option>
              {categories.map((cat) => (
                <option key={cat.slug} value={cat.name}>
                  {cat.name} {typeof cat.count === 'number' && cat.count > 0 ? `(${cat.count})` : ''}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Category Stats Cards */}
        {showStats && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-bold tracking-wider text-gray-400 uppercase">Popular Categories</h3>
              <div className="h-px bg-gray-200 flex-1 ml-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {categories.slice(0, 4).map((cat, index) => {
                const Icon = statIcons[index % statIcons.length];
                return (
                  <div
                    key={cat.slug}
                    onClick={() => setCategory(cat.name)}
                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                      <Icon className="w-16 h-16 text-primary-600" />
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>

                    <div className="relative z-10">
                      <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-primary-600 to-accent-600">
                        {cat.count ?? 0}
                      </div>
                      <div className="text-sm font-medium text-gray-600 mt-1 group-hover:text-gray-900 transition-colors line-clamp-1">
                        {cat.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogCategories;

'use client'

import { useState } from 'react'
import { 
  Zap, 
  BarChart3, 
  Users, 
  Shield, 
  Lightbulb, 
  TrendingUp,
  Filter
} from 'lucide-react'

const BlogCategories = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    { name: 'All', icon: Filter, count: 124, color: 'text-gray-600' },
    { name: 'AI & Automation', icon: Zap, count: 28, color: 'text-blue-600' },
    { name: 'Analytics', icon: BarChart3, count: 22, color: 'text-green-600' },
    { name: 'Segmentation', icon: Users, count: 19, color: 'text-purple-600' },
    { name: 'Deliverability', icon: Shield, count: 16, color: 'text-orange-600' },
    { name: 'Best Practices', icon: Lightbulb, count: 25, color: 'text-yellow-600' },
    { name: 'Industry Trends', icon: TrendingUp, count: 14, color: 'text-red-600' }
  ]

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Browse by Category</h2>
          <div className="text-sm text-gray-500">
            {categories.find(cat => cat.name === activeCategory)?.count || 0} articles
          </div>
        </div>

        {/* Desktop Categories */}
        <div className="hidden md:flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                activeCategory === category.name
                  ? 'bg-primary-100 text-primary-700 shadow-sm'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <category.icon className={`h-4 w-4 ${
                activeCategory === category.name ? 'text-primary-600' : category.color
              }`} />
              <span className="font-medium">{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeCategory === category.name
                  ? 'bg-primary-200 text-primary-700'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile Categories */}
        <div className="md:hidden">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {categories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.name} ({category.count})
              </option>
            ))}
          </select>
        </div>

        {/* Category Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">28</div>
            <div className="text-sm text-blue-700">AI Articles</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">22</div>
            <div className="text-sm text-green-700">Analytics Guides</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">19</div>
            <div className="text-sm text-purple-700">Segmentation Tips</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">16</div>
            <div className="text-sm text-orange-700">Deliverability</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogCategories
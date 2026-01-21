import { Search, TrendingUp } from 'lucide-react'

const BlogHero = () => {
  const featuredPost = {
    title: 'The Future of Email Marketing: AI-Powered Personalization',
    excerpt: 'Discover how artificial intelligence is revolutionizing email marketing and learn practical strategies to implement AI-powered personalization in your campaigns.',
    author: 'Sarah Johnson',
    date: 'December 28, 2024',
    readTime: '8 min read',
    category: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop'
  }

  const trendingTopics = [
    'Email Deliverability',
    'Spam Prevention',
    'A/B Testing',
    'GDPR Compliance'
  ]

  return (
    <section className="gradient-bg section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <TrendingUp className="h-4 w-4 mr-2" />
                Email Marketing Insights
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Stay Ahead with
                <span className="text-primary-600 block">Expert Insights</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Get the latest email marketing strategies, industry trends, and actionable tips 
                from our team of experts. Grow your knowledge and your business.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Trending Topics */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Trending Topics:</h3>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 bg-white/80 hover:bg-white text-gray-700 text-sm rounded-full border border-gray-200 transition-colors duration-200"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Featured Post */}
          <div className="card overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="relative">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                  {featuredPost.category}
                </span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                {featuredPost.title}
              </h2>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold text-sm">
                      {featuredPost.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{featuredPost.author}</div>
                    <div className="text-xs text-gray-500">{featuredPost.date}</div>
                  </div>
                </div>
                
                <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogHero
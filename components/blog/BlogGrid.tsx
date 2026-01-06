import { Clock, User, ArrowRight } from 'lucide-react'

const BlogGrid = () => {
  const posts = [
    {
      id: 1,
      title: '10 Email Marketing Trends to Watch in 2024',
      excerpt: 'Stay ahead of the curve with these emerging email marketing trends that will shape the industry.',
      author: 'Mike Chen',
      date: 'Dec 25, 2024',
      readTime: '6 min read',
      category: 'Industry Trends',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      featured: false
    },
    {
      id: 2,
      title: 'Advanced Segmentation Strategies That Actually Work',
      excerpt: 'Learn how to segment your audience effectively and increase engagement rates by up to 300%.',
      author: 'Sarah Johnson',
      date: 'Dec 22, 2024',
      readTime: '8 min read',
      category: 'Segmentation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      featured: true
    },
    {
      id: 3,
      title: 'How AI is Revolutionizing Email Automation',
      excerpt: 'Discover the power of AI-driven email automation and how it can transform your marketing campaigns.',
      author: 'David Park',
      date: 'Dec 20, 2024',
      readTime: '7 min read',
      category: 'AI & Automation',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Email Deliverability Best Practices for 2024',
      excerpt: 'Ensure your emails reach the inbox with these proven deliverability optimization techniques.',
      author: 'Emily Rodriguez',
      date: 'Dec 18, 2024',
      readTime: '5 min read',
      category: 'Deliverability',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'The Complete Guide to A/B Testing Email Campaigns',
      excerpt: 'Master the art of A/B testing and optimize your email campaigns for maximum performance.',
      author: 'Alex Thompson',
      date: 'Dec 15, 2024',
      readTime: '10 min read',
      category: 'Best Practices',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop',
      featured: true
    },
    {
      id: 6,
      title: 'Building Customer Loyalty Through Email Marketing',
      excerpt: 'Learn strategies to turn one-time buyers into loyal customers using targeted email campaigns.',
      author: 'Lisa Wang',
      date: 'Dec 12, 2024',
      readTime: '6 min read',
      category: 'Best Practices',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      featured: false
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Most Viewed</option>
            </select>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="card overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {post.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-1">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogGrid
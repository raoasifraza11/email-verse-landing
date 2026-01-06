import { Book, Search, Code, Zap, Users, Shield, ArrowRight, ExternalLink } from 'lucide-react'

export default function DocsPage() {
  const sections = [
    {
      icon: Zap,
      title: 'Getting Started',
      description: 'Quick start guide to set up your first campaign',
      articles: [
        'Creating Your First Campaign',
        'Setting Up Your Account',
        'Importing Contacts',
        'Basic Email Templates'
      ]
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation with examples',
      articles: [
        'Authentication',
        'Campaigns API',
        'Contacts API',
        'Analytics API',
        'Webhooks'
      ]
    },
    {
      icon: Users,
      title: 'Campaign Management',
      description: 'Learn how to create and manage email campaigns',
      articles: [
        'Campaign Types',
        'A/B Testing',
        'Automation Workflows',
        'Segmentation',
        'Scheduling'
      ]
    },
    {
      icon: Shield,
      title: 'Deliverability',
      description: 'Best practices for email deliverability',
      articles: [
        'Authentication Setup',
        'Reputation Management',
        'List Hygiene',
        'Spam Testing',
        'Compliance Guidelines'
      ]
    }
  ]

  const popularArticles = [
    {
      title: 'How to Create Your First Email Campaign',
      category: 'Getting Started',
      readTime: '5 min read',
      views: '12.5K views'
    },
    {
      title: 'Setting Up DKIM and SPF Records',
      category: 'Deliverability',
      readTime: '8 min read',
      views: '8.2K views'
    },
    {
      title: 'API Authentication Guide',
      category: 'API Reference',
      readTime: '6 min read',
      views: '6.8K views'
    },
    {
      title: 'Advanced Segmentation Strategies',
      category: 'Campaign Management',
      readTime: '10 min read',
      views: '5.4K views'
    }
  ]

  const quickLinks = [
    { title: 'API Keys', href: '/docs/api/authentication' },
    { title: 'Webhooks Setup', href: '/docs/api/webhooks' },
    { title: 'SMTP Settings', href: '/docs/deliverability/smtp' },
    { title: 'Template Variables', href: '/docs/templates/variables' },
    { title: 'Troubleshooting', href: '/docs/support/troubleshooting' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Everything you need to know about using EmailVerse
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h2>
          <div className="flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
              >
                {link.title}
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Documentation Sections */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Browse Documentation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <div key={section.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl mr-4">
                    <section.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {section.articles.map((article) => (
                    <li key={article}>
                      <a
                        href="#"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                      >
                        <span className="text-gray-700 group-hover:text-blue-600">{article}</span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                      </a>
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  View All Articles
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Articles */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-lg">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.views}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500">{article.readTime}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* API Reference Preview */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            API Reference
          </h2>
          <div className="bg-gray-900 rounded-2xl p-6 overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">Create Campaign</h3>
              <span className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm">POST</span>
            </div>
            <pre className="text-green-400 text-sm">
{`curl -X POST https://api.emailverse.com/v1/campaigns \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Welcome Campaign",
    "subject": "Welcome to EmailVerse!",
    "content": "<h1>Welcome!</h1>",
    "recipients": ["user@example.com"]
  }'`}
            </pre>
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors">
              View Full API Documentation
            </button>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Book className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Need More Help?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
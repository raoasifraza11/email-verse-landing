import { Search, MessageCircle, Book, Video, Users, HelpCircle, CheckCircle, Clock } from 'lucide-react'

export default function HelpPage() {
  const categories = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Learn the basics of EmailVerse',
      articles: 15,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Campaign Management',
      description: 'Create and manage your campaigns',
      articles: 23,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Organize and segment your contacts',
      articles: 12,
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Video,
      title: 'Templates & Design',
      description: 'Design beautiful email templates',
      articles: 18,
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: CheckCircle,
      title: 'Deliverability',
      description: 'Improve your email deliverability',
      articles: 9,
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: HelpCircle,
      title: 'Troubleshooting',
      description: 'Solve common issues',
      articles: 14,
      color: 'from-red-500 to-red-600'
    }
  ]

  const popularArticles = [
    {
      title: 'How to create your first email campaign',
      category: 'Getting Started',
      views: '25.3K',
      helpful: 98
    },
    {
      title: 'Setting up email authentication (SPF, DKIM)',
      category: 'Deliverability',
      views: '18.7K',
      helpful: 95
    },
    {
      title: 'Understanding email analytics and metrics',
      category: 'Campaign Management',
      views: '16.2K',
      helpful: 92
    },
    {
      title: 'How to import contacts from CSV',
      category: 'Contact Management',
      views: '14.8K',
      helpful: 89
    },
    {
      title: 'Creating responsive email templates',
      category: 'Templates & Design',
      views: '12.4K',
      helpful: 94
    }
  ]

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      availability: 'Mon-Fri, 9AM-6PM PST',
      responseTime: 'Usually responds in minutes'
    },
    {
      icon: Book,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation',
      availability: 'Available 24/7',
      responseTime: 'Instant access to articles'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Get help from other EmailVerse users',
      availability: 'Available 24/7',
      responseTime: 'Community moderated'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Help Center
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Find answers to your questions and get the most out of EmailVerse
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
            />
          </div>
        </div>
      </div>

      {/* Support Options */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How Can We Help You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option) => (
              <div key={option.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-2xl inline-block mb-6">
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>{option.availability}</p>
                  <p>{option.responseTime}</p>
                </div>
                <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
                  Get Help
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-2xl inline-block mb-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <p className="text-sm text-gray-500">{category.articles} articles</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Articles */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Articles
          </h2>
          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-indigo-600">
                      {article.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-lg">
                        {article.category}
                      </span>
                      <span>{article.views} views</span>
                      <span className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                        {article.helpful}% helpful
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "How do I create my first email campaign?",
                answer: "Creating your first campaign is easy! Navigate to the Campaigns section, click 'Create New Campaign', choose your template, add your content, select your audience, and hit send."
              },
              {
                question: "Why are my emails going to spam?",
                answer: "Several factors affect deliverability including sender reputation, email content, and authentication. Make sure you've set up SPF and DKIM records, avoid spam trigger words, and maintain good list hygiene."
              },
              {
                question: "How can I import my existing contact list?",
                answer: "You can import contacts via CSV file upload in the Contacts section. Make sure your CSV includes email addresses and any additional fields you want to import like names and custom attributes."
              },
              {
                question: "What's the difference between automation and regular campaigns?",
                answer: "Regular campaigns are one-time sends to your audience, while automation campaigns are triggered by specific events or behaviors, like welcome emails for new subscribers or abandoned cart reminders."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Our support team is here to help you succeed with EmailVerse
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold hover:bg-indigo-50 transition-colors">
              Start Live Chat
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Email Support
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Response Time</p>
              <p className="text-indigo-100">Usually within 2 hours</p>
            </div>
            <div>
              <Users className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Expert Team</p>
              <p className="text-indigo-100">Email marketing specialists</p>
            </div>
            <div>
              <CheckCircle className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Satisfaction Rate</p>
              <p className="text-indigo-100">98% customer satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
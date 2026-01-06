import { Search, Star, Zap, Shield, ArrowRight } from 'lucide-react'

export default function IntegrationsPage() {
  const categories = [
    'All', 'CRM', 'E-commerce', 'Analytics', 'Social Media', 'Productivity', 'Marketing'
  ]

  const integrations = [
    {
      name: 'Salesforce',
      category: 'CRM',
      description: 'Sync contacts and track email engagement in your CRM',
      logo: '🏢',
      rating: 4.9,
      installs: '50K+',
      featured: true
    },
    {
      name: 'Shopify',
      category: 'E-commerce',
      description: 'Automated email campaigns for your online store',
      logo: '🛍️',
      rating: 4.8,
      installs: '75K+',
      featured: true
    },
    {
      name: 'Google Analytics',
      category: 'Analytics',
      description: 'Track email campaign performance in GA',
      logo: '📊',
      rating: 4.7,
      installs: '100K+',
      featured: true
    },
    {
      name: 'Slack',
      category: 'Productivity',
      description: 'Get campaign notifications in your Slack channels',
      logo: '💬',
      rating: 4.6,
      installs: '25K+',
      featured: false
    },
    {
      name: 'WordPress',
      category: 'Marketing',
      description: 'Add signup forms to your WordPress site',
      logo: '📝',
      rating: 4.8,
      installs: '60K+',
      featured: true
    },
    {
      name: 'Facebook Ads',
      category: 'Social Media',
      description: 'Create lookalike audiences from email subscribers',
      logo: '📘',
      rating: 4.5,
      installs: '40K+',
      featured: false
    },
    {
      name: 'Zapier',
      category: 'Productivity',
      description: 'Connect EmailVerse with 3000+ apps',
      logo: '⚡',
      rating: 4.9,
      installs: '80K+',
      featured: true
    },
    {
      name: 'HubSpot',
      category: 'CRM',
      description: 'Seamless integration with HubSpot CRM',
      logo: '🎯',
      rating: 4.7,
      installs: '35K+',
      featured: false
    }
  ]

  const featuredIntegrations = integrations.filter(integration => integration.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            500+ Integrations
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Connect EmailVerse with your favorite tools and automate your workflow
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search integrations..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-300"
            />
          </div>
        </div>
      </div>

      {/* Featured Integrations */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Integrations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredIntegrations.map((integration) => (
              <div key={integration.name} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{integration.logo}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{integration.name}</h3>
                    <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded-lg">
                      {integration.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{integration.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{integration.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{integration.installs} installs</span>
                  </div>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Connect
                  </button>
                </div>
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
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-2xl bg-white text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* All Integrations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration) => (
              <div key={integration.name} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-3xl mb-3">{integration.logo}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{integration.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{integration.description}</p>
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Star className="h-3 w-3 text-yellow-400" />
                    <span className="text-xs text-gray-600">{integration.rating}</span>
                  </div>
                  <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-purple-100 hover:text-purple-700 transition-colors text-sm">
                    Install
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration Benefits */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Use Integrations?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your workflow and get more done with powerful integrations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl inline-block mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Automate Workflows</h3>
              <p className="text-gray-600">
                Automatically sync data between your tools and eliminate manual work
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl inline-block mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security with OAuth 2.0 and encrypted data transfer
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl inline-block mb-4">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Setup</h3>
              <p className="text-gray-600">
                Connect your tools in minutes with our simple setup wizard
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Integration?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Our team can build custom integrations for your specific needs
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-50 transition-colors">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  )
}
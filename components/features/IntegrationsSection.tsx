import { ArrowRight, Zap } from 'lucide-react'

const IntegrationsSection = () => {
  const integrationCategories = [
    {
      name: 'E-commerce',
      description: 'Connect with your online store',
      integrations: [
        { name: 'Shopify', logo: '🛍️', popular: true },
        { name: 'WooCommerce', logo: '🛒', popular: true },
        { name: 'Magento', logo: '🏪', popular: false },
        { name: 'BigCommerce', logo: '🏬', popular: false },
        { name: 'Etsy', logo: '🎨', popular: false },
        { name: 'Amazon', logo: '📦', popular: true }
      ]
    },
    {
      name: 'CRM & Sales',
      description: 'Sync with your customer data',
      integrations: [
        { name: 'Salesforce', logo: '☁️', popular: true },
        { name: 'HubSpot', logo: '🧲', popular: true },
        { name: 'Pipedrive', logo: '🔄', popular: false },
        { name: 'Zoho CRM', logo: '📊', popular: false },
        { name: 'ActiveCampaign', logo: '📈', popular: false },
        { name: 'Intercom', logo: '💬', popular: true }
      ]
    },
    {
      name: 'Analytics & Data',
      description: 'Track and analyze performance',
      integrations: [
        { name: 'Google Analytics', logo: '📊', popular: true },
        { name: 'Facebook Pixel', logo: '📘', popular: true },
        { name: 'Mixpanel', logo: '📈', popular: false },
        { name: 'Segment', logo: '🔗', popular: false },
        { name: 'Hotjar', logo: '🔥', popular: false },
        { name: 'Amplitude', logo: '📡', popular: false }
      ]
    },
    {
      name: 'Content & Social',
      description: 'Manage content and social media',
      integrations: [
        { name: 'WordPress', logo: '📝', popular: true },
        { name: 'Canva', logo: '🎨', popular: true },
        { name: 'Unsplash', logo: '📸', popular: false },
        { name: 'Buffer', logo: '📱', popular: false },
        { name: 'Hootsuite', logo: '🦉', popular: false },
        { name: 'Zapier', logo: '⚡', popular: true }
      ]
    }
  ]

  const stats = [
    { number: '500+', label: 'Integrations Available' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '<5min', label: 'Setup Time' },
    { number: '24/7', label: 'API Support' }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            500+ Integrations
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            At EmailVerse We Don't Just Connect Tools. We Run Them.
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring the strategy, the experts, and the execution—so your tools finally deliver results.
          </p>
        </div>

        {/* Integration Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {integrationCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {category.description}
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {category.integrations.map((integration, integrationIndex) => (
                  <div
                    key={integrationIndex}
                    className={`relative p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md cursor-pointer ${
                      integration.popular 
                        ? 'border-primary-200 bg-primary-50 hover:border-primary-300' 
                        : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    {integration.popular && (
                      <div className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                    <div className="text-center">
                      <div className="text-2xl mb-2">{integration.logo}</div>
                      <div className="text-sm font-medium text-gray-900">
                        {integration.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1">
                <span>View All {category.name} Integrations</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationsSection
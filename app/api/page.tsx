import { Code, Key, Zap, Shield, Globe, BookOpen } from 'lucide-react'

export default function APIPage() {
  const endpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/campaigns',
      description: 'Create a new email campaign',
      params: ['name', 'subject', 'content', 'recipients']
    },
    {
      method: 'GET',
      endpoint: '/api/v1/campaigns',
      description: 'List all campaigns',
      params: ['limit', 'offset', 'status']
    },
    {
      method: 'POST',
      endpoint: '/api/v1/contacts',
      description: 'Add new contacts',
      params: ['email', 'name', 'tags', 'custom_fields']
    },
    {
      method: 'GET',
      endpoint: '/api/v1/analytics',
      description: 'Get campaign analytics',
      params: ['campaign_id', 'date_range', 'metrics']
    }
  ]

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-100ms response times with global CDN distribution'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime SLA'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Handle millions of requests with auto-scaling infrastructure'
    },
    {
      icon: BookOpen,
      title: 'Well Documented',
      description: 'Comprehensive docs with examples in multiple languages'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              EmailVerse API
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Powerful REST API to integrate email marketing into your applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold hover:bg-primary-50 transition-colors">
                Get API Key
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our API?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl inline-block mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* API Endpoints */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Endpoints
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                    endpoint.method === 'POST' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="ml-3 text-gray-800 font-mono">{endpoint.endpoint}</code>
                </div>
                <p className="text-gray-600 mb-4">{endpoint.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Parameters:</h4>
                  <div className="flex flex-wrap gap-2">
                    {endpoint.params.map((param) => (
                      <code key={param} className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-700">
                        {param}
                      </code>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Quick Start Example
          </h2>
          <div className="bg-gray-900 rounded-2xl p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`// Create a new campaign
const response = await fetch('https://api.emailverse.com/v1/campaigns', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Welcome Campaign',
    subject: 'Welcome to EmailVerse!',
    content: '<h1>Welcome!</h1><p>Thanks for joining us.</p>',
    recipients: ['user@example.com']
  })
});

const campaign = await response.json();
console.log('Campaign created:', campaign.id);`}
            </pre>
          </div>
        </div>
      </div>

      {/* Get Started */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Key className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8">
            Get your API key and start integrating in minutes
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-colors">
            Get Your Free API Key
          </button>
        </div>
      </div>
    </div>
  )
}
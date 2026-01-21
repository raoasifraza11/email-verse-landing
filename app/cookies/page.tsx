import { Cookie, Settings, BarChart3, Shield, Globe } from 'lucide-react'

export default function CookiesPage() {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality and security',
      examples: ['Authentication tokens', 'Security preferences', 'Load balancing'],
      required: true
    },
    {
      icon: BarChart3,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website',
      examples: ['Google Analytics', 'Page views', 'User behavior tracking'],
      required: false
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'Remember your preferences and settings',
      examples: ['Language preferences', 'Theme settings', 'Form data'],
      required: false
    },
    {
      icon: Globe,
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track campaigns',
      examples: ['Ad targeting', 'Conversion tracking', 'Social media pixels'],
      required: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Learn about how we use cookies to improve your experience on EmailVerse.
          </p>
          <div className="flex items-center justify-center space-x-4 text-primary-100">
            <Cookie className="h-5 w-5" />
            <span>Last updated: January 2025</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">What Are Cookies?</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
            <p className="text-secondary-700 leading-relaxed">
              This Cookie Policy explains what cookies are, how we use them, and how you can control 
              your cookie preferences when using EmailVerse.
            </p>
          </div>

          {/* Cookie Types */}
          <div className="space-y-8">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-gradient-primary p-3 rounded-xl mr-4">
                      <type.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-secondary-900">{type.title}</h2>
                      <p className="text-secondary-600">{type.description}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    type.required 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {type.required ? 'Required' : 'Optional'}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, idx) => (
                      <span key={idx} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-lg text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cookie Management */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mt-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Managing Your Cookie Preferences</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">Browser Settings</h3>
                <p className="text-secondary-700 mb-4">
                  You can control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-secondary-700">Block all cookies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-secondary-700">Delete existing cookies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-secondary-700">Set preferences for specific sites</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">Our Cookie Banner</h3>
                <p className="text-secondary-700 mb-4">
                  When you first visit our site, you'll see a cookie banner where you can:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-secondary-700">Accept all cookies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-secondary-700">Customize your preferences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-secondary-700">Reject non-essential cookies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mt-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Third-Party Cookies</h2>
            <p className="text-secondary-700 mb-4">
              We may use third-party services that set their own cookies. These include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-primary-200 rounded-xl p-4">
                <h4 className="font-semibold text-secondary-900 mb-2">Google Analytics</h4>
                <p className="text-sm text-secondary-600">
                  Helps us understand website usage and improve user experience.
                </p>
              </div>
              <div className="border border-primary-200 rounded-xl p-4">
                <h4 className="font-semibold text-secondary-900 mb-2">Intercom</h4>
                <p className="text-sm text-secondary-600">
                  Powers our live chat feature and customer support system.
                </p>
              </div>
              <div className="border border-primary-200 rounded-xl p-4">
                <h4 className="font-semibold text-secondary-900 mb-2">Stripe</h4>
                <p className="text-sm text-secondary-600">
                  Processes payments securely and prevents fraudulent transactions.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Questions About Cookies?</h2>
            <p className="text-secondary-700 mb-4">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="space-y-2 text-secondary-700">
              <p><strong>Email:</strong> privacy@emailverse.com</p>
              <p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
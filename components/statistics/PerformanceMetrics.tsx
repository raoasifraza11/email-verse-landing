import { Clock, Shield, Zap, Globe } from 'lucide-react'

const PerformanceMetrics = () => {
  const metrics = [
    {
      category: 'Delivery Performance',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      stats: [
        { label: 'Inbox Placement Rate', value: '99%', trend: '+2.1%' },
        { label: 'Spam Rate', value: '0.8%', trend: '-0.3%' },
        { label: 'Bounce Rate', value: '1.2%', trend: '-0.5%' },
        { label: 'Unsubscribe Rate', value: '0.3%', trend: '-0.1%' }
      ]
    },
    {
      category: 'Speed & Reliability',
      icon: Zap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      stats: [
        { label: 'Average Send Speed', value: '1M/day', trend: '+15%' },
        { label: 'API Response Time', value: '120ms', trend: '-8ms' },
        { label: 'Uptime', value: '99.98%', trend: '+0.02%' },
        { label: 'Processing Time', value: '2.3s', trend: '-0.4s' }
      ]
    },
    {
      category: 'Global Reach',
      icon: Globe,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      stats: [
        { label: 'Countries Served', value: '20+', trend: '+5' },
        { label: 'Languages Supported', value: '8+', trend: '+3' },
        { label: 'Time Zones', value: '24', trend: '0' },
        { label: 'Data Centers', value: '12', trend: '+2' }
      ]
    },
    {
      category: 'Automation Efficiency',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      stats: [
        { label: 'Workflows Active', value: '5K+', trend: '+18%' },
        { label: 'Triggers per Day', value: '800', trend: '+22%' },
        { label: 'Success Rate', value: '96%', trend: '+0.8%' },
        { label: 'Time Saved', value: '40hrs/week', trend: '+5hrs' }
      ]
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Platform Performance Metrics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed performance metrics showing how EmailVerse delivers exceptional 
            results across all key areas of email marketing.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {metrics.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className={`${category.bgColor} p-3 rounded-lg`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {category.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="bg-white rounded-lg p-6">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {stat.label}
                    </div>
                    <div className={`text-xs font-medium ${
                      stat.trend.startsWith('+') ? 'text-green-600' : 
                      stat.trend.startsWith('-') && stat.label.includes('Rate') && 
                      (stat.label.includes('Spam') || stat.label.includes('Bounce') || stat.label.includes('Unsubscribe')) 
                        ? 'text-green-600' : 
                      stat.trend.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {stat.trend} vs last month
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Experience These Performance Benefits
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join hundreds of businesses achieving exceptional email marketing results with EmailVerse.
          </p>
          <a 
            href="https://calendly.com/emailverse/consultation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block text-center"
          >
            Start Growing Your Leads Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default PerformanceMetrics
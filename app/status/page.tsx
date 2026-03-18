import { CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Mail, Database } from 'lucide-react'

export default function StatusPage() {
  const services = [
    {
      name: 'Email Delivery',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '45ms',
      icon: Mail
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '120ms',
      icon: Server
    },
    {
      name: 'Web Application',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '200ms',
      icon: Activity
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '15ms',
      icon: Database
    }
  ]

  const incidents = [
    {
      date: 'Dec 28, 2024',
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      duration: '2 hours',
      impact: 'No service disruption',
      description: 'Routine database maintenance completed successfully with no impact to service availability.'
    },
    {
      date: 'Dec 15, 2024',
      title: 'Increased API Response Times',
      status: 'resolved',
      duration: '45 minutes',
      impact: 'Minor performance impact',
      description: 'Temporary increase in API response times due to high traffic. Issue resolved by scaling infrastructure.'
    },
    {
      date: 'Nov 28, 2024',
      title: 'Email Delivery Delays',
      status: 'resolved',
      duration: '1.5 hours',
      impact: 'Delayed email delivery',
      description: 'Some emails experienced delivery delays due to upstream provider issues. All emails were successfully delivered.'
    }
  ]

  const metrics = [
    {
      title: 'Uptime (30 days)',
      value: '99.97%',
      change: '+0.02%',
      trend: 'up'
    },
    {
      title: 'Avg Response Time',
      value: '95ms',
      change: '-5ms',
      trend: 'down'
    },
    {
      title: 'Emails Delivered',
      value: '2.4M',
      change: '+12%',
      trend: 'up'
    },
    {
      title: 'API Requests',
      value: '15.2M',
      change: '+8%',
      trend: 'up'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'degraded':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case 'outage':
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <Clock className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-100'
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100'
      case 'outage':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            System Status
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Real-time status and performance metrics for EmailVerse services
          </p>
          <div className="flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-300 mr-3" />
            <span className="text-2xl font-semibold">All Systems Operational</span>
          </div>
        </div>
      </div>

      {/* Current Status */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Service Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.name} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-3 rounded-xl mr-4">
                      <service.icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                      <div className="flex items-center">
                        {getStatusIcon(service.status)}
                        <span className={`ml-2 px-2 py-1 rounded-lg text-sm font-medium ${getStatusColor(service.status)}`}>
                          {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Uptime (30 days)</p>
                    <p className="text-lg font-semibold text-gray-900">{service.uptime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Avg Response Time</p>
                    <p className="text-lg font-semibold text-gray-900">{service.responseTime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Performance Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <div key={metric.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <h3 className="text-sm font-medium text-gray-500 mb-2">{metric.title}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</p>
                <div className={`flex items-center justify-center text-sm ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <svg
                    className={`h-4 w-4 mr-1 ${metric.trend === 'up' ? 'rotate-0' : 'rotate-180'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  {metric.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Incident History */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Recent Incidents
          </h2>
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-green-500">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{incident.title}</h3>
                    <p className="text-sm text-gray-500">{incident.date}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm font-medium">
                    Resolved
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium text-gray-900">{incident.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Impact</p>
                    <p className="font-medium text-gray-900">{incident.impact}</p>
                  </div>
                </div>
                
                <p className="text-gray-600">{incident.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscribe to Updates */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to get notified about service updates and maintenance windows
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-blue-100 mb-4">Follow us for real-time updates:</p>
            <div className="flex justify-center space-x-4">
              <a href="https://x.com/EmailVerse1" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">X</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Status RSS</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Slack Integration</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
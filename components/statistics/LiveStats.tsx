'use client'

import { useEffect, useState } from 'react'
import { Activity, Mail, Users, TrendingUp } from 'lucide-react'

const LiveStats = () => {
  const [stats, setStats] = useState({
    emailsSent: 2547832156,
    activeUsers: 52847,
    campaignsActive: 1247,
    deliveryRate: 98.5
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        emailsSent: prev.emailsSent + Math.floor(Math.random() * 50) + 10,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5),
        campaignsActive: prev.campaignsActive + Math.floor(Math.random() * 3) - 1,
        deliveryRate: 98.5 + (Math.random() - 0.5) * 0.2
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const liveMetrics = [
    {
      icon: Mail,
      label: 'Emails Sent Today',
      value: stats.emailsSent.toLocaleString(),
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      trend: '+2.3%'
    },
    {
      icon: Users,
      label: 'Projects Delivered',
      value: stats.activeUsers.toLocaleString(),
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      trend: '+1.8%'
    },
    {
      icon: Activity,
      label: 'Active Campaigns',
      value: stats.campaignsActive.toLocaleString(),
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      trend: '+5.2%'
    },
    {
      icon: TrendingUp,
      label: 'Delivery Rate',
      value: `${stats.deliveryRate.toFixed(1)}%`,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      trend: '+0.3%'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <h2 className="text-2xl font-bold text-gray-900">Live Platform Statistics</h2>
          </div>
          <p className="text-gray-600">
            Real-time data from our platform, updated every few seconds
          </p>
        </div>

        {/* Live Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {liveMetrics.map((metric, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`${metric.bgColor} p-3 rounded-lg`}>
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">LIVE</span>
                </div>
              </div>
              
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {metric.value}
              </div>
              
              <div className="text-sm text-gray-600 mb-2">
                {metric.label}
              </div>
              
              <div className="text-xs text-green-600 font-medium">
                {metric.trend} from yesterday
              </div>
            </div>
          ))}
        </div>

        {/* Activity Feed */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
            <Activity className="h-5 w-5 text-primary-600" />
            <span>Recent Activity</span>
          </h3>
          
          <div className="space-y-4">
            {[
              { time: '2 seconds ago', action: 'Campaign "Holiday Sale" sent to 15,247 subscribers', type: 'campaign' },
              { time: '8 seconds ago', action: 'New user registered from United States', type: 'user' },
              { time: '15 seconds ago', action: 'A/B test completed with 23.4% open rate improvement', type: 'test' },
              { time: '32 seconds ago', action: 'Automation workflow triggered for 847 contacts', type: 'automation' },
              { time: '45 seconds ago', action: 'Template "Modern Newsletter" downloaded 156 times', type: 'template' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'campaign' ? 'bg-blue-500' :
                  activity.type === 'user' ? 'bg-green-500' :
                  activity.type === 'test' ? 'bg-purple-500' :
                  activity.type === 'automation' ? 'bg-orange-500' :
                  'bg-gray-500'
                }`}></div>
                <div className="flex-1">
                  <div className="text-sm text-gray-900">{activity.action}</div>
                  <div className="text-xs text-gray-500">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveStats
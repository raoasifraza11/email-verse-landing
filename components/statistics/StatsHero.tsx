import { BarChart3, TrendingUp, Users, Globe, DollarSign, Zap } from 'lucide-react'

const StatsHero = () => {
  const keyStats = [
    {
      icon: Users,
      value: '2K+',
      label: 'Projects Delivered',
      change: '+12%',
      period: 'this month'
    },
    {
      icon: BarChart3,
      value: '1B+',
      label: 'Emails Sent Successfully',
      change: '+18%',
      period: 'this quarter'
    },
    {
      icon: TrendingUp,
      value: '99%',
      label: 'Delivery Rate',
      change: '+2.1%',
      period: 'vs industry avg'
    },
    {
      icon: Globe,
      value: 'Worldwide',
      label: 'Deliverability',
      change: 'Global',
      period: 'reach & compliance'
    }
  ]

  const additionalStats = [
    {
      value: '$125M+',
      label: 'Revenue Generated',
      description: 'For our customers'
    },
    {
      value: '5x',
      label: 'Better ROI',
      description: 'Compared to traditional methods'
    }
  ]

  return (
    <section className="gradient-bg section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <BarChart3 className="h-4 w-4 mr-2" />
            Real-Time Analytics
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Email Marketing
            <span className="text-primary-600 block">Statistics & Insights</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore comprehensive email marketing statistics, industry benchmarks, 
            and performance insights to optimize your campaigns and stay ahead of the competition.
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {keyStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-primary-100 p-4 rounded-full inline-block mb-6">
                <stat.icon className="h-8 w-8 text-primary-600" />
              </div>
              
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              
              <div className="text-lg font-semibold text-gray-700 mb-3">
                {stat.label}
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-600 font-medium">{stat.change}</span>
                <span className="text-sm text-gray-500">{stat.period}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="bg-orange-100 p-4 rounded-full inline-block mb-6">
              <DollarSign className="h-8 w-8 text-orange-600" />
            </div>
            
            <div className="text-3xl font-bold text-gray-900 mb-2">
              $125M+
            </div>
            
            <div className="text-lg font-semibold text-gray-700 mb-3">
              Revenue Generated
            </div>
            
            <div className="text-sm text-gray-600">
              For our customers
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="bg-red-100 p-4 rounded-full inline-block mb-6">
              <Zap className="h-8 w-8 text-red-600" />
            </div>
            
            <div className="text-3xl font-bold text-gray-900 mb-2">
              5x
            </div>
            
            <div className="text-lg font-semibold text-gray-700 mb-3">
              Better ROI
            </div>
            
            <div className="text-sm text-gray-600">
              Compared to traditional methods
            </div>
          </div>
        </div>

        {/* Quick Insights */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Platform Performance Highlights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">45.2%</div>
              <div className="text-gray-700 font-medium">Average Open Rate</div>
              <div className="text-sm text-gray-500 mt-1">15% above industry average</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">12.8%</div>
              <div className="text-gray-700 font-medium">Average Click Rate</div>
              <div className="text-sm text-gray-500 mt-1">22% above industry average</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">8.4%</div>
              <div className="text-gray-700 font-medium">Average Conversion Rate</div>
              <div className="text-sm text-gray-500 mt-1">35% above industry average</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsHero
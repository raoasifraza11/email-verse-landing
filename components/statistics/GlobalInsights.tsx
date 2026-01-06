import { MapPin, Users, TrendingUp, Clock } from 'lucide-react'

const GlobalInsights = () => {
  const regions = [
    { name: 'North America', users: '22,847', growth: '+12%', color: 'bg-blue-500' },
    { name: 'Europe', users: '18,234', growth: '+18%', color: 'bg-green-500' },
    { name: 'Asia Pacific', users: '8,956', growth: '+25%', color: 'bg-purple-500' },
    { name: 'Latin America', users: '3,421', growth: '+22%', color: 'bg-orange-500' },
    { name: 'Middle East & Africa', users: '1,589', growth: '+35%', color: 'bg-red-500' }
  ]

  const timeZoneStats = [
    { time: '00:00 UTC', active: 2847, campaigns: 156 },
    { time: '06:00 UTC', active: 8234, campaigns: 423 },
    { time: '12:00 UTC', active: 15678, campaigns: 892 },
    { time: '18:00 UTC', active: 12456, campaigns: 678 }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Global Platform Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how EmailVerse is being used around the world and discover 
            global email marketing trends and patterns.
          </p>
        </div>

        {/* Regional Distribution */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center space-x-2 mb-8">
            <MapPin className="h-6 w-6 text-primary-600" />
            <h3 className="text-2xl font-bold text-gray-900">Regional User Distribution</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="text-center">
                <div className={`${region.color} h-32 rounded-lg mb-4 flex items-end justify-center pb-4`}>
                  <div className="text-white">
                    <Users className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-lg font-bold">{region.users}</div>
                  </div>
                </div>
                <div className="font-semibold text-gray-900 mb-1">{region.name}</div>
                <div className="text-sm text-green-600 font-medium">{region.growth} growth</div>
              </div>
            ))}
          </div>
        </div>

        {/* Time Zone Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-2 mb-6">
              <Clock className="h-6 w-6 text-primary-600" />
              <h3 className="text-xl font-bold text-gray-900">24-Hour Activity</h3>
            </div>
            
            <div className="space-y-4">
              {timeZoneStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">{stat.time}</div>
                    <div className="text-sm text-gray-600">Active Users: {stat.active.toLocaleString()}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary-600">{stat.campaigns}</div>
                    <div className="text-sm text-gray-600">Campaigns</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="h-6 w-6 text-primary-600" />
              <h3 className="text-xl font-bold text-gray-900">Global Trends</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Mobile Opens</span>
                  <span className="font-semibold">67.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-[68%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Desktop Opens</span>
                  <span className="font-semibold">32.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-[32%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">AI Automation Usage</span>
                  <span className="font-semibold">84.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-[84%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">A/B Testing Adoption</span>
                  <span className="font-semibold">76.9%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full w-[77%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Key Global Insights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">67.8%</div>
              <div className="text-sm text-blue-700">of emails opened on mobile devices</div>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">84.3%</div>
              <div className="text-sm text-green-700">of users leverage AI automation</div>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
              <div className="text-sm text-purple-700">average growth in APAC region</div>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">180+</div>
              <div className="text-sm text-orange-700">countries using EmailVerse</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalInsights
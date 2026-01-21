import { MapPin, Users, TrendingUp } from 'lucide-react'

const GlobalInsights = () => {
  const regions = [
    { name: 'North America', users: '22,847', growth: '+12%', color: 'bg-blue-500' },
    { name: 'Europe', users: '18,234', growth: '+18%', color: 'bg-green-500' },
    { name: 'Asia Pacific', users: '8,956', growth: '+25%', color: 'bg-purple-500' },
    { name: 'Latin America', users: '3,421', growth: '+22%', color: 'bg-orange-500' },
    { name: 'Middle East & Africa', users: '1,589', growth: '+35%', color: 'bg-red-500' }
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
              <div className="text-3xl font-bold text-green-600 mb-2">76.9%</div>
              <div className="text-sm text-green-700">use A/B testing features</div>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
              <div className="text-sm text-purple-700">average growth in APAC region</div>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">20+</div>
              <div className="text-sm text-orange-700">countries using EmailVerse</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalInsights
import { TrendingUp } from 'lucide-react'

const GlobalInsights = () => {
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
import { BarChart3, TrendingUp, Target } from 'lucide-react'

const IndustryBenchmarks = () => {
  const industries = [
    { name: 'E-commerce', openRate: 18.2, clickRate: 2.6, conversionRate: 1.8, color: 'bg-blue-500' },
    { name: 'SaaS', openRate: 22.1, clickRate: 3.2, conversionRate: 2.4, color: 'bg-green-500' },
    { name: 'Healthcare', openRate: 24.8, clickRate: 3.8, conversionRate: 2.1, color: 'bg-purple-500' },
    { name: 'Education', openRate: 26.4, clickRate: 4.1, conversionRate: 1.9, color: 'bg-orange-500' },
    { name: 'Finance', openRate: 19.7, clickRate: 2.9, conversionRate: 2.2, color: 'bg-red-500' },
    { name: 'Retail', openRate: 17.8, clickRate: 2.4, conversionRate: 1.6, color: 'bg-indigo-500' }
  ]

  const emailVerseAvg = {
    openRate: 45.2,
    clickRate: 12.8,
    conversionRate: 8.4
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industry Benchmarks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare your performance against industry standards and see how EmailVerse 
            users consistently outperform the competition.
          </p>
        </div>

        {/* Benchmark Comparison */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Open Rate */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <BarChart3 className="h-5 w-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">Open Rate Comparison</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                  <span className="font-medium text-primary-900">EmailVerse Average</span>
                  <span className="text-xl font-bold text-primary-600">{emailVerseAvg.openRate}%</span>
                </div>
                
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${industry.color}`}></div>
                      <span className="text-gray-700">{industry.name}</span>
                    </div>
                    <span className="font-medium text-gray-900">{industry.openRate}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Click Rate */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Target className="h-5 w-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">Click Rate Comparison</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                  <span className="font-medium text-primary-900">EmailVerse Average</span>
                  <span className="text-xl font-bold text-primary-600">{emailVerseAvg.clickRate}%</span>
                </div>
                
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${industry.color}`}></div>
                      <span className="text-gray-700">{industry.name}</span>
                    </div>
                    <span className="font-medium text-gray-900">{industry.clickRate}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conversion Rate */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="h-5 w-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">Conversion Rate Comparison</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                  <span className="font-medium text-primary-900">EmailVerse Average</span>
                  <span className="text-xl font-bold text-primary-600">{emailVerseAvg.conversionRate}%</span>
                </div>
                
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${industry.color}`}></div>
                      <span className="text-gray-700">{industry.name}</span>
                    </div>
                    <span className="font-medium text-gray-900">{industry.conversionRate}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white text-center">
            <div className="text-4xl font-bold mb-2">2.5x</div>
            <div className="text-lg font-medium mb-2">Better Open Rates</div>
            <div className="text-blue-100">vs industry average</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-8 text-white text-center">
            <div className="text-4xl font-bold mb-2">4x</div>
            <div className="text-lg font-medium mb-2">Higher Click Rates</div>
            <div className="text-green-100">vs industry average</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-8 text-white text-center">
            <div className="text-4xl font-bold mb-2">3.5x</div>
            <div className="text-lg font-medium mb-2">More Conversions</div>
            <div className="text-purple-100">vs industry average</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustryBenchmarks
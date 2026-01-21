import React from 'react'
import { CheckCircle, X } from 'lucide-react'

const ComparisonTable = () => {
  const competitors = [
    { name: 'EmailVerse', isUs: true },
    { name: 'Competitor A', isUs: false },
    { name: 'Competitor B', isUs: false },
    { name: 'Competitor C', isUs: false }
  ]

  const features = [
    {
      category: 'Core Features',
      items: [
        { name: 'Drag & Drop Builder', emailverse: true, compA: true, compB: true, compC: false },
        { name: 'AI-Powered Automation', emailverse: true, compA: false, compB: true, compC: false },
        { name: 'Advanced Segmentation', emailverse: true, compA: true, compB: false, compC: true },
        { name: 'A/B Testing', emailverse: true, compA: true, compB: true, compC: false },
        { name: 'Real-time Analytics', emailverse: true, compA: false, compB: true, compC: false }
      ]
    },
    {
      category: 'Advanced Features',
      items: [
        { name: 'Send Time Optimization', emailverse: true, compA: false, compB: false, compC: false },
        { name: 'Predictive Analytics', emailverse: true, compA: false, compB: false, compC: false },
        { name: 'Custom HTML Editor', emailverse: true, compA: true, compB: false, compC: true },
        { name: 'API Access', emailverse: true, compA: true, compB: true, compC: false },
        { name: 'White-label Options', emailverse: true, compA: false, compB: false, compC: false }
      ]
    },
    {
      category: 'Support & Compliance',
      items: [
        { name: '24/7 Support', emailverse: true, compA: false, compB: true, compC: false },
        { name: 'GDPR Compliance', emailverse: true, compA: true, compB: true, compC: true },
        { name: 'Dedicated Success Manager', emailverse: true, compA: false, compB: false, compC: false },
        { name: 'Phone Support', emailverse: true, compA: false, compB: true, compC: false },
        { name: 'Custom Onboarding', emailverse: true, compA: false, compB: false, compC: false }
      ]
    }
  ]

  const getFeatureValue = (feature: any, competitor: string) => {
    switch (competitor) {
      case 'EmailVerse': return feature.emailverse
      case 'Competitor A': return feature.compA
      case 'Competitor B': return feature.compB
      case 'Competitor C': return feature.compC
      default: return false
    }
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Compare
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how EmailVerse stacks up against the competition. 
            We believe in transparency and letting our features speak for themselves.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Header */}
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Features
                  </th>
                  {competitors.map((competitor, index) => (
                    <th key={index} className={`px-6 py-4 text-center text-sm font-semibold ${
                      competitor.isUs ? 'text-primary-600 bg-primary-50' : 'text-gray-900'
                    }`}>
                      {competitor.name}
                      {competitor.isUs && (
                        <div className="text-xs font-normal text-primary-600 mt-1">
                          That's us! 🎉
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {features.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    {/* Category Header */}
                    <tr className="bg-gray-100">
                      <td colSpan={5} className="px-6 py-3 text-sm font-semibold text-gray-900">
                        {category.category}
                      </td>
                    </tr>
                    
                    {/* Category Features */}
                    {category.items.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {feature.name}
                        </td>
                        {competitors.map((competitor, compIndex) => (
                          <td key={compIndex} className={`px-6 py-4 text-center ${
                            competitor.isUs ? 'bg-primary-50/50' : ''
                          }`}>
                            {getFeatureValue(feature, competitor.name) ? (
                              <CheckCircle className={`h-5 w-5 mx-auto ${
                                competitor.isUs ? 'text-primary-600' : 'text-green-500'
                              }`} />
                            ) : (
                              <X className="h-5 w-5 text-gray-400 mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the EmailVerse Advantage?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join hundreds of businesses that chose the most complete email marketing platform.
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
      </div>
    </section>
  )
}

export default ComparisonTable
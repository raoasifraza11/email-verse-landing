import { Zap, CheckCircle, ArrowRight } from 'lucide-react'

const FeaturesHero = () => {
  const highlights = [
    'AI-Powered Automation',
    'Advanced Analytics',
    'Drag & Drop Builder',
    'A/B Testing',
    'Global Compliance',
    '99.9% Uptime'
  ]

  return (
    <section className="gradient-bg section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Complete Feature Overview
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="text-primary-600 block">Succeed in Email Marketing</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From AI-powered automation to advanced analytics, EmailVerse provides 
            all the tools you need to create, send, and optimize email campaigns that drive results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="https://calendly.com/emailverse/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              Start Growing Your Leads Now
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
            <button className="btn-secondary">
              Watch Demo
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/80 rounded-lg p-3">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesHero
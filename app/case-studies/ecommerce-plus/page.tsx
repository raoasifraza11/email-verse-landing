import Link from 'next/link'
import { ArrowLeft, Calendar, TrendingUp, Users, Mail, Target, CheckCircle, ShoppingCart } from 'lucide-react'

export const metadata = {
  title: 'ECommerce Plus Case Study - EmailVerse',
  description: 'How ECommerce Plus generated 4,231 leads in 6 months with 720% ROI using automated customer lifecycle marketing.',
}

export default function ECommercePlusCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/case-studies" className="inline-flex items-center text-primary-600 hover:text-primary-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-indigo-400 bg-opacity-30 rounded-full text-sm font-medium mb-6">
                <ShoppingCart className="h-4 w-4 mr-2" />
                E-commerce Success Story
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ECommerce Plus
              </h1>
              
              <p className="text-xl mb-8 opacity-90">
                How an e-commerce platform transformed customer retention and upselling, 
                generating 887 qualified leads in 6 months with automated lifecycle marketing.
              </p>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>6 Month Campaign</span>
                </div>
                <div className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  <span>E-commerce</span>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Campaign Results</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">887</div>
                  <div className="text-sm opacity-90">Qualified Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">720%</div>
                  <div className="text-sm opacity-90">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">48.6%</div>
                  <div className="text-sm opacity-90">Open Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">22.4%</div>
                  <div className="text-sm opacity-90">Click Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">887</div>
              <div className="text-sm text-indigo-700">Qualified Leads Generated</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">720%</div>
              <div className="text-sm text-green-700">Return on Investment</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">48.6%</div>
              <div className="text-sm text-blue-700">Average Open Rate</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">22.4%</div>
              <div className="text-sm text-purple-700">Click-Through Rate</div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">385% increase in qualified leads</h4>
                    <p className="text-gray-600">From 183 to 887 leads in 6 months</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">45% increase in customer retention</h4>
                    <p className="text-gray-600">Automated lifecycle campaigns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">$8.2M additional revenue</h4>
                    <p className="text-gray-600">Direct attribution from campaigns</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">65% improvement in upselling</h4>
                    <p className="text-gray-600">Automated product recommendations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">35% reduction in churn</h4>
                    <p className="text-gray-600">Proactive retention campaigns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Automated customer journey</h4>
                    <p className="text-gray-600">Complete lifecycle automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your E-commerce Growth
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let EmailVerse help you automate customer lifecycle marketing like ECommerce Plus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/emailverse/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Start Growing Your Leads Now
            </a>
            <Link href="/case-studies" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
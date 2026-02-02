import Link from 'next/link'
import { ArrowLeft, Calendar, TrendingUp, Users, Mail, Target, CheckCircle, Home } from 'lucide-react'

export const metadata = {
  title: 'Generational Case Study - EmailVerse',
  description: 'How Generational generated 750 leads in 3 months with 420% ROI using EmailVerse automated real estate email marketing.',
}

export default function RealtyMastersCaseStudy() {
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
      <section className="section-padding bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-400 bg-opacity-30 rounded-full text-sm font-medium mb-6">
                <Home className="h-4 w-4 mr-2" />
                Real Estate Success Story
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Generational
              </h1>
              
              <p className="text-xl mb-8 opacity-90">
                How a real estate agency automated their lead nurturing process and generated 
                750 qualified leads in just 3 months with consistent follow-up campaigns.
              </p>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>3 Month Campaign</span>
                </div>
                <div className="flex items-center">
                  <Home className="h-5 w-5 mr-2" />
                  <span>Real Estate</span>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Campaign Results</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">750</div>
                  <div className="text-sm opacity-90">Qualified Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">420%</div>
                  <div className="text-sm opacity-90">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">52.8%</div>
                  <div className="text-sm opacity-90">Open Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">18.4%</div>
                  <div className="text-sm opacity-90">Click Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Challenge</h2>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-lg font-medium text-red-800 mb-2">
                  Inconsistent Lead Generation & Poor Follow-up
                </h3>
                <p className="text-red-700">
                  Generational struggled with inconsistent lead generation and lacked a systematic 
                  approach to nurturing prospects through their lengthy real estate buying journey.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Problems</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Seasonal fluctuations in lead generation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Manual follow-up process prone to errors</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Long sales cycles without proper nurturing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Difficulty tracking lead sources and ROI</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">40% of leads going cold without follow-up</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Agents spending 50% time on admin tasks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Inconsistent revenue month-to-month</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Low client retention and referrals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The EmailVerse Solution</h2>
          
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-lg font-medium text-green-800 mb-2">
                  Automated Real Estate Lead Nurturing System
                </h3>
                <p className="text-green-700">
                  EmailVerse created a comprehensive automated lead nurturing system specifically 
                  designed for real estate, with buyer/seller journeys and market-specific content.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Buyer/Seller Journeys</h3>
              <p className="text-gray-600">Separate automated sequences for buyers and sellers with relevant market insights</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Geographic Targeting</h3>
              <p className="text-gray-600">Location-based content and market reports for specific neighborhoods</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-purple-100 p-3 rounded-lg inline-block mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Updates</h3>
              <p className="text-gray-600">Automated monthly market reports and property value updates</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Campaign Types Implemented</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">1</div>
              <div>
                <h4 className="font-semibold text-gray-900">First-Time Buyer Education Series</h4>
                <p className="text-gray-600">8-email sequence educating first-time buyers on the home buying process</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">2</div>
              <div>
                <h4 className="font-semibold text-gray-900">Seller Market Analysis Campaign</h4>
                <p className="text-gray-600">Monthly market reports and home valuation updates for potential sellers</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">3</div>
              <div>
                <h4 className="font-semibold text-gray-900">Past Client Nurturing</h4>
                <p className="text-gray-600">Quarterly check-ins and referral requests to maintain relationships</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Implementation Timeline</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">1</div>
              <div>
                <h4 className="font-semibold text-gray-900">Week 1: Setup & Integration</h4>
                <p className="text-gray-600">Platform setup, CRM integration, Warming (14 days minimum)</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">2</div>
              <div>
                <h4 className="font-semibold text-gray-900">Week 2: Campaign Creation & List building</h4>
                <p className="text-gray-600">Email Sequence development, Personalization setup, Initial Prospect list building & testing.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">3</div>
              <div>
                <h4 className="font-semibold text-gray-900">Week 3: Launch & Optimization</h4>
                <p className="text-gray-600">Campaign Launch, Performance Monitoring, Gradual speed increment & continuous Optimization:</p>
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
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">750</div>
              <div className="text-sm text-green-700">Qualified Leads Generated</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">420%</div>
              <div className="text-sm text-blue-700">Return on Investment</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">52.8%</div>
              <div className="text-sm text-purple-700">Average Open Rate</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">18.4%</div>
              <div className="text-sm text-orange-700">Click-Through Rate</div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">285% increase in qualified leads</h4>
                    <p className="text-gray-600">From 195 to 750 leads in 3 months</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">60% reduction in admin time</h4>
                    <p className="text-gray-600">Agents focus on showings and closings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">95% lead follow-up rate</h4>
                    <p className="text-gray-600">No more leads falling through cracks</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">40% shorter sales cycle</h4>
                    <p className="text-gray-600">Better educated leads convert faster</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">$1.8M additional revenue</h4>
                    <p className="text-gray-600">Direct attribution from email campaigns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">35% increase in referrals</h4>
                    <p className="text-gray-600">Better client relationships = more referrals</p>
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
            Transform Your Real Estate Business
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let EmailVerse help you automate your lead nurturing like we did for Generational.
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
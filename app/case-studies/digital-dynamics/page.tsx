import Link from 'next/link'
import { ArrowLeft, Calendar, TrendingUp, Users, Mail, Target, CheckCircle, Zap } from 'lucide-react'

export const metadata = {
  title: 'Digital Dynamics Case Study - EmailVerse',
  description: 'How Digital Dynamics generated 3,156 leads in 8 months with 650% ROI using EmailVerse to scale their marketing agency client acquisition.',
}

export default function DigitalDynamicsCaseStudy() {
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
      <section className="section-padding bg-gradient-to-r from-purple-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-400 bg-opacity-30 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Marketing Agency Success Story
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Digital Dynamics
              </h1>
              
              <p className="text-xl mb-8 opacity-90">
                How a marketing agency scaled their own client acquisition while serving existing clients, 
                generating 3,156 qualified leads in 8 months with systematic outreach.
              </p>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>8 Month Campaign</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  <span>Marketing Agency</span>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Campaign Results</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3,156</div>
                  <div className="text-sm opacity-90">Qualified Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">650%</div>
                  <div className="text-sm opacity-90">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">44.9%</div>
                  <div className="text-sm opacity-90">Open Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15.2%</div>
                  <div className="text-sm opacity-90">Reply Rate</div>
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
                  Scaling Client Acquisition While Serving Existing Clients
                </h3>
                <p className="text-red-700">
                  Digital Dynamics was caught in the classic agency trap: too busy serving clients to 
                  focus on their own growth, leading to feast-or-famine revenue cycles.
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
                  <span className="text-gray-700">Team too busy with client work for business development</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Inconsistent new client acquisition</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Relying on referrals and word-of-mouth only</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">No systematic approach to prospect outreach</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Feast-or-famine revenue cycles</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Difficulty planning and scaling team</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Limited growth despite high demand</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Founder spending 70% time on sales</span>
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
                  Automated Agency Growth System
                </h3>
                <p className="text-green-700">
                  EmailVerse implemented a comprehensive automated outreach system that runs in the 
                  background, consistently generating qualified leads while the team focuses on client delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-purple-100 p-3 rounded-lg inline-block mb-4">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Channel Sequences</h3>
              <p className="text-gray-600">Email + LinkedIn outreach sequences targeting different business sizes</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Segmentation</h3>
              <p className="text-gray-600">Tailored messaging for different industries and company sizes</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Case Study Automation</h3>
              <p className="text-gray-600">Automated sharing of relevant case studies based on prospect industry</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Campaign Strategy</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">1</div>
              <div>
                <h4 className="font-semibold text-gray-900">SMB Outreach Campaign</h4>
                <p className="text-gray-600">Targeting small-medium businesses with growth-focused messaging</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">2</div>
              <div>
                <h4 className="font-semibold text-gray-900">Enterprise Nurture Sequence</h4>
                <p className="text-gray-600">Long-term nurturing for enterprise prospects with complex decision cycles</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">3</div>
              <div>
                <h4 className="font-semibold text-gray-900">Referral Partner Program</h4>
                <p className="text-gray-600">Automated outreach to potential referral partners and complementary services</p>
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
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3,156</div>
              <div className="text-sm text-purple-700">Qualified Leads Generated</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">650%</div>
              <div className="text-sm text-green-700">Return on Investment</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">44.9%</div>
              <div className="text-sm text-blue-700">Average Open Rate</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15.2%</div>
              <div className="text-sm text-orange-700">Reply Rate</div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">420% increase in qualified leads</h4>
                    <p className="text-gray-600">From 750 to 3,156 leads in 8 months</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">80% reduction in founder sales time</h4>
                    <p className="text-gray-600">From 70% to 14% of founder's time on sales</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Consistent monthly revenue</h4>
                    <p className="text-gray-600">Eliminated feast-or-famine cycles</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">300% team growth</h4>
                    <p className="text-gray-600">Scaled from 8 to 24 team members</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">$4.2M additional revenue</h4>
                    <p className="text-gray-600">Direct attribution from email campaigns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Predictable growth pipeline</h4>
                    <p className="text-gray-600">6-month forward visibility on new business</p>
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
            Scale Your Agency Like Digital Dynamics
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let EmailVerse help you automate your client acquisition while you focus on delivery.
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
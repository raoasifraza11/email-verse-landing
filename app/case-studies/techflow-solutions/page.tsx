import Link from 'next/link'
import { ArrowLeft, Calendar, TrendingUp, Users, Mail, Target, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'TechFlow Solutions Case Study - EmailVerse',
  description: 'How TechFlow Solutions generated 2,847 leads in 6 months with 580% ROI using EmailVerse email marketing automation.',
}

export default function TechFlowCaseStudy() {
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
      <section className="section-padding bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-400 bg-opacity-30 rounded-full text-sm font-medium mb-6">
                <Target className="h-4 w-4 mr-2" />
                SaaS Success Story
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                TechFlow Solutions
              </h1>
              
              <p className="text-xl mb-8 opacity-90">
                How a B2B SaaS company transformed their lead generation with automated email outreach, 
                generating 2,847 qualified leads in just 6 months.
              </p>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>6 Month Campaign</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>B2B SaaS</span>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Campaign Results</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">2,847</div>
                  <div className="text-sm opacity-90">Qualified Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">580%</div>
                  <div className="text-sm opacity-90">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">47.2%</div>
                  <div className="text-sm opacity-90">Open Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">12.8%</div>
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
                  Low Conversion from Manual Outreach
                </h3>
                <p className="text-red-700">
                  TechFlow Solutions was struggling with manual email outreach that yielded poor results. 
                  Their sales team was spending 60% of their time on prospecting with minimal success.
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
                  <span className="text-gray-700">Manual prospecting taking 60% of sales time</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Low email open rates (18%)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Inconsistent messaging across team</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">No systematic follow-up process</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Missing monthly lead targets by 40%</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Sales team burnout from manual tasks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Slow revenue growth (15% YoY)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">High customer acquisition costs</span>
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
                  Complete Email Outreach Automation
                </h3>
                <p className="text-green-700">
                  EmailVerse implemented a comprehensive automated email outreach system with 
                  personalized sequences, advanced targeting, and systematic follow-ups.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Sequences</h3>
              <p className="text-gray-600">7-step email sequences with personalized messaging and smart timing</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Targeting</h3>
              <p className="text-gray-600">Precise prospect identification and segmentation based on company size and role</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-purple-100 p-3 rounded-lg inline-block mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Optimization</h3>
              <p className="text-gray-600">Continuous A/B testing and optimization for maximum conversion rates</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Timeline</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">1</div>
              <div>
                <h4 className="font-semibold text-gray-900">Week 1-2: Setup & Integration</h4>
                <p className="text-gray-600">Platform setup, CRM integration, and initial prospect list building</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">2</div>
              <div>
                <h4 className="font-semibold text-gray-900">Week 3-4: Campaign Creation</h4>
                <p className="text-gray-600">Email sequence development, personalization setup, and testing</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">3</div>
              <div>
                <h4 className="font-semibold text-gray-900">Week 5-8: Launch & Optimization</h4>
                <p className="text-gray-600">Campaign launch, performance monitoring, and continuous optimization</p>
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
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2,847</div>
              <div className="text-sm text-blue-700">Qualified Leads Generated</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">580%</div>
              <div className="text-sm text-green-700">Return on Investment</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">47.2%</div>
              <div className="text-sm text-purple-700">Average Open Rate</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">12.8%</div>
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
                    <h4 className="font-semibold text-gray-900">163% increase in lead generation</h4>
                    <p className="text-gray-600">From 1,080 to 2,847 leads in 6 months</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">75% reduction in manual work</h4>
                    <p className="text-gray-600">Sales team now focuses on closing deals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">162% improvement in open rates</h4>
                    <p className="text-gray-600">From 18% to 47.2% average open rate</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">45% faster sales cycle</h4>
                    <p className="text-gray-600">Better qualified leads = quicker conversions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">$2.4M additional revenue</h4>
                    <p className="text-gray-600">Direct attribution from email campaigns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Scalable growth system</h4>
                    <p className="text-gray-600">Automated processes for continued success</p>
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
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let EmailVerse help you transform your lead generation like we did for TechFlow Solutions.
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
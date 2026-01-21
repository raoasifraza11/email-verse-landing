import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Mail, Target, CheckCircle, Zap, BarChart3, Globe, Shield } from 'lucide-react'

export const metadata = {
  title: 'SaaS Email Marketing - EmailVerse | B2B Software Lead Generation',
  description: 'Specialized email marketing solutions for SaaS companies. Generate qualified leads, reduce churn, and scale your B2B software business with proven strategies.',
}

export default function SaaSPage() {
  const saasStats = [
    { label: 'Average Lead Generation Increase', value: '285%', icon: TrendingUp },
    { label: 'Typical ROI for SaaS Clients', value: '580%', icon: BarChart3 },
    { label: 'Average Open Rate', value: '47.2%', icon: Mail },
    { label: 'Customer Acquisition Cost Reduction', value: '65%', icon: Target }
  ]

  const saasFeatures = [
    {
      icon: Users,
      title: 'Lead Scoring & Qualification',
      description: 'Advanced lead scoring based on product usage, company size, and engagement patterns to identify high-value prospects.',
      benefits: ['MQL to SQL conversion increase', 'Better sales team efficiency', 'Reduced time to close']
    },
    {
      icon: Zap,
      title: 'Product-Led Growth Campaigns',
      description: 'Automated email sequences that guide users through your product journey, from trial to paid conversion.',
      benefits: ['Higher trial-to-paid conversion', 'Reduced churn rates', 'Increased feature adoption']
    },
    {
      icon: Shield,
      title: 'Churn Prevention Automation',
      description: 'Proactive email campaigns that identify at-risk customers and re-engage them before they churn.',
      benefits: ['30% reduction in churn', 'Increased customer lifetime value', 'Better retention metrics']
    },
    {
      icon: Globe,
      title: 'Multi-Touch Attribution',
      description: 'Track the complete customer journey across all touchpoints to optimize your email marketing ROI.',
      benefits: ['Clear ROI visibility', 'Better budget allocation', 'Optimized campaign performance']
    }
  ]

  const saasUseCases = [
    {
      title: 'Free Trial Conversion',
      description: 'Convert more trial users to paid customers with targeted onboarding sequences',
      metrics: 'Average 45% increase in trial-to-paid conversion'
    },
    {
      title: 'Feature Adoption',
      description: 'Drive adoption of key features that correlate with customer success and retention',
      metrics: 'Up to 60% improvement in feature adoption rates'
    },
    {
      title: 'Upsell & Cross-sell',
      description: 'Identify expansion opportunities and nurture existing customers to higher plans',
      metrics: 'Average 35% increase in expansion revenue'
    },
    {
      title: 'Win-back Campaigns',
      description: 'Re-engage churned customers and bring them back to your platform',
      metrics: 'Typical 15-20% win-back rate for churned customers'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4 mr-2" />
                SaaS Specialists
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                SaaS Email Marketing
                <span className="text-primary-600 block">That Actually Converts</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Specialized email marketing strategies for B2B SaaS companies. From trial conversion 
                to churn prevention, we help software companies scale with data-driven email campaigns.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://calendly.com/emailverse/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block text-center"
                >
                  Start Growing Your Leads Now
                </a>
                <Link href="#case-study" className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200">
                  View SaaS Case Study
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">SaaS Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                {saasStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 p-3 rounded-lg inline-block mb-3">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS-Specific Features */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for SaaS Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our email marketing platform is specifically designed to address the unique challenges 
              and opportunities of B2B SaaS companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {saasFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="bg-blue-100 p-4 rounded-lg inline-block mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Use Cases */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common SaaS Email Marketing Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From acquisition to retention, we cover every stage of the SaaS customer lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {saasUseCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <p className="text-green-700 font-medium">{useCase.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study */}
      <section id="case-study" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SaaS Success Story: TechFlow Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How a B2B SaaS company transformed their lead generation and achieved 580% ROI
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">TechFlow Solutions</h3>
                <p className="text-lg opacity-90 mb-6">
                  A B2B project management SaaS struggling with manual outreach processes 
                  and low conversion rates from their free trial users.
                </p>
                <div className="flex items-center space-x-6">
                  <div>
                    <div className="text-2xl font-bold">6 Months</div>
                    <div className="text-sm opacity-90">Campaign Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">B2B SaaS</div>
                    <div className="text-sm opacity-90">Industry</div>
                  </div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">2,847</div>
                    <div className="text-sm opacity-90">Qualified Leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">580%</div>
                    <div className="text-sm opacity-90">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">47.2%</div>
                    <div className="text-sm opacity-90">Open Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">12.8%</div>
                    <div className="text-sm opacity-90">Reply Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Challenge & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h3>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <h4 className="font-semibold text-red-800 mb-2">Low Trial-to-Paid Conversion</h4>
                <p className="text-red-700">
                  Only 8% of free trial users were converting to paid plans, well below the industry average of 15-20%.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Manual Prospecting Inefficiency</h5>
                    <p className="text-gray-600">Sales team spending 60% of time on manual outreach with poor results</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Poor Onboarding Experience</h5>
                    <p className="text-gray-600">No systematic approach to guide trial users through key features</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Lack of Lead Nurturing</h5>
                    <p className="text-gray-600">No follow-up system for prospects who didn't convert immediately</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Solution</h3>
              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                <h4 className="font-semibold text-green-800 mb-2">Comprehensive Email Automation</h4>
                <p className="text-green-700">
                  Implemented a multi-sequence email system covering the entire customer journey from prospect to customer.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">7-Step Trial Onboarding Sequence</h5>
                    <p className="text-gray-600">Guided users through key features with progressive value demonstration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Behavioral Trigger Campaigns</h5>
                    <p className="text-gray-600">Automated emails based on user actions and feature usage patterns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Lead Scoring & Segmentation</h5>
                    <p className="text-gray-600">Advanced scoring system to prioritize high-value prospects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Breakdown */}
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Detailed Results Breakdown</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg inline-block mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">163%</div>
                <div className="text-gray-600">Increase in Lead Generation</div>
                <div className="text-sm text-gray-500 mt-1">From 1,080 to 2,847 leads</div>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-lg inline-block mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">275%</div>
                <div className="text-gray-600">Trial-to-Paid Improvement</div>
                <div className="text-sm text-gray-500 mt-1">From 8% to 22% conversion rate</div>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-lg inline-block mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$2.4M</div>
                <div className="text-gray-600">Additional Revenue</div>
                <div className="text-sm text-gray-500 mt-1">Direct attribution from campaigns</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Performance Improvements</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Email Open Rate</span>
                    <span className="font-semibold text-green-600">18% → 47.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Click-Through Rate</span>
                    <span className="font-semibold text-green-600">2.1% → 12.8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Lead Quality Score</span>
                    <span className="font-semibold text-green-600">6.2 → 8.7</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Sales Cycle Length</span>
                    <span className="font-semibold text-green-600">45 → 25 days</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Business Impact</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">75% reduction in manual prospecting time</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">45% faster sales cycle due to better qualified leads</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Scalable growth system for continued expansion</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Improved customer onboarding and satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies/techflow-solutions" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
              Read Complete Case Study
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Your SaaS Like TechFlow?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let EmailVerse help you implement the same proven strategies that generated 2,847 leads 
            and 580% ROI for TechFlow Solutions.
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
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
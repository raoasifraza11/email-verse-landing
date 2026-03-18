import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Mail, Target, CheckCircle, Zap, BarChart3, Globe, Layers } from 'lucide-react'

export const metadata = {
  title: 'Marketing Agency Email Marketing - EmailVerse | Agency Lead Generation',
  description: 'Specialized email marketing for marketing agencies. Scale your client acquisition while serving existing clients with automated outreach systems.',
}

export default function MarketingAgencyPage() {
  const agencyStats = [
    { label: 'Average Lead Generation Increase', value: '420%', icon: TrendingUp },
    { label: 'Typical ROI for Agency Clients', value: '650%', icon: BarChart3 },
    { label: 'Average Open Rate', value: '44.9%', icon: Mail },
    { label: 'Founder Time Saved', value: '80%', icon: Target }
  ]

  const agencyFeatures = [
    {
      icon: Layers,
      title: 'Multi-Client Campaign Management',
      description: 'Manage multiple client campaigns while running your own agency growth campaigns from one platform.',
      benefits: ['Centralized campaign management', 'Client-specific branding', 'Scalable operations']
    },
    {
      icon: Globe,
      title: 'Industry-Specific Targeting',
      description: 'Segment prospects by industry and company size with tailored messaging for each vertical.',
      benefits: ['Higher relevance and engagement', 'Better conversion rates', 'Specialized positioning']
    },
    {
      icon: BarChart3,
      title: 'Performance Attribution',
      description: 'Track ROI and performance across all campaigns with detailed analytics and reporting.',
      benefits: ['Clear ROI visibility', 'Data-driven optimization', 'Client reporting automation']
    },
    {
      icon: Zap,
      title: 'Automated Lead Qualification',
      description: 'Score and qualify leads automatically based on company size, industry, and engagement patterns.',
      benefits: ['Focus on high-value prospects', 'Improved sales efficiency', 'Better resource allocation']
    }
  ]

  const agencyUseCases = [
    {
      title: 'New Client Acquisition',
      description: 'Systematic outreach to potential clients while your team focuses on delivery',
      metrics: 'Average 300% increase in qualified prospects'
    },
    {
      title: 'Referral Partner Development',
      description: 'Build relationships with complementary service providers for mutual referrals',
      metrics: 'Up to 40% of new business from referral partners'
    },
    {
      title: 'Thought Leadership Campaigns',
      description: 'Position your agency as industry experts with valuable content and insights',
      metrics: 'Typical 60% increase in inbound inquiries'
    },
    {
      title: 'Client Retention & Upselling',
      description: 'Keep existing clients engaged and identify opportunities for service expansion',
      metrics: 'Average 25% increase in client lifetime value'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Agency Growth Specialists
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Marketing Agency
                <span className="text-primary-600 block">Lead Generation</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Specialized email marketing for marketing agencies. Scale your client acquisition 
                systematically while your team focuses on delivering exceptional results for existing clients.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://calendly.com/info-51729/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block text-center"
                >
                  Start Growing Your Leads Now
                </a>
                <Link href="#case-study" className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200">
                  View Agency Case Study
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Agency Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                {agencyStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-purple-100 p-3 rounded-lg inline-block mb-3">
                      <stat.icon className="h-6 w-6 text-purple-600" />
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

      {/* Agency-Specific Features */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Agency Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our email marketing platform understands the unique challenges agencies face 
              when trying to grow while serving demanding clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agencyFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="bg-purple-100 p-4 rounded-lg inline-block mb-6">
                  <feature.icon className="h-8 w-8 text-purple-600" />
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

      {/* Agency Use Cases */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Agency Email Marketing Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From new client acquisition to retention, we help agencies build predictable growth systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agencyUseCases.map((useCase, index) => (
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
              Agency Success Story: Digital Dynamics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How a marketing agency scaled their client acquisition and achieved 650% ROI
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-8 text-white mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Digital Dynamics</h3>
                <p className="text-lg opacity-90 mb-6">
                  A growing marketing agency caught in the classic trap: too busy serving clients 
                  to focus on their own growth, leading to feast-or-famine revenue cycles.
                </p>
                <div className="flex items-center space-x-6">
                  <div>
                    <div className="text-2xl font-bold">8 Months</div>
                    <div className="text-sm opacity-90">Campaign Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Marketing Agency</div>
                    <div className="text-sm opacity-90">Industry</div>
                  </div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">3,156</div>
                    <div className="text-sm opacity-90">Qualified Leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">650%</div>
                    <div className="text-sm opacity-90">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">44.9%</div>
                    <div className="text-sm opacity-90">Open Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">15.2%</div>
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
                <h4 className="font-semibold text-red-800 mb-2">The Agency Growth Paradox</h4>
                <p className="text-red-700">
                  The more successful they became with clients, the less time they had for business development, 
                  creating unpredictable revenue cycles.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Founder Spending 70% Time on Sales</h5>
                    <p className="text-gray-600">Limited time for strategic growth and team development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Feast-or-Famine Revenue Cycles</h5>
                    <p className="text-gray-600">Unpredictable income making it difficult to plan and scale</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">No Systematic Outreach Process</h5>
                    <p className="text-gray-600">Relying on referrals and word-of-mouth only</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Solution</h3>
              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                <h4 className="font-semibold text-green-800 mb-2">Automated Agency Growth System</h4>
                <p className="text-green-700">
                  Implemented a comprehensive automated outreach system that runs in the background, 
                  consistently generating qualified leads.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Multi-Channel Sequences</h5>
                    <p className="text-gray-600">Email + LinkedIn outreach targeting different business sizes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Industry Segmentation</h5>
                    <p className="text-gray-600">Tailored messaging for different industries and company sizes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Case Study Automation</h5>
                    <p className="text-gray-600">Automated sharing of relevant case studies based on prospect industry</p>
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
                <div className="bg-purple-100 p-4 rounded-lg inline-block mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">420%</div>
                <div className="text-gray-600">Increase in Qualified Leads</div>
                <div className="text-sm text-gray-500 mt-1">From 750 to 3,156 leads</div>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg inline-block mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">300%</div>
                <div className="text-gray-600">Team Growth</div>
                <div className="text-sm text-gray-500 mt-1">From 8 to 24 team members</div>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-lg inline-block mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$4.2M</div>
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
                    <span className="font-semibold text-green-600">22% → 44.9%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Reply Rate</span>
                    <span className="font-semibold text-green-600">3.8% → 15.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Founder Sales Time</span>
                    <span className="font-semibold text-green-600">70% → 14%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Revenue Predictability</span>
                    <span className="font-semibold text-green-600">6-month visibility</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Business Impact</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Eliminated feast-or-famine revenue cycles</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Predictable growth pipeline for planning</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Founder can focus on strategy and team development</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Scalable system that grows with the agency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies/digital-dynamics" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
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
            Ready to Scale Your Agency Like Digital Dynamics?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let EmailVerse help you implement the same automated growth system that generated 3,156 leads 
            and 650% ROI while freeing up 80% of the founder's time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/info-51729/30min"
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
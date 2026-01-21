import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Mail, Target, CheckCircle, Home, MapPin, Calendar, DollarSign } from 'lucide-react'

export const metadata = {
  title: 'Real Estate Email Marketing - EmailVerse | Property Lead Generation',
  description: 'Specialized email marketing for real estate agents and agencies. Generate qualified buyer and seller leads with automated nurturing campaigns.',
}

export default function RealEstatePage() {
  const realEstateStats = [
    { label: 'Average Lead Generation Increase', value: '285%', icon: TrendingUp },
    { label: 'Typical ROI for Real Estate Clients', value: '420%', icon: DollarSign },
    { label: 'Average Open Rate', value: '52.8%', icon: Mail },
    { label: 'Lead-to-Closing Improvement', value: '40%', icon: Target }
  ]

  const realEstateFeatures = [
    {
      icon: Home,
      title: 'Buyer & Seller Journey Automation',
      description: 'Separate automated sequences for buyers and sellers, each tailored to their specific needs and timeline.',
      benefits: ['Higher engagement rates', 'Better lead qualification', 'Shorter sales cycles']
    },
    {
      icon: MapPin,
      title: 'Geographic Market Targeting',
      description: 'Location-based campaigns with neighborhood-specific market data and property insights.',
      benefits: ['Hyper-local relevance', 'Better conversion rates', 'Increased referrals']
    },
    {
      icon: Calendar,
      title: 'Seasonal Campaign Optimization',
      description: 'Campaigns that adapt to real estate market seasons and local market conditions.',
      benefits: ['Year-round lead generation', 'Market-timed messaging', 'Consistent pipeline']
    },
    {
      icon: TrendingUp,
      title: 'Market Report Automation',
      description: 'Automated monthly market reports and property valuations to keep leads engaged long-term.',
      benefits: ['Ongoing lead nurturing', 'Position as market expert', 'Increased brand recall']
    }
  ]

  const realEstateUseCases = [
    {
      title: 'First-Time Buyer Education',
      description: 'Guide first-time buyers through the complex home buying process with educational content',
      metrics: 'Average 65% increase in buyer lead conversion'
    },
    {
      title: 'Seller Lead Nurturing',
      description: 'Keep potential sellers engaged with market updates until they\'re ready to list',
      metrics: 'Up to 45% improvement in listing acquisition'
    },
    {
      title: 'Past Client Reactivation',
      description: 'Stay top-of-mind with past clients for referrals and repeat business',
      metrics: 'Typical 35% increase in referral business'
    },
    {
      title: 'Open House Follow-up',
      description: 'Automated follow-up sequences for open house attendees and property inquiries',
      metrics: 'Average 50% increase in showing-to-offer conversion'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                <Home className="h-4 w-4 mr-2" />
                Real Estate Specialists
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Real Estate Email Marketing
                <span className="text-primary-600 block">That Closes Deals</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Specialized email marketing for real estate professionals. Generate qualified buyer and seller 
                leads with automated nurturing campaigns that work around the clock.
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
                  View Real Estate Case Study
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Real Estate Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                {realEstateStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-green-100 p-3 rounded-lg inline-block mb-3">
                      <stat.icon className="h-6 w-6 text-green-600" />
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

      {/* Real Estate-Specific Features */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Real Estate Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our email marketing platform understands the unique challenges of real estate sales 
              and provides specialized tools for agents and agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {realEstateFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="bg-green-100 p-4 rounded-lg inline-block mb-6">
                  <feature.icon className="h-8 w-8 text-green-600" />
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

      {/* Real Estate Use Cases */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Estate Email Marketing Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From lead generation to closing, we help you nurture prospects throughout the entire real estate journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {realEstateUseCases.map((useCase, index) => (
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
              Real Estate Success Story: Realty Masters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How a real estate agency automated their lead nurturing and achieved 420% ROI
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Realty Masters</h3>
                <p className="text-lg opacity-90 mb-6">
                  A mid-sized real estate agency struggling with inconsistent lead generation 
                  and poor follow-up processes for their buyer and seller leads.
                </p>
                <div className="flex items-center space-x-6">
                  <div>
                    <div className="text-2xl font-bold">4 Months</div>
                    <div className="text-sm opacity-90">Campaign Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Real Estate</div>
                    <div className="text-sm opacity-90">Industry</div>
                  </div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">1,234</div>
                    <div className="text-sm opacity-90">Qualified Leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">420%</div>
                    <div className="text-sm opacity-90">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">52.8%</div>
                    <div className="text-sm opacity-90">Open Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">18.4%</div>
                    <div className="text-sm opacity-90">Click Rate</div>
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
                <h4 className="font-semibold text-red-800 mb-2">Inconsistent Lead Generation</h4>
                <p className="text-red-700">
                  Seasonal fluctuations and lack of systematic follow-up resulted in 40% of leads going cold without proper nurturing.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Manual Follow-up Process</h5>
                    <p className="text-gray-600">Agents manually tracking leads with inconsistent follow-up timing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Long Sales Cycles Without Nurturing</h5>
                    <p className="text-gray-600">Average 8-month buyer journey with minimal touchpoints</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Seasonal Revenue Fluctuations</h5>
                    <p className="text-gray-600">60% revenue variance between peak and slow seasons</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Solution</h3>
              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                <h4 className="font-semibold text-green-800 mb-2">Automated Lead Nurturing System</h4>
                <p className="text-green-700">
                  Implemented separate buyer and seller journey automations with market-specific content and timing.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">First-Time Buyer Education Series</h5>
                    <p className="text-gray-600">8-email sequence educating buyers on the home buying process</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Monthly Market Reports</h5>
                    <p className="text-gray-600">Automated neighborhood-specific market analysis and property valuations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Past Client Nurturing</h5>
                    <p className="text-gray-600">Quarterly check-ins and referral requests to maintain relationships</p>
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
                <div className="bg-green-100 p-4 rounded-lg inline-block mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">285%</div>
                <div className="text-gray-600">Increase in Qualified Leads</div>
                <div className="text-sm text-gray-500 mt-1">From 320 to 1,234 leads</div>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg inline-block mb-4">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
                <div className="text-gray-600">Shorter Sales Cycle</div>
                <div className="text-sm text-gray-500 mt-1">From 8 to 4.8 months average</div>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-lg inline-block mb-4">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$1.8M</div>
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
                    <span className="font-semibold text-green-600">24% → 52.8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Click-Through Rate</span>
                    <span className="font-semibold text-green-600">3.2% → 18.4%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Lead Follow-up Rate</span>
                    <span className="font-semibold text-green-600">60% → 95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Referral Rate</span>
                    <span className="font-semibold text-green-600">15% → 35%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Business Impact</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">60% reduction in admin time for agents</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">95% lead follow-up rate (no leads fall through cracks)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Consistent revenue throughout all seasons</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Better client relationships and satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies/realty-masters" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
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
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let EmailVerse help you implement the same automated lead nurturing system that generated 
            1,234 leads and 420% ROI for Realty Masters.
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
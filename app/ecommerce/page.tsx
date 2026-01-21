import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Mail, Target, CheckCircle, ShoppingCart, Repeat, Heart, BarChart3 } from 'lucide-react'

export const metadata = {
  title: 'E-commerce Email Marketing - EmailVerse | Customer Lifecycle Automation',
  description: 'Specialized email marketing for e-commerce businesses. Automate customer lifecycle marketing, increase retention, and boost revenue.',
}

export default function EcommercePage() {
  const ecommerceStats = [
    { label: 'Average Lead Generation Increase', value: '385%', icon: TrendingUp },
    { label: 'Typical ROI for E-commerce Clients', value: '720%', icon: BarChart3 },
    { label: 'Average Open Rate', value: '48.6%', icon: Mail },
    { label: 'Customer Retention Improvement', value: '45%', icon: Heart }
  ]

  const ecommerceFeatures = [
    {
      icon: ShoppingCart,
      title: 'Automated Customer Journeys',
      description: 'Complete lifecycle automation from welcome series to win-back campaigns, tailored for e-commerce.',
      benefits: ['Increased customer lifetime value', 'Higher retention rates', 'Automated revenue generation']
    },
    {
      icon: Repeat,
      title: 'Behavioral Trigger Campaigns',
      description: 'Advanced behavioral triggers based on purchase history, browsing patterns, and engagement levels.',
      benefits: ['Personalized experiences', 'Higher conversion rates', 'Reduced cart abandonment']
    },
    {
      icon: Heart,
      title: 'Customer Retention Automation',
      description: 'Sophisticated retention campaigns that identify at-risk customers and re-engage them proactively.',
      benefits: ['Reduced churn rates', 'Increased repeat purchases', 'Better customer satisfaction']
    },
    {
      icon: BarChart3,
      title: 'Revenue Attribution Tracking',
      description: 'Detailed tracking of email campaign performance and revenue attribution across the customer journey.',
      benefits: ['Clear ROI visibility', 'Optimized campaign performance', 'Data-driven decisions']
    }
  ]

  const ecommerceUseCases = [
    {
      title: 'Welcome Series & Onboarding',
      description: 'Introduce new customers to your brand and guide them through their first purchase',
      metrics: 'Average 85% increase in first-time buyer conversion'
    },
    {
      title: 'Cart Abandonment Recovery',
      description: 'Recover lost sales with strategic cart abandonment email sequences',
      metrics: 'Up to 35% cart recovery rate with optimized sequences'
    },
    {
      title: 'Post-Purchase Upselling',
      description: 'Increase order value with relevant product recommendations and cross-sells',
      metrics: 'Typical 25% increase in average order value'
    },
    {
      title: 'Customer Win-Back Campaigns',
      description: 'Re-engage inactive customers with special offers and personalized content',
      metrics: 'Average 20% reactivation rate for dormant customers'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                <ShoppingCart className="h-4 w-4 mr-2" />
                E-commerce Specialists
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                E-commerce Email Marketing
                <span className="text-primary-600 block">That Drives Revenue</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Specialized email marketing for e-commerce businesses. Automate your entire customer lifecycle, 
                increase retention, and boost revenue with data-driven campaigns that convert.
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
                  View E-commerce Case Study
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">E-commerce Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                {ecommerceStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-indigo-100 p-3 rounded-lg inline-block mb-3">
                      <stat.icon className="h-6 w-6 text-indigo-600" />
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

      {/* E-commerce-Specific Features */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for E-commerce Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is specifically designed to handle the unique challenges and opportunities 
              of e-commerce customer lifecycle marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecommerceFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="bg-indigo-100 p-4 rounded-lg inline-block mb-6">
                  <feature.icon className="h-8 w-8 text-indigo-600" />
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

      {/* E-commerce Use Cases */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              E-commerce Email Marketing Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From acquisition to retention, we help e-commerce businesses maximize customer lifetime value 
              through strategic email marketing automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecommerceUseCases.map((useCase, index) => (
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
              E-commerce Success Story: ECommerce Plus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How an e-commerce platform transformed customer retention and achieved 720% ROI
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl p-8 text-white mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">ECommerce Plus</h3>
                <p className="text-lg opacity-90 mb-6">
                  A growing e-commerce platform struggling with customer retention and looking to 
                  implement automated lifecycle marketing to increase customer lifetime value.
                </p>
                <div className="flex items-center space-x-6">
                  <div>
                    <div className="text-2xl font-bold">6 Months</div>
                    <div className="text-sm opacity-90">Campaign Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">E-commerce</div>
                    <div className="text-sm opacity-90">Industry</div>
                  </div>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">4,231</div>
                    <div className="text-sm opacity-90">Qualified Leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">720%</div>
                    <div className="text-sm opacity-90">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">48.6%</div>
                    <div className="text-sm opacity-90">Open Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">22.4%</div>
                    <div className="text-sm opacity-90">Click Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Key Results Achieved</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-indigo-100 p-4 rounded-lg inline-block mb-4">
                  <Users className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">385%</div>
                <div className="text-gray-600">Increase in Qualified Leads</div>
                <div className="text-sm text-gray-500 mt-1">From 870 to 4,231 leads</div>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-lg inline-block mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">45%</div>
                <div className="text-gray-600">Customer Retention Increase</div>
                <div className="text-sm text-gray-500 mt-1">Automated lifecycle campaigns</div>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg inline-block mb-4">
                  <ShoppingCart className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$8.2M</div>
                <div className="text-gray-600">Additional Revenue</div>
                <div className="text-sm text-gray-500 mt-1">Direct attribution from campaigns</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Achievements</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">65% improvement in upselling success</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">35% reduction in customer churn</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Complete customer lifecycle automation</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Business Impact</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Automated revenue generation 24/7</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Improved customer satisfaction scores</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Scalable growth system for expansion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies/ecommerce-plus" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
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
            Ready to Transform Your E-commerce Growth?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let EmailVerse help you implement automated customer lifecycle marketing that generated 
            4,231 leads and 720% ROI for ECommerce Plus.
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
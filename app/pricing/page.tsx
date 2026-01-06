import { Check, X, Star, Zap, Crown } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      icon: Star,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Up to 5,000 contacts',
        '10,000 emails per month',
        'Basic templates',
        'Email support',
        'Basic analytics',
        'Drag & drop editor',
      ],
      limitations: [
        'No automation',
        'No A/B testing',
        'Limited integrations',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Best for growing businesses',
      icon: Zap,
      color: 'from-green-500 to-green-600',
      features: [
        'Up to 25,000 contacts',
        '100,000 emails per month',
        'Premium templates',
        'Priority support',
        'Advanced analytics',
        'Automation workflows',
        'A/B testing',
        'Custom domains',
        'API access',
      ],
      limitations: [
        'Limited AI features',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      icon: Crown,
      color: 'from-purple-500 to-purple-600',
      features: [
        'Unlimited contacts',
        'Unlimited emails',
        'Custom templates',
        'Dedicated support',
        'Advanced AI features',
        'Custom integrations',
        'White-label options',
        'Advanced security',
        'Custom reporting',
        'Phone support',
      ],
      limitations: [],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no surprises.
          </p>
          <div className="flex items-center justify-center space-x-4 text-primary-100">
            <Check className="h-5 w-5" />
            <span>14-day free trial</span>
            <Check className="h-5 w-5" />
            <span>Cancel anytime</span>
            <Check className="h-5 w-5" />
            <span>No setup fees</span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-4 ring-green-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${plan.color} mb-6`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-bold text-secondary-900">{plan.price}</span>
                    <span className="text-xl text-secondary-500 ml-1">{plan.period}</span>
                  </div>
                  
                  <button className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary-500/25'
                      : 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200'
                  }`}>
                    Start Free Trial
                  </button>
                </div>
                
                <div className="px-8 pb-8">
                  <h4 className="font-semibold text-secondary-900 mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                        <span className="text-secondary-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation) => (
                      <li key={limitation} className="flex items-center">
                        <X className="h-5 w-5 text-secondary-400 mr-3 flex-shrink-0" />
                        <span className="text-secondary-500">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-secondary-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                question: "Can I change my plan anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                question: "What happens if I exceed my email limit?",
                answer: "We'll notify you when you're approaching your limit. You can upgrade your plan or purchase additional emails."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee for all paid plans."
              },
              {
                question: "Is there a setup fee?",
                answer: "No, there are no setup fees or hidden costs. You only pay for your chosen plan."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{faq.question}</h3>
                <p className="text-secondary-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
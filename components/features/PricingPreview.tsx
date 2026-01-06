import { CheckCircle, ArrowRight, Zap } from 'lucide-react'

const PricingPreview = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 10,000 contacts',
        'Unlimited email sends',
        'Basic templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 50,000 contacts',
        'AI-powered automation',
        'Advanced segmentation',
        'A/B testing',
        'Priority support',
        'Custom templates'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited contacts',
        'White-label options',
        'Dedicated success manager',
        'Custom integrations',
        'Phone support',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial 
            and can be upgraded or downgraded at any time.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Zap className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4 ml-2 inline" />
              </button>
            </div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            All Plans Include
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Drag & drop builder',
              'Mobile-responsive templates',
              'Real-time analytics',
              'List management',
              'Spam testing',
              'GDPR compliance',
              'API access',
              'Webhook support'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Try EmailVerse free for 14 days. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                View Full Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPreview
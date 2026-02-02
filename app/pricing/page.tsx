import { Check, X, Star, Zap, Crown, Calculator } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Bulk Email Outreach Pricing - EmailVerse | High-Volume Email Marketing Plans',
  description: 'Choose from our bulk email outreach plans starting at $150/month. High-volume campaigns with guaranteed deliverability, dedicated IPs, and expert support. No setup fees.',
  keywords: 'bulk email outreach, email marketing pricing, high volume email, outbound email plans, email marketing service, bulk email service',
}

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      emoji: '🚀',
      price: '$150',
      period: '/month',
      description: 'Perfect for testing outbound & early-stage growth',
      color: 'from-blue-500 to-blue-600',
      features: [
        'Up to 100,000 contacts',
        '100,000 outbound emails / month',
        'Max 5,000 emails / day (deliverability-safe)',
        'Professional sending tool',
        'Analytics & reporting dashboard',
        'Campaign automation',
        'A/B testing',
        'Email scheduling',
        'SMTP credentials',
        'Dedicated IP pool',
        'No blockage guaranteed',
        'Expert support',
        'Free list validation up to 100,000 contacts'
      ],
      bestFor: 'Offer validation, small teams, solopreneurs, MVP outreach',
      popular: false,
    },
    {
      name: 'Professional',
      emoji: '⚡',
      price: '$400',
      period: '/month',
      description: 'Perfect for scaling consistent lead flow',
      color: 'from-green-500 to-green-600',
      features: [
        'Up to 300,000 contacts',
        '300,000 outbound emails / month',
        'Max 12,000 emails / day',
        'Professional sending tool',
        'Analytics & reporting dashboard',
        'Campaign automation',
        'A/B testing',
        'Email scheduling',
        'SMTP credentials',
        'Dedicated IP pool',
        'No blockage guaranteed',
        'Expert support',
        'Campaign management',
        'Free list validation up to 300,000 contacts'
      ],
      bestFor: 'Agencies, sales teams, growing outbound operations',
      popular: true,
    },
    {
      name: 'Enterprise',
      emoji: '🏆',
      price: '$850',
      period: '/month',
      description: 'Built for high-volume outbound teams',
      color: 'from-purple-500 to-purple-600',
      features: [
        'Up to 1,000,000 contacts',
        '1,000,000 outbound emails / month',
        'Max 40,000 emails / day',
        'Professional sending tool',
        'Analytics & reporting dashboard',
        'Advanced automation',
        'A/B testing',
        'Email scheduling',
        'SMTP credentials',
        'Dedicated IP pool',
        'No blockage guaranteed',
        'Priority expert support',
        'Full campaign management',
        'Free list validation up to 1,000,000 contacts'
      ],
      bestFor: 'Enterprises, large agencies, outbound-driven businesses',
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "Can I upgrade my plan anytime?",
      answer: "Yes, you can upgrade your plan at any time as your sending needs grow. The upgraded limits are applied immediately, and billing is adjusted accordingly."
    },
    {
      question: "What happens if I exceed my monthly sending limit?",
      answer: "If you reach your plan limit, you can either upgrade to a higher plan or purchase additional email volume. Our team will help you choose the most cost-effective option based on your usage."
    },
    {
      question: "Is there any setup or onboarding fee?",
      answer: "No, there is no setup or onboarding fee. You only pay for the plan you choose."
    },
    {
      question: "Do you offer refunds?",
      answer: "We do not offer refunds once the service has started. Infrastructure, IP reputation, and system resources are allocated upfront specifically for each account."
    },
    {
      question: "How does email list validation work?",
      answer: "You can upload your CSV file or provide your contact list directly. We validate the list, remove invalid emails, and filter out risky addresses and possible spam traps before sending. Only clean, usable contacts are counted toward your plan limits."
    },
    {
      question: "Why should I choose Email Verse?",
      answer: "Email Verse is built around deliverability, fair pricing, and complete transparency. We focus on inbox placement, provide clear volume limits, and offer end-to-end services without hidden conditions or exaggerated claims."
    },
    {
      question: "How do you ensure good deliverability?",
      answer: "We use a reputation-managed multiple IP pool to maintain strong deliverability across campaigns. However, deliverability also depends on your email list quality and content quality. High bounce rates or spam complaints can negatively impact performance. If deliverability issues are observed, our expert team will inspect your campaign and provide guidance. If technical changes are required, such as switching IP pools or replacing affected domains, this is handled with a one-time fee of $50. If no changes are needed, consultation and recommendations are provided at no cost."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bulk Email Outreach
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no surprises.
          </p>
          <div className="flex items-center justify-center space-x-4 text-primary-100 mb-8">
            <Check className="h-5 w-5" />
            <span>Free consultation</span>
            <Check className="h-5 w-5" />
            <span>Cancel anytime</span>
            <Check className="h-5 w-5" />
            <span>No setup fees</span>
          </div>
          
          {/* ROI Calculator CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg mb-4">
              These plans support fast, high-volume campaigns. If your goal is targeted, enriched outreach using an automated outbound machine for consistent lead generation, a custom setup is recommended.
            </p>
            <Link 
              href="/roi-calculator"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5" />
              <span>ROI Calculator</span>
            </Link>
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
                  <div className="text-4xl mb-4">{plan.emoji}</div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-bold text-secondary-900">{plan.price}</span>
                    <span className="text-xl text-secondary-500 ml-1">{plan.period}</span>
                  </div>
                  
                  <a 
                    href="https://calendly.com/emailverse/consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 inline-block text-center ${
                      plan.popular
                        ? 'bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary-500/25'
                        : 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200'
                    }`}
                  >
                    Start Growing Your Leads Now
                  </a>
                </div>
                
                <div className="px-8 pb-8">
                  <h4 className="font-semibold text-secondary-900 mb-4">What's included:</h4>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Best use case:</h5>
                    <p className="text-sm text-gray-600">👉 {plan.bestFor}</p>
                  </div>
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
            {faqs.map((faq, index) => (
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
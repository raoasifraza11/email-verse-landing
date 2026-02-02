import { Users, Target, Award, Heart } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'Every decision we make starts with how it benefits our customers'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in email marketing'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service'
    },
    {
      icon: Heart,
      title: 'Transparency',
      description: 'We believe in honest communication and transparent business practices'
    }
  ]

  const stats = [
    { number: '50M+', label: 'Emails Sent Monthly' },
    { number: '10K+', label: 'Active Customers' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '150+', label: 'Team Members' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About EmailVerse
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            We're on a mission to make email marketing simple, profitable, and stress-free for businesses by turning complex systems into a fully managed growth engine.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                EmailVerse was born out of frustration.
              </p>
              <p className="mb-6">
                As marketers, we spent years using traditional email marketing platforms that were supposed to make outreach easier, but instead, they made it more complicated, expensive, and risky. We had to juggle multiple tools, pay for endless add-ons, manage domains, warm-up mailboxes, configure servers, and still worry about deliverability.
              </p>
              <p className="mb-6">
                And after all that… results were still uncertain.
              </p>
              <p className="mb-6">
                That's when we realized the problem wasn't email marketing itself, it was how it was being delivered.
              </p>
              <p className="font-semibold text-gray-900">
                So we built EmailVerse.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Different Way Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Different Way to Do Email Marketing</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                EmailVerse is not just another tool. It's a done-for-you outbound system.
              </p>
              <p className="mb-8">
                Instead of selling software and leaving clients to struggle with setup, we built a model where our experts handle everything behind the scenes, including:
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                    Infrastructure & domain setup
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                    Mailbox creation & warm-up
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                    Deliverability optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                    Technical configuration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                    Campaign strategy & execution
                  </li>
                </ul>
              </div>
              <p className="mt-8">
                You don't need to worry about tools, IPs, spam filters, or inbox placement. We take care of the complexity, you only focus on leads, conversations, and growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* One Platform Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">One Platform. One Team. Real Results.</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-8">
                With EmailVerse, you don't pay for scattered tools or waste time managing systems. You get a single partner responsible for your entire email engine, from infrastructure to performance.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Our clients enjoy:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                    <span>Clean inbox delivery</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                    <span>Predictable outreach</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                    <span>Transparent reporting</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                    <span>Consistent lead flow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            EmailVerse by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-600 p-4 rounded-2xl inline-block mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            To make email marketing simple, profitable, and stress-free for businesses by turning complex systems into a fully managed growth engine.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Because you deserve results, not another dashboard to figure out.
          </p>
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Focus on Growth?</h3>
            <p className="text-gray-700 mb-6">
              Stop juggling tools and start generating leads. Let our experts handle your entire email infrastructure while you focus on what matters most - growing your business.
            </p>
            <a
              href="https://calendly.com/emailverse/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-green-700 transition-colors inline-block"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { Mail, CheckCircle, ArrowRight } from 'lucide-react'

const BlogNewsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
  }

  const benefits = [
    'Weekly email marketing insights',
    'Exclusive tips and strategies',
    'Industry news and updates',
    'Free templates and resources'
  ]

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/10 p-4 rounded-full inline-block mb-6">
          <Mail className="h-8 w-8" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Updated with Email Marketing Insights
        </h2>
        
        <p className="text-xl mb-8 opacity-90">
          Join 25,000+ marketers who get our weekly newsletter with actionable tips, 
          industry insights, and exclusive resources.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button type="submit" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2">
              <span>Subscribe</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2 justify-center md:justify-start">
              <CheckCircle className="h-5 w-5 text-green-300" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <p className="text-sm opacity-75 mt-6">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </section>
  )
}

export default BlogNewsletter
'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "EmailVerse transformed our email marketing completely. We saw a 300% increase in engagement rates within the first month. The AI-powered automation is incredible!",
      metrics: {
        improvement: '300%',
        metric: 'Engagement Rate'
      }
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'E-commerce Manager',
      company: 'Fashion Forward',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "The segmentation tools are phenomenal. We can target our customers with laser precision, and our conversion rates have never been higher. Best investment we've made!",
      metrics: {
        improvement: '250%',
        metric: 'Conversion Rate'
      }
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Growth Marketing Lead',
      company: 'SaaS Solutions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "The analytics dashboard gives us insights we never had before. We can optimize our campaigns in real-time and the ROI tracking is incredibly detailed.",
      metrics: {
        improvement: '400%',
        metric: 'ROI'
      }
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Digital Marketing Specialist',
      company: 'Local Business Co.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "As a small business, we needed something powerful but easy to use. EmailVerse delivered exactly that. The templates are beautiful and the automation saves us hours.",
      metrics: {
        improvement: '180%',
        metric: 'Time Saved'
      }
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTest = testimonials[currentTestimonial]

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6 shadow-lg border border-primary-200">
            <Star className="h-4 w-4 mr-2 animate-pulse" />
            Customer Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real businesses are saying 
            about their success with EmailVerse.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial Content */}
            <div>
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-primary-600 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(currentTest.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed mb-8">
                "{currentTest.text}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={currentTest.image}
                    alt={currentTest.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{currentTest.name}</div>
                    <div className="text-gray-600">{currentTest.role}</div>
                    <div className="text-primary-600 font-medium">{currentTest.company}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary-600">
                    +{currentTest.metrics.improvement}
                  </div>
                  <div className="text-sm text-gray-600">{currentTest.metrics.metric}</div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-medium text-gray-900">Campaign Performance</div>
                  <div className="text-xs text-gray-500">Last 30 days</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Open Rate</span>
                    <span className="font-semibold text-green-600">45.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-[45%]"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Click Rate</span>
                    <span className="font-semibold text-blue-600">12.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-[32%]"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Conversion Rate</span>
                    <span className="font-semibold text-purple-600">8.4%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-[42%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`card p-6 cursor-pointer transition-all duration-300 ${
                index === currentTestimonial ? 'ring-2 ring-primary-500 shadow-xl' : 'hover:shadow-lg'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-600">{testimonial.company}</div>
                </div>
              </div>
              
              <div className="flex space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-sm text-gray-600 line-clamp-3">
                {testimonial.text}
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-lg font-bold text-primary-600">
                  +{testimonial.metrics.improvement}
                </div>
                <div className="text-xs text-gray-500">{testimonial.metrics.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
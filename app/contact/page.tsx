import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help from our support team',
      contact: 'support@emailverse.com',
      availability: '24/7 response within 2 hours'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri, 9AM-6PM PST'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      contact: 'Available on all pages',
      availability: 'Mon-Fri, 9AM-6PM PST'
    },
    {
      icon: MapPin,
      title: 'Office Visit',
      description: 'Visit our headquarters',
      contact: '123 Tech Street, San Francisco, CA',
      availability: 'By appointment only'
    }
  ]

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Tech Street, Suite 100\nSan Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@emailverse.com'
    },
    {
      city: 'New York',
      address: '456 Business Ave, Floor 15\nNew York, NY 10001',
      phone: '+1 (555) 987-6543',
      email: 'ny@emailverse.com'
    },
    {
      city: 'London',
      address: '789 Innovation Road\nLondon, UK EC1A 1BB',
      phone: '+44 20 1234 5678',
      email: 'london@emailverse.com'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How Can We Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method) => (
              <div key={method.title} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="bg-gradient-primary p-4 rounded-2xl inline-block mb-4">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-3">{method.description}</p>
                <p className="font-semibold text-primary-600 mb-2">{method.contact}</p>
                <p className="text-sm text-gray-500">{method.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Form */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option>General Inquiry</option>
                      <option>Sales Question</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-green-600 to-blue-700 p-8 lg:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-green-100">hello@emailverse.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-green-100">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-green-100">123 Tech Street<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 mr-4" />
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-green-100">Mon-Fri: 9AM-6PM PST<br />Sat-Sun: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-green-400">
                  <p className="text-green-100 text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div key={office.city} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                    <p className="text-gray-600 whitespace-pre-line">{office.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-3" />
                    <p className="text-gray-600">{office.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-3" />
                    <p className="text-gray-600">{office.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
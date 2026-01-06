import { Users, Target, Award, Heart, Linkedin, Twitter } from 'lucide-react'

export default function AboutPage() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former VP of Marketing at TechCorp with 15+ years in email marketing',
      image: '👩‍💼',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Ex-Google engineer specializing in scalable marketing platforms',
      image: '👨‍💻',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Product leader with expertise in user experience and growth',
      image: '👩‍🎨',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      bio: 'Full-stack engineer passionate about building reliable systems',
      image: '👨‍🔧',
      social: { linkedin: '#', twitter: '#' }
    }
  ]

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
            We're on a mission to make email marketing simple, powerful, and accessible for businesses of all sizes
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
                EmailVerse was born out of frustration with existing email marketing platforms. 
                As marketers ourselves, we experienced firsthand the complexity, high costs, and 
                limited functionality of traditional solutions.
              </p>
              <p className="mb-6">
                In 2020, we set out to build something different. A platform that would combine 
                the power of AI with intuitive design, making advanced email marketing accessible 
                to everyone from solo entrepreneurs to enterprise teams.
              </p>
              <p>
                Today, EmailVerse powers email campaigns for over 10,000 businesses worldwide, 
                delivering more than 50 million emails every month with industry-leading 
                deliverability rates.
              </p>
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

      {/* Team */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
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
            To democratize email marketing by providing powerful, AI-driven tools that help 
            businesses of all sizes create meaningful connections with their customers.
          </p>
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Us on Our Journey</h3>
            <p className="text-gray-700 mb-6">
              We're always looking for talented individuals who share our passion for 
              innovation and customer success.
            </p>
            <button className="bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-green-700 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
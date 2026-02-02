import { MapPin, Clock, Users, Heart, Coffee, Laptop, Briefcase, Star } from 'lucide-react'

export default function CareersPage() {
  const jobs = [
    {
      title: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Build beautiful, responsive user interfaces using React and TypeScript',
      requirements: ['5+ years React experience', 'TypeScript proficiency', 'UI/UX design skills']
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for our email marketing platform',
      requirements: ['3+ years PM experience', 'B2B SaaS background', 'Data-driven mindset']
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Scale our infrastructure to handle millions of emails per day',
      requirements: ['AWS/GCP experience', 'Kubernetes knowledge', 'CI/CD expertise']
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Austin, TX',
      type: 'Full-time',
      description: 'Help our customers achieve their email marketing goals',
      requirements: ['2+ years CS experience', 'SaaS background', 'Excellent communication']
    },
    {
      title: 'Marketing Designer',
      department: 'Marketing',
      location: 'Remote',
      type: 'Contract',
      description: 'Create compelling visual content for our marketing campaigns',
      requirements: ['Figma/Sketch proficiency', 'Brand design experience', 'Motion graphics skills']
    },
    {
      title: 'Data Scientist',
      department: 'Engineering',
      location: 'Seattle, WA',
      type: 'Full-time',
      description: 'Build ML models to optimize email deliverability and engagement',
      requirements: ['Python/R expertise', 'ML/AI experience', 'Statistics background']
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness stipend'
    },
    {
      icon: Coffee,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO'
    },
    {
      icon: Laptop,
      title: 'Equipment & Setup',
      description: 'Top-tier equipment and $1000 home office setup budget'
    },
    {
      icon: Star,
      title: 'Growth & Learning',
      description: '$2000 annual learning budget and conference attendance'
    },
    {
      icon: Users,
      title: 'Team Events',
      description: 'Regular team retreats, virtual events, and social activities'
    },
    {
      icon: Briefcase,
      title: 'Equity & Compensation',
      description: 'Competitive salary, equity package, and performance bonuses'
    }
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We encourage experimentation and creative problem-solving'
    },
    {
      title: 'Customer Obsessed',
      description: 'Every decision starts with how it impacts our customers'
    },
    {
      title: 'Transparent Communication',
      description: 'We believe in open, honest, and direct communication'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and development'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Help us build the future of email marketing while working with amazing people
          </p>
          <div className="flex items-center justify-center space-x-8 text-purple-100">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>150+ Team Members</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Remote First</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2" />
              <span>4.9/5 Glassdoor Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Open Positions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-lg">
                        {job.department}
                      </span>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Work at EmailVerse?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-3 rounded-2xl inline-block mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interview Process */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Interview Process
          </h2>
          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Application Review',
                description: 'We review your application and portfolio within 3 business days'
              },
              {
                step: '2',
                title: 'Phone/Video Screen',
                description: '30-minute conversation with our recruiting team'
              },
              {
                step: '3',
                title: 'Technical Interview',
                description: 'Role-specific technical assessment or case study'
              },
              {
                step: '4',
                title: 'Team Interview',
                description: 'Meet with potential teammates and hiring manager'
              },
              {
                step: '5',
                title: 'Final Interview',
                description: 'Culture fit conversation with leadership team'
              }
            ].map((step) => (
              <div key={step.step} className="flex items-center bg-white rounded-2xl p-6 shadow-sm">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Don't see a role that fits? We're always looking for exceptional talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-50 transition-colors">
              View All Positions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Send Us Your Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
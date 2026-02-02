import { Shield, Eye, Lock, FileText, Globe, Users, Database, AlertTriangle } from 'lucide-react'

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: 'Interpretation and Definitions',
      content: `The words of which the initial letter is capitalized have meanings defined under the following conditions. Account means a unique account created for You to access our Service. Company refers to Email Verse, LLC, 30 N Gould St STE 4000 Sheridan Wyoming 82801. Personal Data is any information that relates to an identified or identifiable individual. Service refers to the Website. Website refers to Email Verse, accessible from https://email-verse.com.`
    },
    {
      icon: Database,
      title: 'Types of Data Collected',
      content: `We may collect Personal Data including email address, first name and last name, phone number, and address information. Usage Data is collected automatically when using the Service, including IP address, browser type, pages visited, time and date of visits, and device identifiers.`
    },
    {
      icon: Eye,
      title: 'Tracking Technologies and Cookies',
      content: `We use Cookies and similar tracking technologies including browser cookies, web beacons, and tracking pixels. These help us provide and improve our Service, authenticate users, and analyze usage patterns. You can control cookie settings through your browser preferences.`
    },
    {
      icon: Users,
      title: 'Use of Your Data',
      content: `We use your data to provide and maintain our Service, manage your account, fulfill contracts, contact you with updates, provide news and offers, manage requests, and for business transfers. We may share information with service providers, affiliates, business partners, and with your consent.`
    },
    {
      icon: Lock,
      title: 'Data Security and Retention',
      content: `We retain your data only as long as necessary for the purposes outlined in this policy. We implement commercially reasonable security measures, but cannot guarantee absolute security. You have the right to delete or request deletion of your personal data.`
    },
    {
      icon: Globe,
      title: 'Data Transfer and Disclosure',
      content: `Your data may be transferred to and processed in locations outside your jurisdiction. We may disclose data for business transactions, law enforcement requests, legal compliance, protecting rights and safety, and preventing wrongdoing.`
    }
  ]

  const rights = [
    'Access your personal data',
    'Correct inaccurate data',
    'Delete your personal data',
    'Object to data processing',
    'Request data portability',
    'Withdraw consent'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Protecting Your Data - Our commitment to safeguarding the confidentiality of our clients' information
          </p>
          <div className="flex items-center justify-center space-x-4 text-primary-100">
            <FileText className="h-5 w-5" />
            <span>Last updated: February 12, 2025</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Our Commitment to Privacy</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              In the realm of digital marketing, privacy is paramount. Our privacy policy serves as a commitment to safeguarding the confidentiality of our clients' information. It outlines how we collect, use, and protect data, fostering a transparent and trustworthy relationship.
            </p>
            <p className="text-secondary-700 leading-relaxed">
              This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use our Service and tells you about your privacy rights and how the law protects you. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-primary p-3 rounded-xl mr-4">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-secondary-900">{section.title}</h2>
                </div>
                <p className="text-secondary-700 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mt-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Your Privacy Rights</h2>
            <p className="text-secondary-700 mb-6">
              You have the right to access, update, or delete your personal information. Specifically, you can:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rights.map((right, index) => (
                <div key={index} className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-secondary-700">{right}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mt-8 border border-yellow-200">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-bold text-secondary-900">Children's Privacy</h2>
            </div>
            <p className="text-secondary-700">
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mt-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Contact Us</h2>
            <p className="text-secondary-700 mb-4">
              If you have any questions about this Privacy Policy, you can contact us:
            </p>
            <div className="space-y-2 text-secondary-700">
              <p><strong>Email:</strong> hello@email-verse.com</p>
              <p><strong>Company:</strong> Email Verse, LLC</p>
              <p><strong>Address:</strong> 30 N Gould St STE 4000, Sheridan, Wyoming 82801</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
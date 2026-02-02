import { FileText, Shield, AlertTriangle, Users, CreditCard, Gavel } from 'lucide-react'

export default function TermsPage() {
  const sections = [
    {
      icon: Users,
      title: 'Acceptance of Terms',
      content: 'By accessing and using EmailVerse, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      icon: Shield,
      title: 'Use License',
      content: 'Permission is granted to temporarily use EmailVerse for personal, non-commercial transitory viewing only. This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.'
    },
    {
      icon: AlertTriangle,
      title: 'Prohibited Uses',
      content: 'You may not use our service for any illegal or unauthorized purpose, send spam or unsolicited emails, violate any laws in your jurisdiction, or attempt to gain unauthorized access to our systems.'
    },
    {
      icon: CreditCard,
      title: 'Payment Terms',
      content: 'Subscription fees are billed in advance on a monthly basis. All fees are non-refundable except as required by law. We reserve the right to change our pricing with 30 days notice.'
    },
    {
      icon: AlertTriangle,
      title: 'Refund Policy',
      content: 'Our digital marketing services operate on a month-to-month basis, providing flexibility for our clients without the burden of long-term contracts. While we strive to deliver exceptional results, it\'s important to note that our services are non-refundable. Clients are billed on a monthly basis, and cancellations can be made at any time without incurring additional charges for subsequent months. However, please be aware that no refunds or pro-rated reimbursements will be provided for the current billing cycle. By engaging with our services, clients acknowledge and accept the non-refundable nature of our offerings, appreciating the freedom to terminate the arrangement at their discretion without the constraints of a binding contract.'
    }
  ]

  const limitations = [
    'EmailVerse shall not be liable for any indirect, incidental, special, consequential, or punitive damages',
    'Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim',
    'We provide the service "as is" without warranties of any kind',
    'We do not guarantee uninterrupted or error-free service'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Please read these terms carefully before using our email marketing platform.
          </p>
          <div className="flex items-center justify-center space-x-4 text-primary-100">
            <FileText className="h-5 w-5" />
            <span>Effective Date: January 1, 2025</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Agreement Overview</h2>
            <p className="text-secondary-700 leading-relaxed">
              These Terms of Service ("Terms") govern your use of EmailVerse's email marketing platform 
              and services. By creating an account or using our services, you agree to be bound by these 
              Terms. We reserve the right to update these Terms at any time, and continued use of our 
              services constitutes acceptance of any changes.
            </p>
          </div>

          {/* Terms Sections */}
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

          {/* User Responsibilities */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mt-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">User Responsibilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">You Must:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-secondary-700">Provide accurate account information</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-secondary-700">Comply with all applicable laws</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-secondary-700">Obtain proper consent for email campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-secondary-700">Maintain the security of your account</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">You Must Not:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-secondary-700">Send spam or unsolicited emails</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-secondary-700">Share your account credentials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-secondary-700">Violate intellectual property rights</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-secondary-700">Attempt to hack or disrupt our services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Limitations of Liability */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mt-8">
            <div className="flex items-center mb-6">
              <Gavel className="h-6 w-6 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-secondary-900">Limitations of Liability</h2>
            </div>
            <ul className="space-y-3">
              {limitations.map((limitation, index) => (
                <li key={index} className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-secondary-700">{limitation}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Termination */}
          <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Termination</h2>
            <p className="text-secondary-700 mb-4">
              Either party may terminate this agreement at any time. Upon termination:
            </p>
            <ul className="space-y-2 text-secondary-700">
              <li>• Your access to the service will be immediately suspended</li>
              <li>• You remain liable for all charges incurred before termination</li>
              <li>• We may delete your data after a reasonable notice period</li>
              <li>• Provisions regarding liability and intellectual property survive termination</li>
            </ul>
          </div>

          {/* GDPR & CAN-SPAM Compliance */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mt-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">GDPR & CAN-SPAM Compliance</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">CAN-SPAM Act</h3>
              <p className="text-secondary-700 leading-relaxed">
                By engaging with our digital marketing agency, you agree to comply with the CAN-SPAM Act and other relevant legislation governing electronic communication. We strictly prohibit the use of our services for any illegal emailing activities, including but not limited to spamming, phishing, and the dissemination of malicious content. Our clients must ensure that all email campaigns adhere to the guidelines set forth by the CAN-SPAM Act, which includes providing clear and accurate information in the sender's identification, offering recipients the option to opt-out, and refraining from the use of deceptive subject lines. Failure to adhere to these terms may result in the termination of our services and legal action. We are committed to maintaining ethical and lawful digital marketing practices and expect our clients to do the same.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">GDPR Compliance</h3>
              <p className="text-secondary-700 leading-relaxed">
                We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR). We process personal data lawfully, fairly, and transparently, and only for specified, explicit, and legitimate purposes. You have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data. For more information about how we handle your data, please refer to our Privacy Policy.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mt-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Questions About These Terms?</h2>
            <p className="text-secondary-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-secondary-700">
              <p><strong>Email:</strong> hello@email-verse.com</p>
              <p><strong>Phone:</strong> +1 406-405-2711</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
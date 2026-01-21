import { Shield, Eye, Download, Trash2, Edit, Globe, CheckCircle } from 'lucide-react'

export default function GDPRPage() {
  const rights = [
    {
      icon: Eye,
      title: 'Right to Access',
      description: 'Request a copy of all personal data we hold about you',
      action: 'Submit an access request to receive your data within 30 days'
    },
    {
      icon: Edit,
      title: 'Right to Rectification',
      description: 'Correct any inaccurate or incomplete personal data',
      action: 'Contact us to update your information at any time'
    },
    {
      icon: Trash2,
      title: 'Right to Erasure',
      description: 'Request deletion of your personal data ("right to be forgotten")',
      action: 'Submit a deletion request and we\'ll remove your data within 30 days'
    },
    {
      icon: Download,
      title: 'Right to Data Portability',
      description: 'Receive your data in a structured, machine-readable format',
      action: 'Export your data to transfer to another service provider'
    }
  ]

  const compliance = [
    {
      title: 'Lawful Basis for Processing',
      items: [
        'Consent: When you explicitly agree to our processing',
        'Contract: To fulfill our service agreement with you',
        'Legitimate Interest: For business operations and improvements',
        'Legal Obligation: To comply with applicable laws'
      ]
    },
    {
      title: 'Data Protection Measures',
      items: [
        'End-to-end encryption for data transmission',
        'Regular security audits and penetration testing',
        'Staff training on data protection principles',
        'Incident response procedures for data breaches'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            GDPR Compliance
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Your data protection rights under the General Data Protection Regulation.
          </p>
          <div className="flex items-center justify-center space-x-4 text-primary-100">
            <Globe className="h-5 w-5" />
            <span>EU Regulation 2016/679</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Our Commitment to GDPR</h2>
            <p className="text-secondary-700 leading-relaxed mb-4">
              EmailVerse is committed to protecting your personal data and respecting your privacy rights 
              under the General Data Protection Regulation (GDPR). As a data controller and processor, 
              we ensure that all personal data is handled in accordance with GDPR requirements.
            </p>
            <div className="flex items-center bg-green-50 border border-green-200 rounded-lg p-4">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
              <span className="text-green-800 font-medium">
                EmailVerse is fully GDPR compliant and regularly audited for data protection compliance.
              </span>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">Your Data Protection Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rights.map((right, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-primary p-3 rounded-xl mr-4">
                      <right.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900">{right.title}</h3>
                  </div>
                  <p className="text-secondary-700 mb-4">{right.description}</p>
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-3">
                    <p className="text-primary-800 text-sm font-medium">{right.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Details */}
          <div className="space-y-8">
            {compliance.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">{section.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-secondary-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Data Processing Information */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mt-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">How We Process Your Data</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Data Collection</h3>
                <p className="text-secondary-700">
                  We collect personal data only when necessary for providing our email marketing services. 
                  This includes account information, usage analytics, and communication preferences.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Data Storage</h3>
                <p className="text-secondary-700">
                  Your data is stored securely in EU-based data centers with appropriate technical and 
                  organizational measures to ensure security and confidentiality.
                </p>
              </div>
              
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Data Retention</h3>
                <p className="text-secondary-700">
                  We retain personal data only as long as necessary for the purposes for which it was 
                  collected or as required by law. Inactive accounts are automatically deleted after 3 years.
                </p>
              </div>
            </div>
          </div>

          {/* Exercise Your Rights */}
          <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Exercise Your Rights</h2>
            <p className="text-secondary-700 mb-6">
              To exercise any of your GDPR rights or if you have questions about our data processing practices:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-secondary-900 mb-2">Contact Information</h3>
                <div className="space-y-1 text-secondary-700">
                  <p><strong>Email:</strong> dpo@emailverse.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-secondary-900 mb-2">Response Time</h3>
                <div className="space-y-1 text-secondary-700">
                  <p>• Initial response: Within 72 hours</p>
                  <p>• Full response: Within 30 days</p>
                  <p>• Complex requests: Up to 90 days (with notification)</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white rounded-lg border border-primary-200">
              <p className="text-secondary-700 text-sm">
                <strong>Note:</strong> If you're not satisfied with our response, you have the right to 
                lodge a complaint with your local data protection authority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
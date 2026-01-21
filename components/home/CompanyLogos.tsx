'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const CompanyLogos = () => {
  const companies = [
    { name: 'Generational Group', logo: '/Company Logos/fd7a26_06caf799279f43168c6e3a808943f67d~mv2.png' },
    { name: 'SaaS Acquire', logo: '/Company Logos/fd7a26_250257b5bf38483182a4956902eac595~mv2.webp' },
    { name: 'Other Fortune', logo: '/Company Logos/fd7a26_87c71e544c2a4f6f8b4f24d8c6f09a9e~mv2.png' },
    { name: '.twiz', logo: '/Company Logos/fd7a26_b3be5b9642af43d3a73a5e369c72d331~mv2.png' },
    { name: 'pmhoa.pro', logo: '/Company Logos/fd7a26_f805d2024fe542c1b96be3c915e975b8~mv2.png' },
    { name: 'United State Source', logo: '/Company Logos/fd7a26_bc2fd789429544729a823a8bc0d5831e~mv2.png' },
    { name: 'GJ Claim Services', logo: '/Company Logos/fd7a26_6ca1a8b15a7c48759194904f35acd261~mv2.jpg' },
    { name: 'ContentDog', logo: '/Company Logos/fd7a26_9392df29098d48a79aaeaf503c7fdcdf~mv2.jpg' },
    { name: 'ClickedIn', logo: '/Company Logos/fd7a26_cdf0744d26184bf3a215df7a5494b2f7~mv2.webp' },
    { name: 'SPKRHD', logo: '/Company Logos/fd7a26_d524e821c8b040bfa7a5ea987fe83d1c~mv2.jpg' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Companies worldwide use our email marketing tools and services to drive growth and engagement
          </p>
        </div>
        
        {/* Single unified logo grid */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group w-full"
              >
                <div className="w-full h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-4 group-hover:shadow-lg transition-shadow duration-300 relative">
                  <Image 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 p-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-8 text-lg">
            Ready to join these successful companies?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-200 transform hover:-translate-y-0.5 text-lg"
          >
            <span>Get Started Today</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CompanyLogos
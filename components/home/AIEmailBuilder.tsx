'use client'

import { useState } from 'react'
import { Sparkles, Mail, Copy, CheckCircle, Wand2, Target, MessageSquare, Zap } from 'lucide-react'

const niches = [
  "SaaS", "Real Estate", "Roofing", "Ecommerce", "Coaching", 
  "Agencies", "Healthcare", "Finance", "Logistics", "Construction"
]

const pains = [
  "Low leads", "High ad cost", "No replies", "Slow growth", "Poor conversions"
]

const ctas = [
  "Book a call", "Download ebook", "Get demo", "Reply YES", "Learn more"
]

const tones = [
  "Direct", "Soft", "Value-driven", "Authority"
]

export default function AIEmailBuilder() {
  const [form, setForm] = useState({
    clientCompany: "",
    niche: "",
    pain: "",
    cta: "",
    tone: ""
  })
  
  const [output, setOutput] = useState<{ subject: string; body: string } | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const generate = async () => {
    if (!form.clientCompany || !form.niche || !form.pain || !form.cta || !form.tone) {
      alert("Please fill in all fields to generate your email.")
      return
    }

    setIsGenerating(true)
    
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Generate email dynamically based on niche and pain
    const subject = `Solve ${form.pain} in your ${form.niche} business at ${form.clientCompany}`
    
    let body = ""
    
    // Customize body based on tone
    switch (form.tone) {
      case "Direct":
        body = `Hi there,

${form.clientCompany} is facing ${form.pain} - and you're not alone. Most ${form.niche} companies struggle with this exact issue.

Here's the reality: Without addressing ${form.pain}, your business growth will continue to stagnate.

We've helped 500+ ${form.niche} companies eliminate ${form.pain} and achieve 3x better results in just 90 days.

Ready to fix this? ${form.cta}.

Best regards,
EmailVerse Team`
        break
        
      case "Soft":
        body = `Hello,

I hope this message finds you well. I noticed that many ${form.niche} companies like ${form.clientCompany} often face challenges with ${form.pain}.

We understand how frustrating this can be, especially when you're working hard to grow your business. That's why we've developed a gentle, proven approach that has helped hundreds of ${form.niche} businesses overcome similar challenges.

Our clients typically see significant improvements within the first few weeks, and we'd love to share how this could work for ${form.clientCompany} too.

Would you be interested to ${form.cta}?

Warm regards,
EmailVerse Team`
        break
        
      case "Value-driven":
        body = `Hi,

Quick question: What if ${form.clientCompany} could eliminate ${form.pain} while increasing revenue by 40% in the next quarter?

Here's what we've discovered working with 500+ ${form.niche} companies:
• 73% see results within 30 days
• Average ROI of 340% in first year  
• 95% client retention rate

The solution isn't complicated, but it requires the right strategy and execution.

We've created a proven system specifically for ${form.niche} businesses that transforms ${form.pain} into your biggest growth opportunity.

Interested in seeing how this works? ${form.cta}.

Best,
EmailVerse Team`
        break
        
      case "Authority":
        body = `Dear ${form.clientCompany} Team,

After analyzing 10,000+ ${form.niche} campaigns, we've identified the #1 reason companies experience ${form.pain}.

As the leading email marketing experts who've generated over $50M in revenue for our clients, we've developed a proprietary methodology that eliminates ${form.pain} permanently.

Our track record speaks for itself:
→ 500+ successful ${form.niche} campaigns
→ 10+ years of proven results
→ Featured in Forbes, Entrepreneur, and Inc.

We only work with serious ${form.niche} businesses ready to dominate their market.

If ${form.clientCompany} qualifies, ${form.cta}.

Regards,
EmailVerse Expert Team`
        break
        
      default:
        body = `Hello,

We understand that many ${form.niche} companies, like ${form.clientCompany}, often face challenges such as ${form.pain}. Our tailored solution can help you overcome this problem efficiently.

By implementing our approach, you can expect improved results and more productive workflows.

Interested in learning more? Click to ${form.cta}.

Best regards,
Your Team`
    }

    setOutput({ subject, body })
    setIsGenerating(false)
  }

  const copyToClipboard = async () => {
    if (!output) return
    
    const emailText = `Subject: ${output.subject}\n\n${output.body}`
    
    try {
      await navigator.clipboard.writeText(emailText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            AI-Powered Email Generator
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Email Builder
            <span className="text-primary-600 block">Generate Perfect Emails in Seconds</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let our AI create personalized, high-converting emails tailored to your industry and target audience. 
            No more writer's block - just results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary-100 p-3 rounded-lg mr-4">
                <Wand2 className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Email Generator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Client Company Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-all duration-300"
                  placeholder="e.g., TechFlow Solutions"
                  value={form.clientCompany}
                  onChange={(e) => setForm({ ...form, clientCompany: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Select Niche
                </label>
                <select
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-all duration-300"
                  value={form.niche}
                  onChange={(e) => setForm({ ...form, niche: e.target.value })}
                >
                  <option value="">Choose your industry</option>
                  {niches.map((niche) => (
                    <option key={niche} value={niche}>{niche}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Select Pain Point
                </label>
                <select
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-all duration-300"
                  value={form.pain}
                  onChange={(e) => setForm({ ...form, pain: e.target.value })}
                >
                  <option value="">What's their biggest challenge?</option>
                  {pains.map((pain) => (
                    <option key={pain} value={pain}>{pain}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Select Call-to-Action
                </label>
                <select
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-all duration-300"
                  value={form.cta}
                  onChange={(e) => setForm({ ...form, cta: e.target.value })}
                >
                  <option value="">What action do you want them to take?</option>
                  {ctas.map((cta) => (
                    <option key={cta} value={cta}>{cta}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Select Tone
                </label>
                <select
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none transition-all duration-300"
                  value={form.tone}
                  onChange={(e) => setForm({ ...form, tone: e.target.value })}
                >
                  <option value="">How should the email sound?</option>
                  {tones.map((tone) => (
                    <option key={tone} value={tone}>{tone}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={generate}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Generating Email...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    <span>Generate Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Output Display */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Generated Email</h3>
              </div>
              
              {output && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-200"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {!output ? (
              <div className="text-center py-12">
                <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-10 w-10 text-gray-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Ready to Generate</h4>
                <p className="text-gray-500">Fill out the form and click "Generate Email" to create your personalized email.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject Line:
                  </label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-800 font-medium">{output.subject}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Body:
                  </label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <pre className="whitespace-pre-wrap text-gray-800 font-mono text-sm leading-relaxed">
                      {output.body}
                    </pre>
                  </div>
                </div>

                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-primary-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-1">Pro Tip</h4>
                      <p className="text-primary-700 text-sm">
                        Personalize this email further by adding specific details about the recipient's company or recent achievements for even better results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4 inline-block">
              <Zap className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Generate professional emails in seconds, not hours</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4 inline-block">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry-Specific</h3>
            <p className="text-gray-600">Tailored content for your specific niche and audience</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4 inline-block">
              <MessageSquare className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Multiple Tones</h3>
            <p className="text-gray-600">Choose from different communication styles</p>
          </div>
        </div>
      </div>
    </section>
  )
}
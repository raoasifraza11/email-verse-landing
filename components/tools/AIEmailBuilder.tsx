'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Download, Wand2, Sparkles } from 'lucide-react'

const niches = ["SaaS", "Real Estate", "Roofing", "Ecommerce", "Coaching", "Agencies", "Healthcare", "Finance", "Logistics", "Construction"]
const pains = ["Low leads", "High ad cost", "No replies", "Slow growth", "Poor conversions"]
const ctas = ["Book a call", "Download ebook", "Get demo", "Reply YES", "Learn more"]
const tones = ["Direct", "Soft", "Value-driven", "Authority"]

export default function AIEmailBuilder() {
  const [form, setForm] = useState({ 
    clientCompany: "", 
    niche: "", 
    pain: "", 
    cta: "", 
    tone: "" 
  })
  const [output, setOutput] = useState<{subject: string, body: string} | null>(null)

  const generate = () => {
    // Generate email dynamically based on niche and pain
    const subject = `Solve ${form.pain} in your ${form.niche} business at ${form.clientCompany}`
    const body = `Hello,

We understand that many ${form.niche} companies, like ${form.clientCompany}, often face challenges such as ${form.pain}. Our tailored solution can help you overcome this problem efficiently. 

By implementing our approach, you can expect improved results and more productive workflows.

Interested in learning more? Click to ${form.cta}.

Best regards,
Your Team`

    setOutput({ subject, body })
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  const downloadEmail = () => {
    if (!output) return
    
    const emailContent = `Subject: ${output.subject}\n\n${output.body}`
    const blob = new Blob([emailContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'generated-email.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Wand2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Email Builder</h1>
                <p className="text-gray-600">Create professional emails in seconds with AI</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Sparkles className="h-4 w-4" />
              <span>Powered by Advanced AI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <Card className="w-full max-w-4xl shadow-xl rounded-2xl">
          <CardContent className="p-8 space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Email Verse AI Generator</h1>
              <p className="text-gray-600">Generate personalized emails for your business needs</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Email Configuration</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Client Company Name</label>
                  <input 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Enter client company name" 
                    value={form.clientCompany}
                    onChange={e => setForm({...form, clientCompany: e.target.value})} 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Niche</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    value={form.niche}
                    onChange={e => setForm({...form, niche: e.target.value})}
                  >
                    <option value="">Select Niche</option>
                    {niches.map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Pain Point</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    value={form.pain}
                    onChange={e => setForm({...form, pain: e.target.value})}
                  >
                    <option value="">Select Pain Point</option>
                    {pains.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select CTA</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    value={form.cta}
                    onChange={e => setForm({...form, cta: e.target.value})}
                  >
                    <option value="">Select CTA</option>
                    {ctas.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Tone</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    value={form.tone}
                    onChange={e => setForm({...form, tone: e.target.value})}
                  >
                    <option value="">Select Tone</option>
                    {tones.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200" 
                  onClick={generate}
                  disabled={!form.clientCompany || !form.niche || !form.pain || !form.cta || !form.tone}
                >
                  <Wand2 className="h-5 w-5 mr-2" />
                  Generate Email
                </Button>
              </div>

              {/* Output */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Generated Email</h2>
                  {output && (
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(`Subject: ${output.subject}\n\n${output.body}`)}
                        className="flex items-center space-x-1"
                      >
                        <Copy className="h-4 w-4" />
                        <span>Copy</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={downloadEmail}
                        className="flex items-center space-x-1"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </Button>
                    </div>
                  )}
                </div>

                {output ? (
                  <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Subject:</p>
                      <p className="text-gray-900 bg-gray-50 p-3 rounded border">{output.subject}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Body:</p>
                      <pre className="whitespace-pre-wrap text-gray-900 bg-gray-50 p-4 rounded border text-sm leading-relaxed">{output.body}</pre>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wand2 className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Email Generated Yet</h3>
                    <p className="text-gray-500">Fill out all the fields and click "Generate Email" to create your personalized email.</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
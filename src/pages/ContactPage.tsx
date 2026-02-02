import { useState } from 'react'
import { Mail, MessageSquare, Send, Loader2, Check, AlertCircle } from 'lucide-react'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Simulate form submission
    // In production, this would send to a backend or email service
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSuccess) {
    return (
      <div className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-green-500" size={40} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Message Sent!</h1>
          <p className="text-navy-300 mb-8">
            Thank you for reaching out. Our team will get back to you within 24-48 hours.
          </p>
          <button
            onClick={() => {
              setIsSuccess(false)
              setFormData({ name: '', email: '', subject: '', message: '' })
            }}
            className="btn-secondary"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Have questions? Our team is here to help. Reach out and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card">
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-gold-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-navy-300 text-sm mb-3">
                For general inquiries and support
              </p>
              <a
                href="mailto:contact@meridiannodepartners.com"
                className="text-gold-500 hover:underline text-sm"
              >
                contact@meridiannodepartners.com
              </a>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="text-gold-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Inquiries</h3>
              <p className="text-navy-300 text-sm mb-3">
                For bulk orders and institutional clients
              </p>
              <a
                href="mailto:enterprise@meridiannodepartners.com"
                className="text-gold-500 hover:underline text-sm"
              >
                enterprise@meridiannodepartners.com
              </a>
            </div>

            <div className="card bg-navy-800/50 border-gold-500/30">
              <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
              <p className="text-navy-300 text-sm">
                We typically respond within 24-48 hours during business days.
                Enterprise clients receive priority support.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-xl font-semibold text-white mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className="input"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="label">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="label">Subject *</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => updateFormData('subject', e.target.value)}
                    className="input"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Question</option>
                    <option value="enterprise">Enterprise/Bulk Order</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="label">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => updateFormData('message', e.target.value)}
                    className="input min-h-[150px] resize-y"
                    placeholder="How can we help you?"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
                    <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ChevronRight, ChevronLeft, Check, AlertCircle, Loader2 } from 'lucide-react'
import { products, getProduct, type Product } from '../lib/products'
import { submitOrder, type Order } from '../lib/supabase'
import { formatCurrency } from '../lib/utils'

const countries = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
  'France', 'Netherlands', 'Switzerland', 'Singapore', 'Japan',
  'South Korea', 'United Arab Emirates', 'Other'
]

const referralSources = [
  'World Mobile Community', 'Twitter/X', 'YouTube', 'Friend/Referral',
  'Search Engine', 'Crypto Community', 'Other'
]

type Step = 1 | 2 | 3 | 4

export function OrderPage() {
  const [searchParams] = useSearchParams()
  const [currentStep, setCurrentStep] = useState<Step>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    message: '',
    referralSource: '',
    acceptedTerms: false,
    acceptedDisclaimer: false,
  })

  useEffect(() => {
    const productId = searchParams.get('product')
    if (productId) {
      const product = getProduct(productId)
      if (product) setSelectedProduct(product)
    }
  }, [searchParams])

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1: return selectedProduct !== null && quantity > 0
      case 2: return formData.firstName.trim() !== '' && formData.lastName.trim() !== '' && formData.email.trim() !== '' && formData.phone.trim() !== '' && formData.country !== ''
      case 3: return true
      case 4: return formData.acceptedTerms && formData.acceptedDisclaimer
      default: return false
    }
  }

  const handleSubmit = async () => {
    if (!selectedProduct) return
    setIsSubmitting(true)
    setError(null)
    try {
      const orderData: Omit<Order, 'id' | 'created_at' | 'status'> = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || undefined,
        product_id: selectedProduct.id,
        quantity,
        country: formData.country,
        message: formData.message || undefined,
        referral_source: formData.referralSource || undefined,
        accepted_terms: formData.acceptedTerms,
        accepted_disclaimer: formData.acceptedDisclaimer,
      }
      await submitOrder(orderData)
      setIsSuccess(true)
    } catch (err) {
      console.error('Order submission error:', err)
      setError('There was an error submitting your order. Please try again or contact support.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-green-500" size={40} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Order Submitted Successfully!</h1>
          <p className="text-navy-300 mb-8">Thank you for your order. Our team will contact you within 24-48 hours with payment instructions and next steps.</p>
          <div className="card text-left mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-navy-300">Product:</span><span className="text-white">{selectedProduct?.name}</span></div>
              <div className="flex justify-between"><span className="text-navy-300">Quantity:</span><span className="text-white">{quantity}</span></div>
              <div className="flex justify-between"><span className="text-navy-300">Email:</span><span className="text-white">{formData.email}</span></div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-secondary">Return Home</Link>
            <a href="https://airnode.worldmobile.io" target="_blank" rel="noopener noreferrer" className="btn-primary">Visit World Mobile Portal</a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Reserve Your AirNodes</h1>
          <p className="text-navy-300">Complete the form below to submit your order request.</p>
        </div>

        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${currentStep >= step ? 'bg-gold-500 text-navy-800' : 'bg-navy-700 text-navy-400'}`}>
                {currentStep > step ? <Check size={20} /> : step}
              </div>
              {step < 4 && <div className={`w-16 h-1 mx-2 rounded ${currentStep > step ? 'bg-gold-500' : 'bg-navy-700'}`} />}
            </div>
          ))}
        </div>

        <div className="card">
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">Select Your AirNode</h2>
              <div className="space-y-3 mb-6">
                {products.map((product) => (
                  <button key={product.id} onClick={() => setSelectedProduct(product)} className={`w-full text-left p-4 rounded-lg border transition-all ${selectedProduct?.id === product.id ? 'border-gold-500 bg-gold-500/10' : 'border-navy-600 hover:border-navy-500 bg-navy-700/50'}`}>
                    <div className="flex justify-between items-center">
                      <div><h3 className="font-semibold text-white">{product.name}</h3><p className="text-sm text-navy-300">{product.useCase}</p></div>
                      <span className="text-gold-500 font-semibold">{product.priceRange}</span>
                    </div>
                  </button>
                ))}
              </div>
              {selectedProduct && (
                <div className="mb-6">
                  <label className="label">Quantity</label>
                  <div className="flex items-center gap-4">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-lg bg-navy-700 text-white hover:bg-navy-600 transition-colors">-</button>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="input w-24 text-center" min="1" />
                    <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-lg bg-navy-700 text-white hover:bg-navy-600 transition-colors">+</button>
                  </div>
                  {selectedProduct.price > 0 && <p className="mt-4 text-lg"><span className="text-navy-300">Estimated Total: </span><span className="text-gold-500 font-semibold">{formatCurrency(selectedProduct.price * quantity)}</span></p>}
                </div>
              )}
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">Your Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div><label className="label">First Name *</label><input type="text" value={formData.firstName} onChange={(e) => updateFormData('firstName', e.target.value)} className="input" placeholder="John" /></div>
                <div><label className="label">Last Name *</label><input type="text" value={formData.lastName} onChange={(e) => updateFormData('lastName', e.target.value)} className="input" placeholder="Smith" /></div>
              </div>
              <div className="mb-4"><label className="label">Email Address *</label><input type="email" value={formData.email} onChange={(e) => updateFormData('email', e.target.value)} className="input" placeholder="john@example.com" /><p className="text-xs text-navy-400 mt-1">Must match your airnode.worldmobile.io account email</p></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div><label className="label">Phone Number *</label><input type="tel" value={formData.phone} onChange={(e) => updateFormData('phone', e.target.value)} className="input" placeholder="+1 (555) 000-0000" /></div>
                <div><label className="label">Company (Optional)</label><input type="text" value={formData.company} onChange={(e) => updateFormData('company', e.target.value)} className="input" placeholder="Company name" /></div>
              </div>
              <div><label className="label">Country *</label><select value={formData.country} onChange={(e) => updateFormData('country', e.target.value)} className="input"><option value="">Select your country</option>{countries.map((country) => (<option key={country} value={country}>{country}</option>))}</select></div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">Additional Details</h2>
              <div className="mb-4"><label className="label">Message / Special Requirements (Optional)</label><textarea value={formData.message} onChange={(e) => updateFormData('message', e.target.value)} className="input min-h-[120px] resize-y" placeholder="Let us know if you have any special requirements or questions..." /></div>
              <div><label className="label">How did you hear about us? (Optional)</label><select value={formData.referralSource} onChange={(e) => updateFormData('referralSource', e.target.value)} className="input"><option value="">Select an option</option>{referralSources.map((source) => (<option key={source} value={source}>{source}</option>))}</select></div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">Review & Submit</h2>
              <div className="bg-navy-700/50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-white mb-3">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-navy-300">Product:</span><span className="text-white">{selectedProduct?.name}</span></div>
                  <div className="flex justify-between"><span className="text-navy-300">Quantity:</span><span className="text-white">{quantity}</span></div>
                  {selectedProduct && selectedProduct.price > 0 && <div className="flex justify-between border-t border-navy-600 pt-2 mt-2"><span className="text-navy-300">Estimated Total:</span><span className="text-gold-500 font-semibold">{formatCurrency(selectedProduct.price * quantity)}</span></div>}
                </div>
              </div>
              <div className="bg-navy-700/50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-white mb-3">Contact Information</h3>
                <div className="space-y-1 text-sm">
                  <p className="text-navy-200">{formData.firstName} {formData.lastName}</p>
                  <p className="text-navy-200">{formData.email}</p>
                  <p className="text-navy-200">{formData.phone}</p>
                  {formData.company && <p className="text-navy-200">{formData.company}</p>}
                  <p className="text-navy-200">{formData.country}</p>
                </div>
              </div>
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={formData.acceptedTerms} onChange={(e) => updateFormData('acceptedTerms', e.target.checked)} className="mt-1 w-5 h-5 rounded border-navy-500 bg-navy-700 text-gold-500 focus:ring-gold-500" />
                  <span className="text-sm text-navy-200">I agree to the Terms & Conditions and understand that this is an order request that will be processed by Meridian Node Partners. *</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={formData.acceptedDisclaimer} onChange={(e) => updateFormData('acceptedDisclaimer', e.target.checked)} className="mt-1 w-5 h-5 rounded border-navy-500 bg-navy-700 text-gold-500 focus:ring-gold-500" />
                  <span className="text-sm text-navy-200">I understand that rewards are not guaranteed and may vary based on location, network performance, and other factors. This is not financial advice. *</span>
                </label>
              </div>
              {error && <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3"><AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} /><p className="text-red-400 text-sm">{error}</p></div>}
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t border-navy-600">
            <button onClick={() => setCurrentStep((currentStep - 1) as Step)} disabled={currentStep === 1} className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"><ChevronLeft size={20} className="mr-2" />Back</button>
            {currentStep < 4 ? (
              <button onClick={() => setCurrentStep((currentStep + 1) as Step)} disabled={!canProceed()} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">Continue<ChevronRight size={20} className="ml-2" /></button>
            ) : (
              <button onClick={handleSubmit} disabled={!canProceed() || isSubmitting} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">{isSubmitting ? (<><Loader2 size={20} className="mr-2 animate-spin" />Submitting...</>) : (<>Submit Order<ChevronRight size={20} className="ml-2" /></>)}</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

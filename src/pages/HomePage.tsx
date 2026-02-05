import { useState } from 'react';
import {
  Globe, Zap, Radio, Building, ChevronRight, Check,
  DollarSign, Shield, Users, Award, Clock, RefreshCw, Headphones, TrendingUp,
  ChevronDown, ChevronUp, Star, Mail, MessageCircle, CheckCircle, Menu
} from 'lucide-react';

// Product data - Meridian Node Partners inventory (Enterprise pricing)
const products = [
  {
    id: 'spark',
    name: 'Spark',
    description: 'Connectivity for residential and business premises. Private and public access point. Ideal for bulk deployments.',
    price: '$80',
    priceLabel: 'Per Unit',
    icon: Zap,
    featured: false,
    inStock: true,
    link: '/products/spark'
  },
  {
    id: 'portal-180',
    name: 'Portal 180',
    description: 'Extended range connectivity with 180-degree coverage. Perfect for targeted area deployments.',
    price: '$9,000',
    priceLabel: 'Per Unit',
    icon: Radio,
    featured: false,
    inStock: true,
    link: '/products/portal-180'
  },
  {
    id: 'portal-360',
    name: 'Portal 360',
    description: 'Full 360-degree coverage for maximum connectivity in open spaces. Our most popular enterprise choice.',
    price: '$18,000',
    priceLabel: 'Per Unit',
    icon: Globe,
    featured: true,
    inStock: true,
    link: '/products/portal-360'
  },
  {
    id: 'titan',
    name: 'Titan',
    description: 'Enterprise-grade AirNode for large-scale deployments and maximum coverage. Ultimate network expansion.',
    price: '$105,000',
    priceLabel: 'Per Unit',
    icon: Building,
    featured: true,
    inStock: true,
    link: '/products/titan'
  }
];

const testimonials = [
  {
    name: 'Marcus T.',
    role: 'Enterprise Node Operator',
    text: 'The buyback guarantee gave us confidence to invest big. Meridian delivered on every promise and the support is unmatched.'
  },
  {
    name: 'Sarah K.',
    role: 'Investment Group Lead',
    text: 'Unlike other channels, Meridian offers real exit liquidity. That buyback option is a game-changer for our portfolio.'
  },
  {
    name: 'David R.',
    role: 'Multi-Node Portfolio Manager',
    text: 'Invested $150k through Meridian. Professional service, priority support, and knowing I can sell back anytime - that\'s real partnership.'
  }
];

export function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'general'
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-wm-yellow rounded-lg flex items-center justify-center">
                <Radio className="w-6 h-6 text-black" />
              </div>
              <div>
                <span className="text-white font-bold text-lg">Meridian Node Partners</span>
                <span className="hidden sm:inline text-xs text-gray-400 ml-2">Enterprise Reseller</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#why-meridian" className="text-gray-300 hover:text-wm-yellow transition-colors">Why Meridian</a>
              <a href="#products" className="text-gray-300 hover:text-wm-yellow transition-colors">Products</a>
              <a href="#faq" className="text-gray-300 hover:text-wm-yellow transition-colors">FAQ</a>
              <a href="#contact" className="bg-wm-yellow text-black px-6 py-2 rounded-lg font-semibold hover:bg-wm-yellow-hover transition-colors">Get Started</a>
            </div>
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <a href="#why-meridian" className="block text-gray-300 hover:text-wm-yellow">Why Meridian</a>
              <a href="#products" className="block text-gray-300 hover:text-wm-yellow">Products</a>
              <a href="#faq" className="block text-gray-300 hover:text-wm-yellow">FAQ</a>
              <a href="#contact" className="block bg-wm-yellow text-black px-6 py-2 rounded-lg font-semibold text-center">Get Started</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 gradient-hero min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                <RefreshCw className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Buyback Guarantee Available</span>
              </div>
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Invest with{' '}<span className="text-wm-yellow">Confidence.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4 max-w-xl">
                The only AirNode partner that buys back your nodes at any time. Enterprise-grade hardware with unmatched exit liquidity.
              </p>
              <p className="text-lg text-wm-yellow font-semibold mb-8">Minimum investment: $25,000</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#contact" className="btn-primary bg-wm-yellow text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-wm-yellow-hover transition-all inline-flex items-center justify-center gap-2">
                  Start Investing<ChevronRight className="w-5 h-5" />
                </a>
                <a href="#why-meridian" className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-wm-yellow hover:text-wm-yellow transition-all inline-flex items-center justify-center">Why Meridian?</a>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2"><Check className="w-5 h-5 text-green-400" /><span>Buyback Anytime</span></div>
                <div className="flex items-center gap-2"><Check className="w-5 h-5 text-green-400" /><span>Priority Support</span></div>
                <div className="flex items-center gap-2"><Check className="w-5 h-5 text-green-400" /><span>Full Warranty</span></div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center"><div className="w-64 h-64 bg-wm-yellow/20 rounded-full animate-pulse-slow"></div></div>
                <div className="absolute inset-0 flex items-center justify-center"><Radio className="w-32 h-32 text-wm-yellow" /></div>
                <div className="absolute bottom-8 left-8 right-8 bg-black/50 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div><p className="text-gray-400 text-sm">Most Popular</p><p className="text-white font-bold text-xl">Portal 360 AirNode</p></div>
                    <div className="text-right"><p className="text-gray-400 text-sm">Per Unit</p><p className="text-wm-yellow font-bold text-xl">$18,000</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-900 py-6 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2"><RefreshCw className="w-5 h-5 text-green-400" /><span className="text-green-400 font-medium">Buyback Guarantee</span></div>
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-wm-yellow" /><span>Licensed Enterprise Partner</span></div>
            <div className="flex items-center gap-2"><Award className="w-5 h-5 text-wm-yellow" /><span>Authentic Hardware</span></div>
            <div className="flex items-center gap-2"><Headphones className="w-5 h-5 text-wm-yellow" /><span>Priority Support</span></div>
          </div>
        </div>
      </section>

      {/* Why Choose Meridian */}
      <section id="why-meridian" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Meridian Over the Official Store?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We offer what the official World Mobile store and Alliance partners can't - true investment security with our exclusive buyback guarantee.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: RefreshCw, title: 'Buyback Guarantee', description: 'We buy back your nodes at any time. No questions asked. True exit liquidity that no other partner offers.', highlight: true },
              { icon: TrendingUp, title: 'Investment Security', description: 'Your capital is never locked. Change your mind? We\'ll take the nodes back. It\'s that simple.' },
              { icon: Headphones, title: 'Dedicated Account Manager', description: 'Enterprise clients get a dedicated point of contact for priority support and deployment assistance.' },
              { icon: Clock, title: 'Faster Deployment', description: 'Skip the queue. Our enterprise clients get priority fulfillment and expedited shipping worldwide.' },
              { icon: Shield, title: 'Full Manufacturer Warranty', description: '100% authentic World Mobile hardware with complete warranty coverage and documentation.' },
              { icon: Users, title: 'Bulk Pricing Advantage', description: 'Enterprise-scale pricing that makes large deployments economically viable. Better margins for serious investors.' }
            ].map((feature, index) => (
              <div key={index} className={`p-8 rounded-2xl ${feature.highlight ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50'}`}>
                <div className={`w-16 h-16 ${feature.highlight ? 'bg-green-100' : 'bg-wm-yellow/10'} rounded-2xl flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-8 h-8 ${feature.highlight ? 'text-green-600' : 'text-wm-yellow'}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                {feature.highlight && <span className="inline-block mt-4 px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Meridian Exclusive</span>}
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Meridian vs. Other Options</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-800 rounded-xl">
                <h4 className="font-bold text-lg mb-4">Official Store</h4>
                <ul className="text-gray-400 text-sm space-y-2"><li>❌ No buyback option</li><li>❌ Standard support queue</li><li>❌ Fixed retail pricing</li><li>✓ Authentic hardware</li></ul>
              </div>
              <div className="text-center p-6 bg-gray-800 rounded-xl">
                <h4 className="font-bold text-lg mb-4">WM Alliance</h4>
                <ul className="text-gray-400 text-sm space-y-2"><li>❌ No buyback option</li><li>❌ Variable support</li><li>❌ Limited inventory</li><li>✓ Authentic hardware</li></ul>
              </div>
              <div className="text-center p-6 bg-green-900/50 rounded-xl border-2 border-green-500">
                <h4 className="font-bold text-lg mb-4 text-green-400">Meridian Partners</h4>
                <ul className="text-gray-300 text-sm space-y-2"><li>✓ <span className="text-green-400 font-medium">Buyback anytime</span></li><li>✓ <span className="text-green-400 font-medium">Dedicated support</span></li><li>✓ <span className="text-green-400 font-medium">Enterprise pricing</span></li><li>✓ Authentic hardware</li></ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise AirNode Pricing</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Invest in the decentralized network with confidence. All nodes eligible for buyback.</p>
          </div>
          <div className="bg-wm-yellow/10 border border-wm-yellow/30 rounded-xl p-4 mb-12 text-center">
            <p className="text-wm-yellow font-semibold">💰 Minimum Investment: $25,000 | All purchases include buyback eligibility</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="product-card bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-wm-yellow transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-wm-yellow/10 rounded-xl flex items-center justify-center"><product.icon className="w-6 h-6 text-wm-yellow" /></div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">Buyback Eligible</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div><span className="text-wm-yellow font-bold text-xl">{product.price}</span><span className="text-gray-500 text-sm ml-1">/ unit</span></div>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-gray-400 hover:text-wm-yellow transition-colors">Inquire →</button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">Volume discounts available for orders above $100,000. Contact us for custom enterprise pricing.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Enterprise Investors</h2>
            <p className="text-xl text-gray-600">See why serious investors choose Meridian</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-wm-yellow text-wm-yellow" />))}</div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center"><span className="text-gray-600 font-bold">{testimonial.name.charAt(0)}</span></div>
                  <div><p className="font-semibold text-gray-900">{testimonial.name}</p><p className="text-sm text-gray-500">{testimonial.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2></div>
          <div className="space-y-4">
            {[
              { q: 'How does the buyback guarantee work?', a: 'It\'s simple - if you ever want to exit your investment, we\'ll buy back your nodes. Contact us, agree on the buyback terms, and we\'ll handle the rest. No other partner offers this level of exit liquidity.' },
              { q: 'Why is there a $25,000 minimum?', a: 'We focus on serious enterprise investors who want dedicated support and the security of our buyback program. This minimum ensures we can provide white-glove service to every client.' },
              { q: 'Are you official World Mobile?', a: 'No, Meridian Node Partners is a licensed enterprise reseller. We are an independent business that sells authentic World Mobile AirNodes with full manufacturer warranty. We are not affiliated with World Mobile directly.' },
              { q: 'Why choose Meridian over the official store?', a: 'Three reasons: 1) Our exclusive buyback guarantee - no one else offers this. 2) Dedicated account management for enterprise clients. 3) Priority fulfillment and support. The official store can\'t match our investment security.' },
              { q: 'What about the World Mobile Alliance?', a: 'Alliance partners don\'t offer buyback guarantees or dedicated enterprise support. With Meridian, your investment is never locked - that\'s the key difference.' },
              { q: 'Are the AirNodes authentic?', a: 'Yes, all our AirNodes are 100% authentic World Mobile hardware. Each unit comes with the original manufacturer warranty and all documentation.' },
              { q: 'Do you ship internationally?', a: 'Yes, we ship to most countries with priority shipping for enterprise orders. Contact us for shipping quotes and timelines to your location.' },
              { q: 'What payment methods do you accept?', a: 'We accept bank transfers, credit cards, and select cryptocurrency payments. For enterprise orders, we can arrange custom payment terms.' }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>
                {openFaq === index && <div className="px-6 pb-4 text-gray-600">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Invest with Confidence?</h2>
              <p className="text-xl text-gray-400 mb-8">Join our enterprise clients who invest knowing they have true exit liquidity. Minimum investment: $25,000.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300"><Mail className="w-6 h-6 text-wm-yellow" /><span>info@meridiannodepartners.com</span></div>
                <div className="flex items-center gap-4 text-gray-300"><MessageCircle className="w-6 h-6 text-wm-yellow" /><span>Response within 24 hours</span></div>
                <div className="flex items-center gap-4 text-green-400"><RefreshCw className="w-6 h-6" /><span>Buyback guarantee included</span></div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-green-400" /></div>
                  <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-400">Our enterprise team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-gray-300 mb-2">First Name</label><input type="text" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-wm-yellow focus:outline-none" placeholder="John" /></div>
                    <div><label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label><input type="text" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-wm-yellow focus:outline-none" placeholder="Doe" /></div>
                  </div>
                  <div><label className="block text-sm font-medium text-gray-300 mb-2">Email</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-wm-yellow focus:outline-none" placeholder="john@example.com" /></div>
                  <div><label className="block text-sm font-medium text-gray-300 mb-2">Phone (Optional)</label><input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-wm-yellow focus:outline-none" placeholder="+1 (555) 123-4567" /></div>
                  <div><label className="block text-sm font-medium text-gray-300 mb-2">Investment Interest</label>
                    <select value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-wm-yellow focus:outline-none">
                      <option value="general">General Inquiry</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k+">$250,000+</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full btn-primary bg-wm-yellow text-black font-bold py-4 rounded-lg hover:bg-wm-yellow-hover transition-colors">Request Consultation</button>
                  <p className="text-xs text-gray-500 text-center">By submitting, you agree to be contacted by our enterprise team.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 bg-wm-yellow rounded-lg flex items-center justify-center"><Radio className="w-6 h-6 text-black" /></div><span className="text-xl font-bold text-white">Meridian Node Partners</span></div>
              <p className="text-gray-400 mb-4 max-w-md">The enterprise AirNode partner with exclusive buyback guarantee. Invest in decentralized connectivity with true exit liquidity.</p>
              <p className="text-xs text-gray-500">Meridian Node Partners is an independent business and licensed enterprise reseller. We are not World Mobile Ltd or any of its subsidiaries. All trademarks belong to their respective owners.</p>
            </div>
            <div><h4 className="font-semibold text-white mb-4">Quick Links</h4><ul className="space-y-2 text-gray-400"><li><a href="#why-meridian" className="hover:text-wm-yellow transition-colors">Why Meridian</a></li><li><a href="#products" className="hover:text-wm-yellow transition-colors">Products</a></li><li><a href="#faq" className="hover:text-wm-yellow transition-colors">FAQ</a></li><li><a href="#contact" className="hover:text-wm-yellow transition-colors">Contact</a></li></ul></div>
            <div><h4 className="font-semibold text-white mb-4">Resources</h4><ul className="space-y-2 text-gray-400"><li><a href="https://worldmobile.io" target="_blank" rel="noopener noreferrer" className="hover:text-wm-yellow transition-colors">World Mobile Official ↗</a></li><li><a href="https://worldmobile.io/help" target="_blank" rel="noopener noreferrer" className="hover:text-wm-yellow transition-colors">WM Support ↗</a></li></ul></div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Meridian Node Partners. All rights reserved.</p>
            <p className="mt-2">Licensed Enterprise Reseller • Buyback Guarantee Available • Not affiliated with World Mobile Ltd</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


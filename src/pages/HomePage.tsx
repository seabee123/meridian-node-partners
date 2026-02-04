import { useState } from 'react';
import {
  Globe, Zap, Radio, Building, ChevronRight, Check,
  DollarSign, Shield, Users, Award, Clock,
  ChevronDown, ChevronUp, Star, Mail, MessageCircle, CheckCircle, Menu
} from 'lucide-react';

// Product data - Meridian Node Partners inventory (Spark, Portal, Titan only)
const products = [
  {
    id: 'spark',
    name: 'Spark',
    description: 'Connectivity for residential and business premises. Private and public access point.',
    price: '$62.99',
    priceLabel: 'From',
    icon: Zap,
    featured: false,
    inStock: true,
    link: '/products/spark'
  },
  {
    id: 'portal-180',
    name: 'Portal 180',
    description: 'Extended range connectivity with 180-degree coverage for larger areas.',
    price: '$299',
    priceLabel: 'From',
    icon: Radio,
    featured: false,
    inStock: true,
    link: '/products/portal-180'
  },
  {
    id: 'portal-360',
    name: 'Portal 360',
    description: 'Full 360-degree coverage for maximum connectivity in open spaces.',
    price: '$499',
    priceLabel: 'From',
    icon: Globe,
    featured: true,
    inStock: true,
    link: '/products/portal-360'
  },
  {
    id: 'titan',
    name: 'Titan',
    description: 'Enterprise-grade AirNode for large-scale deployments and maximum coverage.',
    price: '$2,499',
    priceLabel: 'From',
    icon: Building,
    featured: true,
    inStock: false,
    link: '/products/titan'
  }
];

const testimonials = [
  { name: 'Marcus T.', role: 'Spark AirNode Operator', text: 'Meridian Node Partners made it easy to get started. Quick delivery and great support throughout the setup process.' },
  { name: 'Sarah K.', role: 'Portal 360 Operator', text: 'As a community reseller, they really understand the needs of node operators. Highly recommend for anyone looking to join the network.' },
  { name: 'David R.', role: 'Multi-Node Operator', text: 'Purchased multiple units from Meridian. Professional service and authentic hardware every time. Great partner for scaling up.' }
];

export function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', interest: 'general' });

  const handleFormSubmit = (e) => { e.preventDefault(); setFormSubmitted(true); };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-wm-yellow rounded-lg flex items-center justify-center"><Radio className="w-6 h-6 text-black" /></div>
              <div><span className="text-white font-bold text-lg">Meridian Node Partners</span><span className="hidden sm:inline text-xs text-gray-400 ml-2">Licensed Reseller</span></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-gray-300 hover:text-wm-yellow transition-colors">Products</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-wm-yellow transition-colors">How It Works</a>
              <a href="#faq" className="text-gray-300 hover:text-wm-yellow transition-colors">FAQ</a>
              <a href="#contact" className="bg-wm-yellow text-black px-6 py-2 rounded-lg font-semibold hover:bg-wm-yellow-hover transition-colors">Contact Us</a>
            </div>
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><Menu className="w-6 h-6" /></button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <a href="#products" className="block text-gray-300 hover:text-wm-yellow">Products</a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-wm-yellow">How It Works</a>
              <a href="#faq" className="block text-gray-300 hover:text-wm-yellow">FAQ</a>
              <a href="#contact" className="block bg-wm-yellow text-black px-6 py-2 rounded-lg font-semibold text-center">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-16 gradient-hero min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-wm-yellow/10 border border-wm-yellow/30 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-wm-yellow" /><span className="text-wm-yellow text-sm font-medium">Licensed Community Reseller</span>
              </div>
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Connectivity. <span className="text-wm-yellow">Redefined.</span></h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">Help deploy AirNodes and earn rewards for expanding decentralized connectivity. Build the future of telecommunications with World Mobile.</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#products" className="btn-primary bg-wm-yellow text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-wm-yellow-hover transition-all inline-flex items-center justify-center gap-2">View AirNodes<ChevronRight className="w-5 h-5" /></a>
                <a href="#how-it-works" className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-wm-yellow hover:text-wm-yellow transition-all inline-flex items-center justify-center">Learn More</a>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2"><Check className="w-5 h-5 text-green-400" /><span>Authentic Hardware</span></div>
                <div className="flex items-center gap-2"><Check className="w-5 h-5 text-green-400" /><span>Full Warranty</span></div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center"><div className="w-64 h-64 bg-wm-yellow/20 rounded-full animate-pulse-slow"></div></div>
                <div className="absolute inset-0 flex items-center justify-center"><Radio className="w-32 h-32 text-wm-yellow" /></div>
                <div className="absolute bottom-8 left-8 right-8 bg-black/50 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div><p className="text-gray-400 text-sm">Featured</p><p className="text-white font-bold text-xl">Portal 360 AirNode</p></div>
                    <div className="text-right"><p className="text-gray-400 text-sm">From</p><p className="text-wm-yellow font-bold text-xl">$499</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-6 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-wm-yellow" /><span>Licensed Reseller</span></div>
            <div className="flex items-center gap-2"><Award className="w-5 h-5 text-wm-yellow" /><span>Authentic Hardware</span></div>
            <div className="flex items-center gap-2"><Users className="w-5 h-5 text-wm-yellow" /><span>Community Partner</span></div>
            <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-wm-yellow" /><span>Fast Shipping</span></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reclaim Power. Build the Network.</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Join the first private, user-owned mobile network that pays you back. We're your gateway to authentic World Mobile hardware.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{icon: Shield, title: 'Authentic Hardware', description: '100% genuine World Mobile AirNodes with full manufacturer warranty'},
              {icon: DollarSign, title: 'Earn Rewards', description: 'Deploy your AirNode and earn as users connect to the decentralized network'},
              {icon: Users, title: 'People-Powered', description: 'Be part of a community building fairer telecommunications infrastructure'},
              {icon: Clock, title: 'Start Fast', description: 'Quick delivery and setup support to get you earning sooner'}
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-wm-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-4"><feature.icon className="w-8 h-8 text-wm-yellow" /></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-gray-100 rounded-2xl text-center">
            <p className="text-gray-600"><strong>Transparency Note:</strong> Meridian Node Partners is an independent community reseller. We are not World Mobile Ltd or any of its subsidiaries. All AirNodes sold are authentic World Mobile products with full manufacturer warranty.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Getting your AirNode from Meridian Node Partners is simple</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[{step: '1', title: 'Choose Your Node', description: 'Browse our selection of authentic World Mobile AirNodes and select the model that fits your needs.', icon: Radio},
              {step: '2', title: 'Contact Us', description: "Reach out through our form or email. We'll confirm availability and provide payment details.", icon: MessageCircle},
              {step: '3', title: 'Start Earning', description: 'Receive your AirNode with full warranty, set it up, and begin earning rewards on the World Mobile network.', icon: Globe}
            ].map((item, index) => (
              <div key={index} className="relative text-center p-8 bg-white rounded-2xl shadow-sm">
                <div className="w-16 h-16 bg-wm-yellow rounded-full flex items-center justify-center mx-auto mb-6"><item.icon className="w-8 h-8 text-black" /></div>
                <div className="absolute top-6 right-6 w-8 h-8 bg-black text-wm-yellow rounded-full flex items-center justify-center text-sm font-bold">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your AirNode</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Deploy an AirNode, serve your community, and get rewarded for building a fairer network</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="product-card bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-wm-yellow transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-wm-yellow/10 rounded-xl flex items-center justify-center"><product.icon className="w-6 h-6 text-wm-yellow" /></div>
                  {product.inStock ? (<span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">In Stock</span>) : (<span className="px-3 py-1 bg-gray-600/50 text-gray-400 text-xs font-medium rounded-full">Coming Soon</span>)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-wm-yellow font-bold">{product.price}</span>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-gray-400 hover:text-wm-yellow transition-colors">Inquire →</button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">Prices may vary based on availability. Contact us for current pricing.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from AirNode operators</p>
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

      <section id="faq" className="py-20 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2></div>
          <div className="space-y-4">
            {[{q: 'Are you official World Mobile?', a: 'No, Meridian Node Partners is a licensed community reseller. We are an independent business that sells authentic World Mobile AirNodes with full manufacturer warranty.'},
              {q: 'Are the AirNodes authentic?', a: 'Yes, all our AirNodes are 100% authentic World Mobile hardware with original manufacturer warranty.'},
              {q: 'Why buy from a reseller?', a: 'We offer personalized service, local availability, faster shipping, and setup guidance.'},
              {q: 'What payment methods do you accept?', a: 'Bank transfers, credit cards, and select cryptocurrency payments.'},
              {q: 'Do you ship internationally?', a: 'Yes, we ship to most countries. Contact us for a quote.'},
              {q: 'What warranty do I get?', a: 'Full World Mobile manufacturer warranty plus our customer support.'}
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  {openFaq === index ? (<ChevronUp className="w-5 h-5 text-gray-500" />) : (<ChevronDown className="w-5 h-5 text-gray-500" />)}
                </button>
                {openFaq === index && (<div className="px-6 pb-4 text-gray-600">{faq.a}</div>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-wm-dark-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Build the Future of <span className="text-wm-yellow">Connectivity</span>
            </h2>
            <p className="text-xl text-gray-400">
              Ready to help expand the decentralized network? Get in touch today.
            </p>
          </div>
          
          {submitStatus === 'success' ? (
            <div className="bg-green-900/50 border border-green-500 rounded-lg p-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-gray-300">We've received your inquiry and will be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-wm-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-wm-yellow focus:border-transparent transition-all duration-200"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-wm-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-wm-yellow focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-wm-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-wm-yellow focus:border-transparent transition-all duration-200"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-300 mb-2">
                    Product Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-wm-dark border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-wm-yellow focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a product</option>
                    <option value="spark">Spark - $62.99</option>
                    <option value="portal-180">Portal 180 - $299</option>
                    <option value="portal-360">Portal 360 - $499</option>
                    <option value="titan">Titan - $2,499</option>
                    <option value="multiple">Multiple Units</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-wm-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-wm-yellow focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              
              {submitStatus === 'error' && (
                <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 text-red-300">
                  There was an error submitting your inquiry. Please try again or contact us directly.
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-wm-yellow text-wm-dark font-bold rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-wm-yellow focus:ring-offset-2 focus:ring-offset-wm-dark transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-wm-dark border-t-transparent"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Submit Inquiry
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-wm-dark border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-wm-yellow rounded-lg flex items-center justify-center">
                  <Wifi className="h-6 w-6 text-wm-dark" />
                </div>
                <span className="text-xl font-bold text-white">Meridian Node Partners</span>
              </div>
              <p className="text-gray-500 text-sm">Licensed Community Reseller | Building Tomorrow's Network</p>
            </div>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <a href="#products" className="hover:text-wm-yellow transition-colors">Products</a>
              <a href="#contact" className="hover:text-wm-yellow transition-colors">Contact</a>
              <a href="https://worldmobile.io" target="_blank" rel="noopener noreferrer" className="hover:text-wm-yellow transition-colors">World Mobile</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Meridian Node Partners. All rights reserved.</p>
            <p className="mt-2">Not affiliated with World Mobile Group Limited. AirNode® is a trademark of World Mobile.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

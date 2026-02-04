import { useState } from 'react';import {
  ShoppingCart, Globe, Zap, Link as LinkIcon, Radio, Triangle,
  Building, ChevronRight, Plus, Check, X, Smartphone, Wifi,
  DollarSign, Landmark, Shield, Users, Award, Clock
} from 'lucide-react';

// Product data - Meridian Node Partners inventory
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
    id: 'link',
    name: 'Link',
    description: 'Endpoint connectivity at customer premises. Reliable, high-speed internet access.',
    price: '$749',
    priceLabel: 'Per unit',
    icon: LinkIcon,
    featured: true,
    inStock: true,
    link: '/products/link'
  },
  {
    id: 'portal180',
    name: 'Portal 180',
    description: 'Robust capacity and extended coverage. Connect neighborhoods or businesses.',
    price: '$9,000',
    priceLabel: 'Per unit',
    icon: Radio,
    featured: false,
    inStock: true,
    link: '/products/portal-180'
  },
  {
    id: 'portal360',
    name: 'Portal 360',
    description: 'Two Portal 180s combined. Enhanced capacity and wider network distribution.',
    price: '$18,000',
    priceLabel: 'Per unit',
    icon: Zap,
    featured: false,
    inStock: false,
    link: '/products/portal-360'
  },
  {
    id: 'apex90',
    name: 'Apex 90',
    description: 'High-density deployments. Supports up to 250 Link AirNodes.',
    price: '$15,999',
    priceLabel: 'Per unit',
    icon: Triangle,
    featured: false,
    inStock: true,
    link: '/products/apex-90'
  },
  {
    id: 'apex180',
    name: 'Apex 180',
    description: 'Two Apex 90s combined. Up to 500 Link AirNodes supported.',
    price: '$31,998',
    priceLabel: 'Per unit',
    icon: Triangle,
    featured: false,
    inStock: false,
    link: '/products/apex-180'
  },
  {
    id: 'titan',
    name: 'Titan',
    description: 'The backbone. High-capacity, long-range connectivity across the network.',
    price: '$100,000',
    priceLabel: 'Per unit',
    icon: Building,
    featured: false,
    inStock: false,
    link: '/products/titan'
  }
];

const faqs = [
  {
    q: 'Who is Meridian Node Partners?',
    a: 'We are a licensed community reseller of World Mobile AirNodes. We\'re not World Mobile directly — we\'re passionate community members who help connect buyers with authentic AirNode hardware. Think of us as your trusted local partner in the World Mobile ecosystem.'
  },
  {
    q: 'Are your AirNodes authentic?',
    a: 'Yes, 100%. We only sell genuine World Mobile AirNodes. Every unit comes with full manufacturer warranty and is registered on the official World Mobile network. We are a verified reseller in the World Mobile community.'
  },
  {
    q: 'Why buy from Meridian Node Partners?',
    a: 'We often have AirNodes in stock when official drops sell out. Plus, we offer personalized support, faster shipping in many regions, and guidance from experienced operators who run their own nodes.'
  },
  {
    q: 'Do I need any technical knowledge?',
    a: 'None. World Mobile handles deployment and all technical operations. You can operate an AirNode remotely from anywhere. Buy it, own it, earn from it. We also provide setup guidance if needed.'
  },
  {
    q: 'How does revenue generation work?',
    a: 'Your AirNode is physical hardware on the World Mobile network. When subscribers use it for calls, texts, and data, that usage generates revenue. Your share is paid in US dollars, trackable in your World Mobile operator dashboard.'
  },
  {
    q: 'What exactly am I buying?',
    a: 'A real-world asset — physical network hardware. You pay in dollars and receive telecom equipment that connects to the World Mobile network. You own it outright, just like buying any other hardware.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept credit/debit cards, bank transfers, and cryptocurrency. All transactions are secure and you\'ll receive order confirmation immediately.'
  },
  {
    q: 'What about shipping and delivery?',
    a: 'We ship worldwide. Delivery times vary by location and product availability. You\'ll receive tracking information once your order ships. Contact us for estimated delivery to your area.'
  }
];

const testimonials = [
  {
    name: 'Marcus T.',
    role: 'Link AirNode Operator',
    duration: 'Customer for 4 months',
    quote: 'Bought my first Link through Meridian when the official drop sold out. Great communication and the node was authentic. Now I\'m a repeat customer.'
  },
  {
    name: 'Elena D.',
    role: 'Portal Operator',
    duration: 'Customer for 6 months',
    quote: 'The team at Meridian really knows their stuff. They helped me understand which AirNode was right for my situation. Went from 1 to 8 nodes with their help.'
  },
  {
    name: 'Robert H.',
    role: 'Multi-Node Operator',
    duration: 'Customer for 1 year',
    quote: 'As someone building a serious AirNode portfolio, having a reliable reseller like Meridian is invaluable. Fast, trustworthy, and always responsive.'
  }
];

const whyChooseUs = [
  { icon: Shield, title: 'Verified Reseller', desc: 'Licensed community partner with authentic hardware only' },
  { icon: Clock, title: 'In-Stock Inventory', desc: 'Skip the wait — we often have nodes ready to ship' },
  { icon: Users, title: 'Community Support', desc: 'Personal guidance from experienced operators' },
  { icon: Award, title: 'Trusted Reputation', desc: 'Hundreds of satisfied customers in the WM community' }
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', interest: '' });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }
    // TODO: Integrate with your backend/Supabase
    setFormSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-wm-yellow rounded-lg flex items-center justify-center">
                <Radio className="text-black" size={18} />
              </div>
              <span className="text-white font-bold text-lg">Meridian Node Partners</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('why-us')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Why Us</button>
              <button onClick={() => scrollToSection('airnodes')} className="text-wm-yellow text-sm font-medium">AirNodes</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="bg-wm-yellow text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-black pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Community Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-500/20">
                <Shield size={16} />
                Licensed Community Reseller
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tight mb-6">
                Your Trusted Source for<br/>
                <span className="text-wm-yellow">World Mobile AirNodes</span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 max-w-lg">
                Skip the wait. Meridian Node Partners is your licensed community reseller with AirNodes in stock. Authentic hardware, personal support, and faster delivery for the World Mobile ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button onClick={() => scrollToSection('airnodes')} className="bg-wm-yellow text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
                  Browse AirNodes <ChevronRight size={18} />
                </button>
                <button onClick={() => scrollToSection('contact')} className="border border-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors text-center">
                  Contact Us
                </button>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-400">
                <span className="flex items-center gap-1"><Check size={14} className="text-green-400" /> Authentic Hardware</span>
                <span className="flex items-center gap-1"><Check size={14} className="text-green-400" /> In-Stock Inventory</span>
                <span className="flex items-center gap-1"><Check size={14} className="text-green-400" /> Community Support</span>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-semibold">AirNodes In Stock</span>
              </div>

              <h3 className="text-white text-xl font-semibold mb-2">Ready to Ship Today</h3>
              <p className="text-gray-400 text-sm mb-6">Don't wait for the next drop. We have authentic World Mobile AirNodes available now.</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { value: '500+', label: 'Nodes Sold' },
                  { value: '98%', label: 'Happy Customers' },
                  { value: '24/7', label: 'Support' },
                  { value: 'Global', label: 'Shipping' }
                ].map((item, i) => (
                  <div key={i} className="bg-black rounded-xl p-3 text-center">
                    <div className="text-xl font-bold text-wm-yellow">{item.value}</div>
                    <div className="text-xs text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>

              <button onClick={() => scrollToSection('airnodes')} className="w-full bg-wm-yellow text-black py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors mb-4">
                Shop Now
              </button>

              <p className="text-xs text-gray-500 text-center">
                We are a community reseller, not World Mobile directly. All AirNodes are authentic and fully supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-sm text-gray-500">Verified Reseller of</div>
              <div className="text-lg font-bold text-gray-900">World Mobile AirNodes</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-300"></div>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { value: 'Authentic', label: 'Hardware Only' },
                { value: 'Full', label: 'Warranty Included' },
                { value: 'Secure', label: 'Payments' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-wm-yellow/20 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">Why Meridian Node Partners</span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Your Community Partner for AirNodes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're World Mobile enthusiasts just like you. As a licensed community reseller, we bridge the gap between limited drops and eager operators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-wm-yellow/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-gray-800" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="text-blue-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Community Reseller Transparency</h4>
                <p className="text-sm text-blue-800">
                  Meridian Node Partners is an independent, licensed community reseller — we are <strong>not</strong> World Mobile directly.
                  All AirNodes we sell are 100% authentic, come with full manufacturer warranty, and are registered on the official World Mobile network.
                  We exist to serve the community by providing availability when official channels sell out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-gray-800 text-gray-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Buy. Connect. <span className="text-wm-yellow">Earn.</span>
            </h2>
            <p className="text-gray-400">Purchase an authentic AirNode from us and start earning on the World Mobile network.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', icon: ShoppingCart, title: 'Purchase from Meridian', desc: 'Browse our in-stock inventory and purchase your AirNode. Secure checkout with multiple payment options. Fast shipping worldwide.' },
              { num: '02', icon: Globe, title: 'Activate on World Mobile', desc: 'Your AirNode goes live on the official World Mobile network. Subscribers connect through it for calls, texts, and mobile data.' },
              { num: '03', icon: DollarSign, title: 'Generate Revenue', desc: 'Revenue is generated based on subscriber usage of your AirNode. Track earnings in your World Mobile operator dashboard.' }
            ].map((step, i) => (
              <div key={i} className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <div className="text-wm-yellow text-sm font-bold mb-4">{step.num}</div>
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="airnodes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">Our Inventory</span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Authentic AirNodes In Stock
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All AirNodes are genuine World Mobile hardware with full warranty. Stock varies — contact us for current availability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className={`rounded-2xl p-6 border ${product.featured ? 'bg-wm-yellow text-black border-wm-yellow' : 'bg-white border-gray-200'}`}>
                {/* Stock Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${product.featured ? 'bg-black/10' : 'bg-gray-100'}`}>
                    <product.icon className={product.featured ? 'text-black' : 'text-gray-600'} size={22} />
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    product.inStock
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Sold Out'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className={`text-sm mb-4 ${product.featured ? 'text-gray-700' : 'text-gray-500'}`}>{product.description}</p>
                <div className="text-2xl font-bold mb-1">{product.price}</div>
                <div className={`text-sm mb-4 ${product.featured ? 'text-gray-600' : 'text-gray-400'}`}>{product.priceLabel}</div>
                <button
                  onClick={() => scrollToSection('contact')}
                  disabled={!product.inStock}
                  className={`w-full text-center py-2 px-4 rounded-full font-semibold transition-colors ${
                    product.featured
                      ? 'bg-black text-white hover:bg-gray-800'
                      : product.inStock
                        ? 'bg-wm-yellow text-black hover:bg-yellow-400'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Inquire Now' : 'Join Waitlist'}
                </button>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(4).map((product) => (
              <div key={product.id} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                    <product.icon className="text-gray-600" size={22} />
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    product.inStock
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Sold Out'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                <div className="text-2xl font-bold mb-1">{product.price}</div>
                <div className="text-sm text-gray-400 mb-4">{product.priceLabel}</div>
                <button
                  onClick={() => scrollToSection('contact')}
                  disabled={!product.inStock}
                  className={`w-full text-center py-2 px-4 rounded-full font-semibold transition-colors ${
                    product.inStock
                      ? 'bg-wm-yellow text-black hover:bg-yellow-400'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Inquire Now' : 'Join Waitlist'}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Inventory changes frequently. Contact us for real-time availability and pricing.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">Customer Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">Trusted by the Community</h2>
            <p className="text-gray-600">Real feedback from World Mobile operators who purchased through Meridian Node Partners.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="text-wm-yellow text-lg mb-4">★★★★★</div>
                <blockquote className="text-gray-700 mb-4">"{t.quote}"</blockquote>
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role} · {t.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">Common Questions</h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {faqs.map((faq, i) => (
              <div key={i} className={i < faqs.length - 1 ? 'border-b border-gray-200' : ''}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-5 px-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <Plus className={`flex-shrink-0 transition-transform text-gray-400 ${openFaq === i ? 'rotate-45' : ''}`} size={20} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block bg-gray-800 text-gray-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
                Ready to Purchase?
              </h2>
              <p className="text-gray-400 mb-8">
                Contact us to check availability, get a quote, or ask any questions. We typically respond within a few hours.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Real-time inventory updates',
                  'Personalized recommendations',
                  'Bulk order discounts available',
                  'Worldwide shipping options'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-wm-yellow rounded flex items-center justify-center">
                      <Check className="text-black" size={14} />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Note:</strong> We are a community reseller. For official World Mobile support or network issues, please visit{' '}
                  <a href="https://worldmobile.io" className="text-wm-yellow hover:underline" target="_blank" rel="noopener noreferrer">worldmobile.io</a>
                </p>
              </div>
            </div>

            <div>
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>

                {!formSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First name *"
                        className="bg-black border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-wm-yellow focus:outline-none"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Last name *"
                        className="bg-black border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-wm-yellow focus:outline-none"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        required
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email address *"
                      className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-wm-yellow focus:outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone (optional)"
                      className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-wm-yellow focus:outline-none"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    <select
                      className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-gray-400 focus:border-wm-yellow focus:outline-none"
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    >
                      <option value="">Which AirNode are you interested in?</option>
                      <option value="spark">Spark</option>
                      <option value="link">Link</option>
                      <option value="portal">Portal (180 or 360)</option>
                      <option value="apex">Apex (90 or 180)</option>
                      <option value="titan">Titan</option>
                      <option value="multiple">Multiple / Bulk Order</option>
                      <option value="other">Other / Just Browsing</option>
                    </select>
                    <button type="submit" className="w-full bg-wm-yellow text-black py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                      Send Message →
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="text-white" size={32} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-gray-400">We'll get back to you shortly. Check your email for confirmation.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-wm-yellow">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
            Don't Wait for the Next Drop
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Meridian Node Partners has AirNodes in stock now. Authentic hardware, community support, and fast shipping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('airnodes')} className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2">
              Browse AirNodes <ChevronRight size={18} />
            </button>
            <button onClick={() => scrollToSection('contact')} className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-colors text-center">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-wm-yellow rounded-lg flex items-center justify-center">
                  <Radio className="text-black" size={18} />
                </div>
                <span className="font-bold text-lg">Meridian Node Partners</span>
              </div>
              <p className="text-gray-400 text-sm mb-4 max-w-md">
                Licensed community reseller of World Mobile AirNodes. We are not World Mobile directly — we're passionate community members helping connect buyers with authentic hardware.
              </p>
              <p className="text-xs text-gray-500">
                World Mobile and AirNode are trademarks of World Mobile Group Limited. Meridian Node Partners is an independent reseller.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('airnodes')} className="block text-gray-400 hover:text-white text-sm transition-colors">AirNodes</button>
                <button onClick={() => scrollToSection('why-us')} className="block text-gray-400 hover:text-white text-sm transition-colors">Why Us</button>
                <button onClick={() => scrollToSection('faq')} className="block text-gray-400 hover:text-white text-sm transition-colors">FAQ</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white text-sm transition-colors">Contact</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Official Resources</h4>
              <div className="space-y-2">
                <a href="https://worldmobile.io" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white text-sm transition-colors">World Mobile</a>
                <a href="https://airnode.worldmobile.net/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white text-sm transition-colors">Operator Dashboard</a>
                <a href="https://worldmobile.io/help" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white text-sm transition-colors">WM Help Center</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2024 Meridian Node Partners. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useState } from 'react';
import {
  Globe, Zap, Radio, Building, ChevronRight, Check,
  Shield, Users, Award, Clock, RefreshCw, Headphones, TrendingUp,
  ChevronDown, ChevronUp, Star, CheckCircle, Menu,
  ShoppingCart, Plus, Minus, AlertCircle, ExternalLink, Info
} from 'lucide-react';

// Product data - Meridian Node Partners inventory (Enterprise pricing)
const products = [
  {
    id: 'spark',
    name: 'Spark',
    description: 'Connectivity for residential and business premises. Private and public access point. Ideal for bulk deployments. Expected returns: ~$1.70/month per unit.',
    price: 80,
    minQuantity: 225, // 225 × $80 = $18,000 minimum
    icon: Zap,
    featured: false,
    inStock: true
  },
  {
    id: 'portal-180',
    name: 'Portal 180',
    description: 'Extended range connectivity with 180-degree coverage. Perfect for targeted area deployments. Expected returns: ~$350/month per unit.',
    price: 9000,
    minQuantity: 2, // 2 × $9,000 = $18,000 minimum
    icon: Radio,
    featured: false,
    inStock: false
  },
  {
    id: 'portal-360',
    name: 'Portal 360',
    description: 'Full 360-degree coverage for maximum connectivity in open spaces. Our most popular enterprise choice. Expected returns: ~$350/month per unit.',
    price: 18000,
    minQuantity: 1, // 1 × $18,000 = $18,000 minimum
    icon: Globe,
    featured: true,
    inStock: false
  },
  {
    id: 'titan',
    name: 'Titan',
    description: 'Enterprise-grade AirNode for large-scale deployments and maximum coverage. Ultimate network expansion. Expected returns: ~$800-2,200/month per unit.',
    price: 105000,
    minQuantity: 1, // 1 × $105,000 = $105,000 minimum
    icon: Building,
    featured: true,
    inStock: false
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
    text: "Invested \$150k through Meridian. Professional service, priority support, and knowing I can sell back anytime - that's real partnership."
  }
];

export function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Order state
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'spark': 0,
    'portal-180': 0,
    'portal-360': 0,
    'titan': 0
  });

  const [orderForm, setOrderForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: ''
  });

  // Calculate order total
  const orderTotal = products.reduce((total, product) => {
    return total + (quantities[product.id] * product.price);
  }, 0);

  // Check if order meets minimum
  const MIN_ORDER = 18000;
  const meetsMinimum = orderTotal >= MIN_ORDER;
  const hasItems = Object.values(quantities).some(q => q > 0);

  // Update quantity
  const updateQuantity = (productId: string, delta: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setQuantities(prev => {
      const current = prev[productId];
      let newQty = current + delta;

      // If increasing from 0, jump to minimum
      if (current === 0 && delta > 0) {
        newQty = product.minQuantity;
      }
      // If decreasing below minimum, go to 0
      else if (newQty < product.minQuantity && newQty > 0) {
        newQty = 0;
      }
      // Don't go below 0
      else if (newQty < 0) {
        newQty = 0;
      }

      return { ...prev, [productId]: newQty };
    });
  };

  // Set specific quantity
  const setQuantity = (productId: string, value: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (value === 0 || value >= product.minQuantity) {
      setQuantities(prev => ({ ...prev, [productId]: value }));
    }
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!meetsMinimum || !hasItems) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Build order items
      const items = products
        .filter(p => quantities[p.id] > 0)
        .map(p => ({
          name: p.name,
          quantity: quantities[p.id],
          price: p.price,
          total: quantities[p.id] * p.price
        }));

      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...orderForm,
          items,
          total: orderTotal
        })
      });

      if (!response.ok) throw new Error('Failed to send order');

      setSubmitStatus('success');
      setOrderSubmitted(true);
      // Reset form
      setQuantities({ 'spark': 0, 'portal-180': 0, 'portal-360': 0, 'titan': 0 });
      setOrderForm({ firstName: '', lastName: '', email: '', phone: '', company: '' });
    } catch (error) {
      console.error('Order submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
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

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#why-meridian" className="text-gray-300 hover:text-wm-yellow transition-colors">Why Meridian</a>
              <a href="#order" className="text-gray-300 hover:text-wm-yellow transition-colors">Order</a>
              <a href="#faq" className="text-gray-300 hover:text-wm-yellow transition-colors">FAQ</a>
              <a href="#order" className="bg-wm-yellow text-black px-6 py-2 rounded-lg font-semibold hover:bg-wm-yellow-hover transition-colors flex items-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Order Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <a href="#why-meridian" className="block text-gray-300 hover:text-wm-yellow">Why Meridian</a>
              <a href="#order" className="block text-gray-300 hover:text-wm-yellow">Order</a>
              <a href="#faq" className="block text-gray-300 hover:text-wm-yellow">FAQ</a>
              <a href="#order" className="block bg-wm-yellow text-black px-6 py-2 rounded-lg font-semibold text-center">
                Order Now
              </a>
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
                Invest with{' '}
                <span className="text-wm-yellow">Confidence.</span>
              </h1>

              <p className="text-xl text-gray-300 mb-4 max-w-xl">
                The only AirNode partner that buys back your nodes at any time.
                Enterprise-grade hardware with unmatched exit liquidity.
              </p>

              <p className="text-lg text-wm-yellow font-semibold mb-8">
                Minimum order: $18,000
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#order"
                  className="btn-primary bg-wm-yellow text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-wm-yellow-hover transition-all inline-flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Order Now
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a
                  href="#why-meridian"
                  className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-wm-yellow hover:text-wm-yellow transition-all inline-flex items-center justify-center"
                >
                  Why Meridian?
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Buyback Anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Priority Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Full Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-wm-yellow/20 rounded-full animate-pulse-slow"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Radio className="w-32 h-32 text-wm-yellow" />
                </div>
                <div className="absolute bottom-8 left-8 right-8 bg-black/50 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Most Popular</p>
                      <p className="text-white font-bold text-xl">Portal 360 AirNode</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">Per Unit</p>
                      <p className="text-wm-yellow font-bold text-xl">$18,000</p>
                    </div>
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
            <div className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Buyback Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-wm-yellow" />
              <span>Licensed Enterprise Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-wm-yellow" />
              <span>Authentic Hardware</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-5 h-5 text-wm-yellow" />
              <span>Priority Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Meridian - USPs */}
      <section id="why-meridian" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Meridian Over the Official Store?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer what the official World Mobile store and Alliance partners can't -
              true investment security with our exclusive buyback guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: RefreshCw,
                title: 'Buyback Guarantee',
                description: 'We buy back your nodes at any time. No questions asked. True exit liquidity that no other partner offers.',
                highlight: true
              },
              {
                icon: TrendingUp,
                title: 'Investment Security',
                description: "Your capital is never locked. Change your mind? We'll take the nodes back. It's that simple."
              },
              {
                icon: Headphones,
                title: 'Dedicated Account Manager',
                description: 'Enterprise clients get a dedicated point of contact for priority support and deployment assistance.'
              },
              {
                icon: Clock,
                title: 'Faster Deployment',
                description: 'Skip the queue. Our enterprise clients get priority fulfillment and expedited shipping worldwide.'
              },
              {
                icon: Shield,
                title: 'Full Manufacturer Warranty',
                description: '100% authentic World Mobile hardware with complete warranty coverage and documentation.'
              },
              {
                icon: Users,
                title: 'Bulk Pricing Advantage',
                description: 'Enterprise-scale pricing that makes large deployments economically viable. Better margins for serious investors.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl ${feature.highlight ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50'}`}
              >
                <div className={`w-16 h-16 ${feature.highlight ? 'bg-green-100' : 'bg-wm-yellow/10'} rounded-2xl flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-8 h-8 ${feature.highlight ? 'text-green-600' : 'text-wm-yellow'}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                {feature.highlight && (
                  <span className="inline-block mt-4 px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                    Meridian Exclusive
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Comparison Box */}
          <div className="bg-gray-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Meridian vs. Other Partners</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-800 rounded-xl">
                <h4 className="font-bold text-lg mb-4">Other Partners</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>❌ No buyback option</li>
                  <li>❌ Variable support</li>
                  <li>❌ Limited inventory</li>
                  <li>✓ Authentic hardware</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-green-900/50 rounded-xl border-2 border-green-500">
                <h4 className="font-bold text-lg mb-4 text-green-400">Meridian Partners</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>✓ <span className="text-green-400 font-medium">Buyback anytime</span></li>
                  <li>✓ <span className="text-green-400 font-medium">Dedicated support</span></li>
                  <li>✓ <span className="text-green-400 font-medium">Enterprise pricing</span></li>
                  <li>✓ Authentic hardware</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER SECTION */}
      <section id="order" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Order Your AirNodes
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Select your nodes and quantities below. All orders include buyback eligibility.
            </p>
          </div>

          <div className="bg-wm-yellow/10 border border-wm-yellow/30 rounded-xl p-4 mb-4 text-center">
            <p className="text-wm-yellow font-semibold">
              💰 Minimum Order: $18,000 | All purchases include buyback eligibility
            </p>
          </div>

          {/* Account Setup Info Box */}
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4 mb-8">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-blue-300 font-semibold mb-2">Important: World Mobile Account Required</p>
                <p className="text-blue-200/80 text-sm mb-2">
                  Before placing your order, you must have a World Mobile AirNode account. Your nodes will be registered to this account.
                </p>
                <div className="text-sm text-blue-200/70">
                  <p className="font-medium mb-1">How to set up your account:</p>
                  <ol className="list-decimal list-inside space-y-1 ml-2">
                    <li>Visit <a href="https://airnode.worldmobile.net/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1">airnode.worldmobile.net <ExternalLink className="w-3 h-3" /></a></li>
                    <li>Click the user account button at the top right corner</li>
                    <li>Fill in the requested information to complete your profile</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {orderSubmitted ? (
            <div className="max-w-2xl mx-auto bg-gray-800 rounded-2xl p-12 text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Order Submitted!</h3>
              <p className="text-gray-400 mb-2">Thank you for your order of {formatPrice(orderTotal)}.</p>
              <p className="text-gray-400">Our enterprise team will contact you within 24 hours to confirm details and arrange payment.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Product Selection */}
              <div className="lg:col-span-2 space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className={`bg-gray-800 rounded-2xl p-6 border transition-all ${
                      quantities[product.id] > 0 ? 'border-wm-yellow' : 'border-gray-700'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-14 h-14 bg-wm-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <product.icon className="w-7 h-7 text-wm-yellow" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-bold text-white">{product.name}</h3>
                            <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                              Buyback Eligible
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm mb-2">{product.description}</p>
                          <div className="flex items-center gap-4">
                            <span className="text-wm-yellow font-bold text-xl">{formatPrice(product.price)}</span>
                            <span className="text-gray-500 text-sm">/ unit</span>
                            <span className="text-gray-500 text-sm">• Min: {product.minQuantity} units</span>
                          </div>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="w-10 h-10 rounded-lg bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-colors"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                        <input
                          type="number"
                          value={quantities[product.id]}
                          onChange={(e) => setQuantity(product.id, parseInt(e.target.value) || 0)}
                          className="w-20 h-10 bg-gray-700 border border-gray-600 rounded-lg text-white text-center font-semibold focus:border-wm-yellow focus:outline-none"
                        />
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="w-10 h-10 rounded-lg bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-colors"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {quantities[product.id] > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                        <span className="text-gray-400">Subtotal</span>
                        <span className="text-white font-bold text-lg">
                          {formatPrice(quantities[product.id] * product.price)}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Order Summary & Form */}
              <div className="lg:col-span-1">
                <div className="bg-gray-800 rounded-2xl p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-white mb-4">Order Summary</h3>

                  {hasItems ? (
                    <div className="space-y-3 mb-4">
                      {products.map((product) => (
                        quantities[product.id] > 0 && (
                          <div key={product.id} className="flex justify-between text-sm">
                            <span className="text-gray-400">{product.name} × {quantities[product.id]}</span>
                            <span className="text-white">{formatPrice(quantities[product.id] * product.price)}</span>
                          </div>
                        )
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm mb-4">No items selected</p>
                  )}

                  <div className="border-t border-gray-700 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-white">Total</span>
                      <span className={`text-2xl font-bold ${meetsMinimum ? 'text-wm-yellow' : 'text-red-400'}`}>
                        {formatPrice(orderTotal)}
                      </span>
                    </div>
                    {!meetsMinimum && hasItems && (
                      <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>Minimum order is {formatPrice(MIN_ORDER)}</span>
                      </div>
                    )}
                  </div>

                  {/* Contact Form */}
                  <form onSubmit={handleOrderSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        value={orderForm.firstName}
                        onChange={(e) => setOrderForm({ ...orderForm, firstName: e.target.value })}
                        className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:border-wm-yellow focus:outline-none"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        value={orderForm.lastName}
                        onChange={(e) => setOrderForm({ ...orderForm, lastName: e.target.value })}
                        className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:border-wm-yellow focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={orderForm.email}
                        onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:border-wm-yellow focus:outline-none"
                      />
                      <p className="mt-2 text-xs text-amber-400 flex items-start gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                        <span>Use the same email address registered with your World Mobile AirNode account at airnode.worldmobile.net</span>
                      </p>
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone (Optional)"
                      value={orderForm.phone}
                      onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:border-wm-yellow focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Company (Optional)"
                      value={orderForm.company}
                      onChange={(e) => setOrderForm({ ...orderForm, company: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:border-wm-yellow focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={!meetsMinimum || !hasItems || isSubmitting}
                      className={`w-full py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2 ${
                        meetsMinimum && hasItems && !isSubmitting
                          ? 'bg-wm-yellow text-black hover:bg-wm-yellow-hover'
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      {isSubmitting ? 'Sending...' : 'Submit Order'}
                    </button>
                    <p className="text-xs text-gray-500 text-center">
                      Our team will contact you to confirm and arrange payment.
                    </p>

                    {submitStatus === 'success' && (
                      <div className="mt-4 p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-400 text-center">
                        Order submitted successfully! We'll contact you shortly to confirm and arrange payment.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mt-4 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-400 text-center">
                        Failed to submit order. Please try again or contact us directly.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Enterprise Investors
            </h2>
            <p className="text-xl text-gray-600">
              See why serious investors choose Meridian
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-wm-yellow text-wm-yellow" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How do I set up my World Mobile AirNode account?',
                a: "Setting up your account is easy: 1) Visit airnode.worldmobile.net 2) Click the user account button located at the top right corner of the page to log in 3) Fill in the requested information to complete your user profile. Make sure to use the same email address when placing your order with us."
              },
              {
                q: 'How does the buyback guarantee work?',
                a: "It's simple - if you ever want to exit your investment, we'll buy back your nodes. Contact us, agree on the buyback terms, and we'll handle the rest. No other partner offers this level of exit liquidity."
              },
              {
                q: 'Why is there an $18,000 minimum?',
                a: 'We focus on serious enterprise investors who want dedicated support and the security of our buyback program. This minimum ensures we can provide white-glove service to every client.'
              },
              {
                q: 'How do I pay for my order?',
                a: 'After you submit your order, our team will contact you within 24 hours to confirm details and arrange payment. We accept bank transfers, credit cards, and select cryptocurrency payments.'
              },
              {
                q: 'Why must I use my World Mobile account email?',
                a: 'Your AirNodes will be registered to your World Mobile account at airnode.worldmobile.net. Using the same email ensures seamless node registration and allows you to manage your nodes through the official World Mobile platform.'
              },
              {
                q: 'Are you official World Mobile?',
                a: 'No, Meridian Node Partners is a licensed enterprise reseller. We are an independent business that sells authentic World Mobile AirNodes with full manufacturer warranty. We are not affiliated with World Mobile directly.'
              },
              {
                q: 'Why choose Meridian over the official store?',
                a: "Three reasons: 1) Our exclusive buyback guarantee - no one else offers this. 2) Dedicated account management for enterprise clients. 3) Priority fulfillment and support. The official store can't match our investment security."
              },
              {
                q: 'Are the AirNodes authentic?',
                a: 'Yes, all our AirNodes are 100% authentic World Mobile hardware. Each unit comes with the original manufacturer warranty and all documentation.'
              },
              {
                q: 'Do you ship internationally?',
                a: 'Yes, we ship to most countries with priority shipping for enterprise orders. Contact us for shipping quotes and timelines to your location.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-wm-yellow rounded-lg flex items-center justify-center">
                  <Radio className="w-6 h-6 text-black" />
                </div>
                <span className="text-xl font-bold text-white">Meridian Node Partners</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                The enterprise AirNode partner with exclusive buyback guarantee.
                Invest in decentralized connectivity with true exit liquidity.
              </p>
              <p className="text-xs text-gray-500">
                Meridian Node Partners is an independent business and licensed enterprise reseller.
                We are not World Mobile Ltd or any of its subsidiaries. All trademarks belong to their respective owners.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#why-meridian" className="hover:text-wm-yellow transition-colors">Why Meridian</a></li>
                <li><a href="#order" className="hover:text-wm-yellow transition-colors">Order</a></li>
                <li><a href="#faq" className="hover:text-wm-yellow transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://worldmobile.io" target="_blank" rel="noopener noreferrer" className="hover:text-wm-yellow transition-colors flex items-center gap-1">World Mobile Official <ExternalLink className="w-3 h-3" /></a></li>
                <li><a href="https://airnode.worldmobile.net" target="_blank" rel="noopener noreferrer" className="hover:text-wm-yellow transition-colors flex items-center gap-1">AirNode Portal <ExternalLink className="w-3 h-3" /></a></li>
                <li><a href="https://worldmobile.io/help" target="_blank" rel="noopener noreferrer" className="hover:text-wm-yellow transition-colors flex items-center gap-1">WM Support <ExternalLink className="w-3 h-3" /></a></li>
              </ul>
            </div>
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


import { Link } from 'react-router-dom'
import { Shield, Zap, Users, Award, ChevronRight, Check, Star, Quote, TrendingUp } from 'lucide-react'
import { products } from '../lib/products'

const benefits = [
  {
    icon: Shield,
    title: 'Guaranteed Allocation',
    description: 'Reserved inventory from official World Mobile drops. No sold-out disappointments.',
  },
  {
    icon: Users,
    title: 'Personal Support',
    description: 'I personally guide every client through their AirNode journey - you are never just a number.',
  },
  {
    icon: Award,
    title: 'Trusted Partner',
    description: 'Over 50+ happy node operators and counting. Real results, real relationships.',
  },
  {
    icon: Zap,
    title: 'Fast & Simple',
    description: 'Clear process from order to ownership. No confusion, just results.',
  },
]

const testimonials = [
  {
    name: 'Michael T.',
    location: 'Texas, USA',
    quote: 'Working with Meridian was incredibly smooth. They walked me through everything and my nodes were set up within days. Already seeing my first rewards!',
    rating: 5,
  },
  {
    name: 'Sarah K.',
    location: 'London, UK',
    quote: 'Finally found someone I could trust in this space. The personal attention made all the difference - felt like working with a friend, not a faceless company.',
    rating: 5,
  },
  {
    name: 'David R.',
    location: 'Sydney, Australia',
    quote: 'Was skeptical at first but the transparency won me over. Got my Spark nodes and the monthly rewards are exactly as described. Very happy!',
    rating: 5,
  },
]

const communityHighlights = [
  {
    stat: '18,637+',
    label: 'Active AirNodes',
    description: 'Network grew 189% in just 40 days',
  },
  {
    stat: '$940K+',
    label: 'Rewards Paid Out',
    description: 'Real earnings for real operators',
  },
  {
    stat: '1.6M+',
    label: 'Network Users',
    description: 'Growing community worldwide',
  },
]

const faqs = [
  {
    question: 'What is an AirNode?',
    answer: 'AirNodes are the infrastructure nodes that power the World Mobile network. By operating an AirNode, you provide wireless coverage and earn rewards in return.',
  },
  {
    question: 'How do I receive my AirNode?',
    answer: 'After completing your order and payment, your AirNode allocation will appear directly in your World Mobile dashboard at airnode.worldmobile.io. I will personally guide you through the setup process.',
  },
  {
    question: 'What are the expected rewards?',
    answer: 'Spark AirNodes earn approximately $1.70/month in fixed rewards. Actual results may vary based on location, usage, and network performance.',
  },
  {
    question: 'Is this an official World Mobile product?',
    answer: 'Yes! Meridian Node Partners is an authorized community reseller. All AirNodes are genuine World Mobile products allocated through official channels.',
  },
]

export function HomePage() {
  const featuredProducts = products.filter(p => p.featured)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-navy-700/50 border border-navy-600 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-navy-200">Trusted by 50+ Node Operators</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Partner in the{' '}
              <span className="text-gold-500">World Mobile</span>{' '}
              Journey
            </h1>

            <p className="text-xl text-navy-200 mb-8 leading-relaxed">
              Hi, I am here to help you become part of the decentralized connectivity revolution. 
              No corporate jargon, no complicated processes - just honest guidance and real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/order" className="btn-primary text-lg">
                Start Your Journey
                <ChevronRight size={20} className="ml-2" />
              </Link>
              <Link to="/products" className="btn-secondary text-lg">
                View AirNodes
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <Check className="text-gold-500" size={20} />
                <span className="text-navy-200">Personal Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-gold-500" size={20} />
                <span className="text-navy-200">Transparent Process</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-gold-500" size={20} />
                <span className="text-navy-200">Real Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-16 bg-gold-500/5 border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">World Mobile Network is Growing Fast</h2>
            <p className="text-navy-300">Real numbers from the community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityHighlights.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-4xl font-bold text-gold-500 mb-2">{item.stat}</div>
                <div className="text-lg font-semibold text-white mb-1">{item.label}</div>
                <div className="text-sm text-navy-300">{item.description}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="https://x.com/WorldMobileTeam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold-500 hover:underline text-sm"
            >
              Follow @WorldMobileTeam for updates →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Node Operators Say
            </h2>
            <p className="text-navy-300 text-lg max-w-2xl mx-auto">
              Real feedback from real people who trusted us with their AirNode journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-gold-500 fill-gold-500" size={20} />
                  ))}
                </div>
                <Quote className="text-gold-500/30 mb-4" size={32} />
                <p className="text-navy-200 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-navy-400">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Work With Me?
            </h2>
            <p className="text-navy-300 text-lg max-w-2xl mx-auto">
              I believe in doing things differently - with honesty, transparency, and genuine care for your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card group hover:border-gold-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                  <benefit.icon className="text-gold-500" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-navy-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Available AirNodes
            </h2>
            <p className="text-navy-300 text-lg max-w-2xl mx-auto">
              From entry-level Spark nodes to enterprise Titan infrastructure - I will help you find the right fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card border-gold-500/30 hover:border-gold-500/60 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                    <p className="text-gold-500 font-medium">{product.priceRange}</p>
                  </div>
                  <span className="bg-gold-500/10 text-gold-500 text-xs font-medium px-2 py-1 rounded">
                    Available
                  </span>
                </div>
                <p className="text-navy-300 text-sm mb-4">{product.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="text-gold-500" size={16} />
                    <span className="text-navy-200">{product.coverage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="text-gold-500" size={16} />
                    <span className="text-navy-200">{product.useCase}</span>
                  </div>
                </div>
                <Link to={`/order?product=${product.id}`} className="btn-primary w-full">
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-secondary">
              View All Products
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-navy-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-navy-300 text-lg">
              Getting started is easier than you think
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold text-lg flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Choose Your AirNode</h3>
                <p className="text-navy-300">Browse our available nodes and pick what fits your goals. Not sure? I am happy to chat and help you decide.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold text-lg flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Complete Your Order</h3>
                <p className="text-navy-300">Fill out the simple order form. You will receive a confirmation and contract to review. Everything is transparent.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold text-lg flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Start Earning</h3>
                <p className="text-navy-300">Your AirNode appears in your World Mobile dashboard. I will guide you through activation and you start earning rewards!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-navy-300">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-navy-300 mb-4">Still have questions?</p>
            <Link to="/contact" className="text-gold-500 hover:underline">
              Let us chat - I am happy to help →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-navy-300 text-lg mb-8 max-w-2xl mx-auto">
            Join 50+ happy node operators who trusted me with their World Mobile journey. 
            Let us build the future of connectivity together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/order" className="btn-primary text-lg">
              Start Your Order
              <ChevronRight size={20} className="ml-2" />
            </Link>
            <Link to="/contact" className="btn-secondary text-lg">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
                }

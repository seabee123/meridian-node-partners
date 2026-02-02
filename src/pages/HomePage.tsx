import { Link } from 'react-router-dom'
import { Shield, Zap, Users, Award, ChevronRight, Check } from 'lucide-react'
import { products } from '../lib/products'

const benefits = [
  {
    icon: Shield,
    title: 'Guaranteed Allocation',
    description: 'Reserved inventory from official World Mobile drops. No sold-out disappointments.',
  },
  {
    icon: Users,
    title: 'White-Glove Service',
    description: 'Dedicated account managers for personalized onboarding and support.',
  },
  {
    icon: Award,
    title: 'Enterprise Grade',
    description: 'Professional documentation, custom invoicing, and institutional-level support.',
  },
  {
    icon: Zap,
    title: 'Priority Access',
    description: 'First access to new AirNode types and exclusive partnership benefits.',
  },
]

const faqs = [
  {
    question: 'What is an AirNode?',
    answer: 'AirNodes are the infrastructure nodes that power the World Mobile network. By operating an AirNode, you provide wireless coverage and earn rewards in return.',
  },
  {
    question: 'How do I receive my AirNode?',
    answer: 'After completing your order and payment, your AirNode allocation will appear directly in your World Mobile dashboard at airnode.worldmobile.io.',
  },
  {
    question: 'What are the expected rewards?',
    answer: 'Spark AirNodes earn approximately $1.70/month in fixed rewards. Actual results may vary based on location, usage, and network performance.',
  },
  {
    question: 'Is this an official World Mobile product?',
    answer: 'Meridian Node Partners is an authorized community reseller. All AirNodes are genuine World Mobile products allocated through official channels.',
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
              <span className="text-sm text-navy-200">Authorized Community Reseller</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Enterprise-Grade{' '}
              <span className="text-gold-500">AirNode</span>{' '}
              Solutions
            </h1>

            <p className="text-xl text-navy-200 mb-8 leading-relaxed">
              Premium World Mobile AirNode allocation for sophisticated investors and institutional buyers.
              White-glove service, guaranteed availability, and dedicated support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/order" className="btn-primary text-lg">
                Reserve Your AirNodes
                <ChevronRight size={20} className="ml-2" />
              </Link>
              <Link to="/products" className="btn-secondary text-lg">
                View Products
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <Check className="text-gold-500" size={20} />
                <span className="text-navy-200">Guaranteed Allocation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-gold-500" size={20} />
                <span className="text-navy-200">Enterprise Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-gold-500" size={20} />
                <span className="text-navy-200">Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Meridian?
            </h2>
            <p className="text-navy-300 text-lg max-w-2xl mx-auto">
              We provide the most professional, enterprise-focused AirNode acquisition experience in the market.
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
              Featured AirNodes
            </h2>
            <p className="text-navy-300 text-lg max-w-2xl mx-auto">
              From entry-level Spark nodes to enterprise Titan infrastructure, we have solutions for every scale.
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
                    Featured
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
                  {product.rewards && (
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="text-gold-500" size={16} />
                      <span className="text-navy-200">{product.rewards}</span>
                    </div>
                  )}
                </div>
                <Link to={`/order?product=${product.id}`} className="btn-primary w-full">
                  Reserve Now
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

      {/* FAQ Section */}
      <section className="py-24 bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
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
            <Link to="/resources" className="text-gold-500 hover:underline">
              View more FAQs and resources →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Join the Network?
          </h2>
          <p className="text-navy-300 text-lg mb-8 max-w-2xl mx-auto">
            Secure your AirNode allocation today and start earning passive income through the World Mobile network.
          </p>
          <Link to="/order" className="btn-primary text-lg">
            Start Your Order
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

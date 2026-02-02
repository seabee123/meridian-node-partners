import { Link } from 'react-router-dom'
import { Target, Users, Shield, Globe, ChevronRight } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'We operate with full disclosure as a community reseller, always pointing to official World Mobile resources.',
  },
  {
    icon: Users,
    title: 'White-Glove Service',
    description: 'Every client receives personalized attention and dedicated support throughout their journey.',
  },
  {
    icon: Target,
    title: 'Enterprise Focus',
    description: 'We specialize in serving sophisticated investors and institutional buyers with professional-grade service.',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Supporting clients worldwide in participating in the decentralized connectivity revolution.',
  },
]

export function AboutPage() {
  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Meridian Node Partners
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Premium enterprise-grade AirNode acquisition for sophisticated investors.
          </p>
        </div>

        {/* Mission */}
        <div className="card mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-navy-300 leading-relaxed">
            Meridian Node Partners exists to provide the most professional, enterprise-focused
            AirNode acquisition experience in the market. We bridge the gap between sophisticated
            investors and the World Mobile network, offering white-glove service, guaranteed
            allocation, and dedicated support that institutional clients expect.
          </p>
        </div>

        {/* Community Disclosure */}
        <div className="card bg-gold-500/5 border-gold-500/30 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Community Project Disclosure</h2>
          <p className="text-navy-300 leading-relaxed mb-4">
            Meridian Node Partners is an <strong className="text-white">authorized community reseller</strong> of
            World Mobile AirNodes. We are not directly affiliated with World Mobile Group, but
            operate as an independent partner helping expand the network.
          </p>
          <p className="text-navy-300 leading-relaxed">
            All AirNodes are genuine World Mobile products, allocated through official channels.
            We encourage all clients to verify information through official World Mobile resources
            and to create their accounts directly at{' '}
            <a href="https://airnode.worldmobile.io" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:underline">
              airnode.worldmobile.io
            </a>.
          </p>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-gold-500" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-navy-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Offer */}
        <div className="card mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">What Sets Us Apart</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Guaranteed Node Allocation</h3>
              <p className="text-navy-300 text-sm">
                We maintain reserved inventory from official World Mobile drops, ensuring our
                clients never face "sold out" disappointments and receive priority access to
                new AirNode types.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Dedicated Account Management</h3>
              <p className="text-navy-300 text-sm">
                Every client is assigned a dedicated account manager who provides personalized
                guidance, handles special requirements, and ensures a smooth onboarding experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Documentation</h3>
              <p className="text-navy-300 text-sm">
                We provide professional documentation, custom invoicing for businesses, and
                detailed reporting that meets the standards expected by institutional investors.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Direct Communication</h3>
              <p className="text-navy-300 text-sm">
                Our clients enjoy direct communication channels with our team, ensuring quick
                response times and efficient resolution of any questions or concerns.
              </p>
            </div>
          </div>
        </div>

        {/* World Mobile Partnership */}
        <div className="card mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">About World Mobile</h2>
          <p className="text-navy-300 leading-relaxed mb-4">
            World Mobile is building the world's first decentralized mobile network, designed
            to connect the unconnected. Using blockchain technology and a sharing economy model,
            World Mobile enables anyone to become a node operator and earn rewards while helping
            expand global connectivity.
          </p>
          <p className="text-navy-300 leading-relaxed">
            AirNodes are the infrastructure backbone of this network, providing wireless coverage
            in homes, businesses, and communities around the world. By operating an AirNode,
            you become part of a revolutionary approach to telecommunications.
          </p>
          <a
            href="https://worldmobile.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-500 hover:underline mt-4"
          >
            Learn more at worldmobile.io
            <ChevronRight size={16} />
          </a>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
          <p className="text-navy-300 mb-8">
            Experience the Meridian difference with our enterprise-grade service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/order" className="btn-primary">
              Start Your Order
              <ChevronRight size={20} className="ml-2" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import { ExternalLink, FileText, HelpCircle, Calculator, BookOpen } from 'lucide-react'

const officialLinks = [
  {
    title: 'AirNode Portal',
    description: 'Create your account and manage your AirNodes',
    url: 'https://airnode.worldmobile.io',
    icon: FileText,
  },
  {
    title: 'AirNode Operator Page',
    description: 'Technical information for node operators',
    url: 'https://airnode.worldmobile.net',
    icon: BookOpen,
  },
  {
    title: 'Official Documentation',
    description: 'Comprehensive technical documentation',
    url: 'https://docs.worldmobile.io',
    icon: FileText,
  },
  {
    title: 'AirNode FAQ',
    description: 'Frequently asked questions about AirNodes',
    url: 'https://faq.worldmobiletoken.com/airnode-guide',
    icon: HelpCircle,
  },
  {
    title: 'World Mobile Website',
    description: 'Official World Mobile main site',
    url: 'https://worldmobile.io',
    icon: ExternalLink,
  },
]

const faqs = [
  {
    question: 'What is an AirNode?',
    answer: 'AirNodes are hardware devices that form the backbone of the World Mobile network. They provide wireless connectivity and allow operators to earn rewards by contributing to the network infrastructure.',
  },
  {
    question: 'How do AirNode rewards work?',
    answer: 'AirNode operators earn rewards based on their contribution to the network. Spark AirNodes earn approximately $1.70/month in fixed rewards. Larger nodes earn variable rewards based on network traffic and usage.',
  },
  {
    question: "What's the difference between AirNode types?",
    answer: 'AirNodes range from Spark (entry-level, 150m coverage) to Titan (enterprise backbone). Each type serves different use cases and scales, from home deployment to large-scale infrastructure.',
  },
  {
    question: 'How long does the allocation process take?',
    answer: "After payment confirmation, AirNodes are typically allocated to your World Mobile account within 24-48 hours. You'll receive email confirmation when your nodes are ready.",
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept wire transfers and major cryptocurrencies including BTC, ETH, ADA, and USDT. Enterprise clients can request custom invoicing arrangements.',
  },
  {
    question: 'Do I need technical knowledge to operate an AirNode?',
    answer: 'No technical knowledge is required for Spark AirNodes. Simply create your World Mobile account and your allocated nodes will appear in your dashboard, ready to earn rewards.',
  },
  {
    question: 'What is the expected lifespan of an AirNode?',
    answer: 'Spark AirNodes have a projected lifespan of 14 years. Actual lifespan may vary based on usage and environmental conditions.',
  },
  {
    question: 'Is Meridian Node Partners affiliated with World Mobile?',
    answer: 'Meridian Node Partners is an authorized community reseller, not directly affiliated with World Mobile Group. All AirNodes are genuine World Mobile products allocated through official channels.',
  },
]

export function ResourcesPage() {
  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Resources
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Everything you need to learn about AirNodes and the World Mobile network.
          </p>
        </div>

        {/* Official Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Official World Mobile Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {officialLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card hover:border-gold-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <link.icon className="text-gold-500" size={20} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">{link.title}</h3>
                      <ExternalLink className="text-navy-400" size={14} />
                    </div>
                    <p className="text-navy-300 text-sm">{link.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ROI Calculator Notice */}
        <section className="mb-16">
          <div className="card bg-gold-500/5 border-gold-500/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calculator className="text-gold-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Earnings Calculator</h3>
                <p className="text-navy-300 mb-4">
                  World Mobile provides an official earnings calculator to help estimate potential
                  rewards. Remember that all estimates are projections and actual results may vary.
                </p>
                <a
                  href="https://airnode.worldmobile.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-500 hover:underline"
                >
                  View Calculator <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-navy-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="mt-16 card bg-navy-800/50">
          <p className="text-navy-400 text-sm">
            <strong className="text-navy-300">Disclaimer:</strong> All information provided on this page
            is for educational purposes only. Rewards and earnings are estimates based on World Mobile
            documentation and are not guaranteed. Always refer to official World Mobile resources for
            the most accurate and up-to-date information.
          </p>
        </div>
      </div>
    </div>
  )
}

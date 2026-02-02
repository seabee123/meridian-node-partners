import { Link } from 'react-router-dom'
import { UserPlus, FileText, CreditCard, FileSignature, Wifi, Coins, ChevronRight, ExternalLink } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Create Your World Mobile Account',
    description: 'Sign up at airnode.worldmobile.io to set up your official World Mobile account. This is where your AirNodes will be allocated.',
    link: 'https://airnode.worldmobile.io',
    linkText: 'Create Account',
  },
  {
    icon: FileText,
    title: 'Submit Your Order',
    description: 'Complete our order form with your details and AirNode selection. Our team reviews every order personally.',
  },
  {
    icon: CreditCard,
    title: 'Receive Payment Instructions',
    description: "Within 24-48 hours, you'll receive an email with payment instructions. We accept wire transfer and cryptocurrency.",
  },
  {
    icon: FileSignature,
    title: 'Sign Service Agreement',
    description: 'Review and sign our service agreement outlining the allocation terms and your rights as a node operator.',
  },
  {
    icon: Wifi,
    title: 'Nodes Appear in Your Dashboard',
    description: "Once payment is confirmed, your AirNodes are allocated to your World Mobile account. You'll see them in your dashboard.",
  },
  {
    icon: Coins,
    title: 'Start Earning Rewards',
    description: 'Your AirNodes begin earning rewards based on network activity. Track your earnings in the World Mobile portal.',
  },
]

export function HowItWorksPage() {
  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How It Works
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Our streamlined process makes acquiring AirNodes simple and secure.
            Here's what to expect from start to finish.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-navy-700 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Step number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                    <step.icon className="text-navy-800" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="card flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gold-500 font-medium text-sm">Step {index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-navy-300">{step.description}</p>
                  {step.link && (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gold-500 hover:underline mt-3 text-sm"
                    >
                      {step.linkText} <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-16 card bg-navy-800/50 border-gold-500/30">
          <h2 className="text-xl font-semibold text-white mb-4">Important Information</h2>
          <ul className="space-y-3 text-navy-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="text-gold-500 mt-1 flex-shrink-0" size={16} />
              <span>Processing time is typically 24-48 hours after payment confirmation.</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="text-gold-500 mt-1 flex-shrink-0" size={16} />
              <span>Your email must match your World Mobile account for proper allocation.</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="text-gold-500 mt-1 flex-shrink-0" size={16} />
              <span>We accept wire transfers and major cryptocurrencies (BTC, ETH, ADA, USDT).</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="text-gold-500 mt-1 flex-shrink-0" size={16} />
              <span>Enterprise clients may request custom invoicing arrangements.</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-navy-300 mb-8">
            Begin your AirNode journey today with our simple order process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/order" className="btn-primary">
              Start Your Order
              <ChevronRight size={20} className="ml-2" />
            </Link>
            <Link to="/products" className="btn-secondary">
              View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

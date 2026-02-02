import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-navy-800 font-bold text-lg">M</span>
              </div>
              <span className="text-white font-semibold text-lg">Meridian Node Partners</span>
            </div>
            <p className="text-navy-300 text-sm mb-4 max-w-md">
              Premium enterprise-grade AirNode reseller. We provide white-glove service for sophisticated investors looking to participate in the World Mobile network.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://worldmobile.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-400 hover:text-gold-500 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-navy-300 hover:text-gold-500 text-sm transition-colors">Products</Link></li>
              <li><Link to="/how-it-works" className="text-navy-300 hover:text-gold-500 text-sm transition-colors">How It Works</Link></li>
              <li><Link to="/order" className="text-navy-300 hover:text-gold-500 text-sm transition-colors">Reserve Now</Link></li>
              <li><Link to="/contact" className="text-navy-300 hover:text-gold-500 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Official Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Official Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://airnode.worldmobile.io" target="_blank" rel="noopener noreferrer" className="text-navy-300 hover:text-gold-500 text-sm transition-colors flex items-center gap-1">
                  AirNode Portal <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://docs.worldmobile.io" target="_blank" rel="noopener noreferrer" className="text-navy-300 hover:text-gold-500 text-sm transition-colors flex items-center gap-1">
                  Documentation <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://faq.worldmobiletoken.com/airnode-guide" target="_blank" rel="noopener noreferrer" className="text-navy-300 hover:text-gold-500 text-sm transition-colors flex items-center gap-1">
                  AirNode FAQ <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://worldmobile.io" target="_blank" rel="noopener noreferrer" className="text-navy-300 hover:text-gold-500 text-sm transition-colors flex items-center gap-1">
                  World Mobile <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="mt-12 pt-8 border-t border-navy-700">
          <div className="bg-navy-800/50 rounded-lg p-4 mb-6">
            <p className="text-navy-400 text-xs leading-relaxed">
              <strong className="text-navy-300">Disclaimer:</strong> Rewards are not guaranteed and should not be interpreted as financial advice. All earnings figures are estimates based on assumptions made by World Mobile. Actual results may vary depending on factors such as usage, location, subscriber demand, and network performance.
            </p>
            <p className="text-navy-400 text-xs leading-relaxed mt-2">
              Meridian Node Partners is an authorized community reseller and is not directly affiliated with World Mobile Group. For official information, visit{' '}
              <a href="https://worldmobile.io" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:underline">worldmobile.io</a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-navy-400 text-sm">
              © {new Date().getFullYear()} Meridian Node Partners. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/terms" className="text-navy-400 hover:text-gold-500 transition-colors">Terms</Link>
              <Link to="/privacy" className="text-navy-400 hover:text-gold-500 transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

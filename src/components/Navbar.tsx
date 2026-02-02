import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-800/95 backdrop-blur-md border-b border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
              <span className="text-navy-800 font-bold text-lg">M</span>
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block">Meridian Node Partners</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-gold-500 bg-navy-700'
                    : 'text-navy-200 hover:text-white hover:bg-navy-700/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/order" className="btn-primary ml-4 text-sm py-2">
              Reserve Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-navy-200 hover:text-white hover:bg-navy-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-navy-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  location.pathname === link.href
                    ? 'text-gold-500 bg-navy-700'
                    : 'text-navy-200 hover:text-white hover:bg-navy-700/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/order"
              onClick={() => setIsOpen(false)}
              className="btn-primary mt-4 w-full text-sm"
            >
              Reserve Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

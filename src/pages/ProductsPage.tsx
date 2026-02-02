import { Link } from 'react-router-dom'
import { Check, ExternalLink } from 'lucide-react'
import { products } from '../lib/products'

export function ProductsPage() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            AirNode Products
          </h1>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            From residential Spark nodes to enterprise Titan infrastructure,
            find the perfect AirNode for your investment goals.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`card hover:border-gold-500/50 transition-all duration-300 flex flex-col ${
                product.featured ? 'border-gold-500/30 ring-1 ring-gold-500/20' : ''
              }`}
            >
              {product.featured && (
                <span className="bg-gold-500 text-navy-800 text-xs font-bold px-3 py-1 rounded-full self-start mb-4">
                  POPULAR
                </span>
              )}

              <div className="mb-4">
                <h2 className="text-2xl font-bold text-white">{product.name}</h2>
                <p className="text-gold-500 text-xl font-semibold">{product.priceRange}</p>
              </div>

              <p className="text-navy-300 text-sm mb-6 flex-grow">
                {product.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Check className="text-gold-500 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-navy-200 text-sm">
                    <strong>Coverage:</strong> {product.coverage}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-gold-500 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-navy-200 text-sm">
                    <strong>Best for:</strong> {product.useCase}
                  </span>
                </div>
                {product.rewards && (
                  <div className="flex items-start gap-2">
                    <Check className="text-gold-500 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-navy-200 text-sm">
                      <strong>Est. Rewards:</strong> {product.rewards}
                    </span>
                  </div>
                )}
                {product.lifespan && (
                  <div className="flex items-start gap-2">
                    <Check className="text-gold-500 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-navy-200 text-sm">
                      <strong>Lifespan:</strong> {product.lifespan}
                    </span>
                  </div>
                )}
              </div>

              <Link
                to={`/order?product=${product.id}`}
                className={product.featured ? 'btn-primary w-full' : 'btn-secondary w-full'}
              >
                Reserve Now
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Quick Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-navy-600">
                  <th className="text-left py-4 px-4 text-navy-200 font-medium">Type</th>
                  <th className="text-left py-4 px-4 text-navy-200 font-medium">Price Range</th>
                  <th className="text-left py-4 px-4 text-navy-200 font-medium">Coverage</th>
                  <th className="text-left py-4 px-4 text-navy-200 font-medium">Use Case</th>
                  <th className="text-left py-4 px-4 text-navy-200 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-navy-700 hover:bg-navy-700/30">
                    <td className="py-4 px-4 text-white font-medium">{product.name}</td>
                    <td className="py-4 px-4 text-gold-500">{product.priceRange}</td>
                    <td className="py-4 px-4 text-navy-300">{product.coverage}</td>
                    <td className="py-4 px-4 text-navy-300">{product.useCase}</td>
                    <td className="py-4 px-4">
                      <Link
                        to={`/order?product=${product.id}`}
                        className="text-gold-500 hover:underline text-sm"
                      >
                        Reserve →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 card bg-navy-800/50">
          <p className="text-navy-400 text-sm">
            <strong className="text-navy-300">Important:</strong> All specifications and pricing are sourced from official World Mobile documentation.
            Rewards are estimates and not guaranteed. For the most up-to-date information, please visit the{' '}
            <a
              href="https://docs.worldmobile.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-500 hover:underline inline-flex items-center gap-1"
            >
              official documentation <ExternalLink size={12} />
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}

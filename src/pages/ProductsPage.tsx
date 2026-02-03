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
            Official World Mobile AirNode hardware. From compact Spark nodes
            to enterprise Titan infrastructure, find the right equipment for your deployment.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative bg-navy-800/50 border rounded-2xl p-6 transition-all duration-300 ${
                product.available === false
                  ? 'border-navy-600 opacity-75'
                  : product.featured
                    ? 'border-gold-500 hover:border-gold-400 hover:shadow-lg hover:shadow-gold-500/10'
                    : 'border-navy-600 hover:border-gold-500/50'
              }`}
            >
              {product.featured && product.available !== false && (
                <div className="absolute -top-3 left-6 bg-gold-500 text-navy-900 px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}
              {product.available === false && (
                <div className="absolute -top-3 left-6 bg-navy-600 text-navy-200 px-3 py-1 rounded-full text-sm font-semibold">
                  Coming Soon
                </div>
              )}
              <div className="pt-2">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <div className="text-gold-500 text-2xl font-bold mb-4">
                  {product.priceRange || `$${product.price.toLocaleString()}`}
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-navy-300">
                    <Check className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" />
                    <span>{product.coverage}</span>
                  </div>
                  <div className="flex items-center text-navy-300">
                    <Check className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" />
                    <span>{product.useCase}</span>
                  </div>
                  {product.minQuantity && (
                    <div className="flex items-center text-navy-300">
                      <Check className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" />
                      <span>Minimum order: {product.minQuantity} units</span>
                    </div>
                  )}
                  {product.lifespan && (
                    <div className="flex items-center text-navy-300">
                      <Check className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" />
                      <span>{product.lifespan}</span>
                    </div>
                  )}
                </div>
                <p className="text-navy-400 text-sm mb-6">{product.description}</p>
                {product.available === false ? (
                  <button disabled className="w-full bg-navy-700 text-navy-400 py-3 rounded-lg font-semibold cursor-not-allowed">
                    Coming Soon
                  </button>
                ) : (
                  <Link to={`/order?product=${product.id}`} className="block w-full bg-gold-500 hover:bg-gold-400 text-navy-900 py-3 rounded-lg font-semibold text-center transition-colors">
                    Request Quote
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-navy-800/30 border border-navy-700 rounded-xl">
          <p className="text-navy-400 text-sm text-center">
            Meridian Node Partners is an authorized community reseller of World Mobile AirNode hardware.
            All purchases are subject to World Mobile operator agreements. After submitting a quote request,
            you will receive operator contract documentation via email for review and signature.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Official Resources</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://worldmobile.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-navy-800 border border-navy-600 rounded-lg text-navy-300 hover:text-gold-500 hover:border-gold-500/50 transition-colors">
              <ExternalLink className="w-5 h-5 mr-2" />
              World Mobile Official
            </a>
            <a href="https://shop.worldmobile.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-navy-800 border border-navy-600 rounded-lg text-navy-300 hover:text-gold-500 hover:border-gold-500/50 transition-colors">
              <ExternalLink className="w-5 h-5 mr-2" />
              Official Shop
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

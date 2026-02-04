import { useState } from 'react';
import { Globe, Zap, Radio, Building, ChevronRight, Check, DollarSign, Shield, Users, Award, Clock, ChevronDown, ChevronUp, Star, Mail, MessageCircle, CheckCircle, Menu } from 'lucide-react';

const products = [
  { id: 'spark', name: 'Spark', description: 'Connectivity for residential and business premises.', price: '$62.99', priceLabel: 'From', icon: Zap, featured: false, inStock: true, link: '/products/spark' },
  { id: 'portal-180', name: 'Portal 180', description: 'Extended range connectivity.', price: '$299', priceLabel: 'From', icon: Radio, featured: false, inStock: true, link: '/products/portal-180' },
  { id: 'portal-360', name: 'Portal 360', description: 'Full 360-degree coverage.', price: '$499', priceLabel: 'From', icon: Globe, featured: true, inStock: true, link: '/products/portal-360' },
  { id: 'titan', name: 'Titan', description: 'Enterprise-grade AirNode.', price: '$2,499', priceLabel: 'From', icon: Building, featured: true, inStock: false, link: '/products/titan' }
];

export function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', interest: 'general' });

  const handleFormSubmit = (e: React.FormEvent) => { e.preventDefault(); setFormSubmitted(true); };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95">
        <div className="max-w-7xl mx-auto px-4"><div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-wm-yellow rounded-lg flex items-center justify-center"><Radio className="w-6 h-6 text-black" /></div><span className="text-white font-bold">Meridian Node Partners</span></div>
          <div className="hidden md:flex gap-8"><a href="#products" className="text-gray-300">Products</a><a href="#contact" className="bg-wm-yellow text-black px-6 py-2 rounded-lg">Contact</a></div>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><Menu className="w-6 h-6" /></button>
        </div></div>
      </nav>

      <section className="pt-24 gradient-hero min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center bg-wm-yellow/10 border border-wm-yellow/30 rounded-full px-4 py-2 mb-6"><Shield className="w-4 h-4 text-wm-yellow" /><span className="text-wm-yellow text-sm ml-2">Licensed Community Reseller</span></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Connectivity. <span className="text-wm-yellow">Redefined.</span></h1>
          <p className="text-xl text-gray-300 mb-8 max-w-xl">Help deploy AirNodes and earn rewards for expanding decentralized connectivity.</p>
          <a href="#products" className="bg-wm-yellow text-black px-8 py-4 rounded-lg font-bold inline-flex items-center gap-2">View AirNodes<ChevronRight className="w-5 h-5" /></a>
        </div>
      </section>

      <section id="products" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose Your AirNode</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (<div key={i} className="bg-gray-800 rounded-2xl p-6 border border-gray-700"><div className="w-12 h-12 bg-wm-yellow/10 rounded-xl flex items-center justify-center mb-4"><p.icon className="w-6 h-6 text-wm-yellow" /></div><h3 className="text-lg font-bold text-white mb-2">{p.name}</h3><p className="text-gray-400 text-sm mb-4">{p.description}</p><span className="text-wm-yellow font-bold">{p.price}</span></div>))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Us</h2>
          {formSubmitted ? (<div className="text-center p-8"><CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" /><h3 className="text-2xl font-bold text-white">Thank You!</h3></div>) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white" placeholder="First Name" />
                <input type="text" required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white" placeholder="Last Name" />
              </div>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white" placeholder="Email" />
              <button type="submit" className="w-full py-4 bg-wm-yellow text-black font-bold rounded-lg">Send Message</button>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-gray-900 py-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-4"><div className="w-10 h-10 bg-wm-yellow rounded-lg flex items-center justify-center"><Radio className="h-6 w-6 text-black" /></div><span className="text-xl font-bold text-white">Meridian Node Partners</span></div>
        <p className="text-gray-500 text-sm">Licensed Community Reseller</p>
      </footer>
    </div>
  );
}

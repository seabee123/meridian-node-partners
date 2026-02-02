import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { OrderPage } from './pages/OrderPage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { AboutPage } from './pages/AboutPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { ContactPage } from './pages/ContactPage'

function App() {
    return (
          <Layout>
                <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/order" element={<OrderPage />} />
                        <Route path="/how-it-works" element={<HowItWorksPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/resources" element={<ResourcesPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                </Routes>Routes>
          </Layout>Layout>
        )
}

export default App</Layout>

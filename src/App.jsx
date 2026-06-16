import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import BannerCarousel from './components/BannerCarousel'
import CategoryBar from './components/CategoryBar'
import ProductGrid from './components/ProductGrid'
import CartSidebar from './components/CartSidebar'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import CheckoutModal from './components/CheckoutModal'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [checkoutItem, setCheckoutItem] = useState(null)

  return (
    <CartProvider>
      <div className="min-h-screen bg-bg">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main>
          <BannerCarousel />
          <CategoryBar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <ProductGrid
            activeCategory={activeCategory}
            searchQuery={searchQuery}
            onBuyNow={(product, size) => setCheckoutItem({ product, size })}
          />
        </main>
        <Footer />
        <BottomNav />
        <CartSidebar />

        {/* Animate checkout modal */}
        <AnimatePresence>
          {checkoutItem && (
            <CheckoutModal
              item={checkoutItem}
              onClose={() => setCheckoutItem(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </CartProvider>
  )
}

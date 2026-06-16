import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingCart, User, Menu, X, MapPin, ChevronDown } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Navbar({ searchQuery, setSearchQuery }) {
  const { totalItems, toggleCart } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top deal strip */}
      <div className="bg-primary text-white text-xs py-1.5 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap font-medium">
          🎉 Mega Sale Live! Up to 80% OFF on Footwear & Fashion | Free Delivery on orders above ₹199 | Use code MODERN100 for extra ₹100 off 🎉
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 h-14 md:h-16">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-1.5 -ml-1.5 text-text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">M</span>
            </div>
            <span className="hidden sm:block font-display font-bold text-xl text-text-dark">
              Modern<span className="text-primary">Mart</span>
            </span>
          </a>

          {/* Location */}
          <button className="hidden lg:flex items-center gap-1 text-xs text-text-gray hover:text-primary transition-colors ml-2 border border-border rounded-lg px-3 py-2">
            <MapPin className="w-3.5 h-3.5" />
            <span className="font-medium">Mumbai, 400001</span>
            <ChevronDown className="w-3 h-3" />
          </button>

          {/* Search bar */}
          <div className="flex-1 max-w-xl mx-2 md:mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for slippers, shoes, gifts..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-bg text-sm text-text-dark placeholder-text-light outline-none border border-transparent focus:border-primary/30 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* User */}
            <button className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-text-gray hover:text-primary hover:bg-primary-bg transition-colors text-sm font-medium">
              <User className="w-5 h-5" />
              <span className="hidden lg:inline">Account</span>
            </button>

            {/* Cart */}
            <motion.button
              id="cart-button"
              onClick={toggleCart}
              className="relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-text-gray hover:text-primary hover:bg-primary-bg transition-colors text-sm font-medium cursor-pointer"
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden lg:inline">Cart</span>
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-0.5 left-6 lg:left-5 min-w-[18px] h-[18px] bg-primary rounded-full flex items-center justify-center text-[10px] font-bold text-white px-1 pulse-badge"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2">
              {['My Orders', 'Wishlist', 'My Coupons', 'Help Center'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-2.5 px-3 text-sm text-text-body hover:text-primary hover:bg-primary-bg rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

import { motion } from 'framer-motion'
import { Home, LayoutGrid, ShoppingCart, User } from 'lucide-react'
import { useCart } from '../context/CartContext'

const navItems = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: LayoutGrid, label: 'Categories', id: 'categories' },
  { icon: ShoppingCart, label: 'Cart', id: 'cart' },
  { icon: User, label: 'Account', id: 'account' },
]

export default function BottomNav() {
  const { totalItems, toggleCart } = useCart()

  const handleClick = (id) => {
    if (id === 'cart') {
      toggleCart()
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (id === 'categories') {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50 safe-area-bottom">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ icon: Icon, label, id }) => (
          <motion.button
            key={id}
            onClick={() => handleClick(id)}
            className="flex flex-col items-center gap-0.5 px-4 py-1.5 text-text-gray hover:text-primary transition-colors relative cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative">
              <Icon className="w-5 h-5" />
              {id === 'cart' && totalItems > 0 && (
                <span className="absolute -top-1.5 -right-2.5 min-w-[16px] h-[16px] bg-primary rounded-full flex items-center justify-center text-[9px] font-bold text-white px-0.5">
                  {totalItems}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium">{label}</span>
          </motion.button>
        ))}
      </div>
    </nav>
  )
}

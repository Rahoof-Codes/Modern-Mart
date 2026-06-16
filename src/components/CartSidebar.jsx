import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, Trash2, ShoppingCart, Tag, Truck, ShieldCheck } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function CartSidebar() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    totalPrice,
    totalMrp,
    totalSavings,
  } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-[60]"
            onClick={closeCart}
          />

          {/* Sidebar */}
          <motion.aside
            id="cart-sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-bg flex flex-col"
          >
            {/* Header */}
            <div className="bg-white flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2.5">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <h2 className="font-display font-bold text-lg text-text-dark">
                  My Cart
                </h2>
                {items.length > 0 && (
                  <span className="bg-primary-bg text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                    {items.length} items
                  </span>
                )}
              </div>
              <motion.button
                onClick={closeCart}
                className="p-2 rounded-xl hover:bg-bg transition-colors cursor-pointer"
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-text-gray" />
              </motion.button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center px-6"
                >
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-text-dark font-semibold text-lg mb-1">
                    Your cart is empty
                  </p>
                  <p className="text-text-gray text-sm mb-6">
                    Looks like you haven't added anything yet
                  </p>
                  <button
                    onClick={closeCart}
                    className="bg-primary text-white font-semibold text-sm px-8 py-3 rounded-xl hover:bg-primary-dark transition-colors"
                  >
                    Start Shopping
                  </button>
                </motion.div>
              ) : (
                <div className="p-4 space-y-3">
                  {/* Coupon banner */}
                  <div className="bg-accent-green-bg border border-accent-green/20 rounded-xl px-4 py-3 flex items-center gap-2.5">
                    <Tag className="w-4 h-4 text-accent-green flex-shrink-0" />
                    <p className="text-sm text-accent-green font-medium">
                      Apply coupon <span className="font-bold">MODERN100</span> for extra ₹100 off
                    </p>
                  </div>

                  <AnimatePresence mode="popLayout">
                    {items.map((item) => {
                      const discount = Math.round(
                        ((item.mrp - item.price) / item.mrp) * 100
                      )
                      return (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 30, height: 0 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                          className="bg-white rounded-xl p-3.5 flex gap-3 border border-border/50"
                        >
                          {/* Image */}
                          <div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-bg">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Details */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-sm text-text-dark leading-snug line-clamp-1">
                              {item.name}
                            </h3>
                             <p className="text-xs text-text-light mt-0.5">
                              {item.category} {item.selectedSize && `· Size: ${item.selectedSize}`}
                            </p>

                            {/* Price row */}
                            <div className="flex items-baseline gap-2 mt-2">
                              <span className="font-display font-bold text-base text-text-dark">
                                ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                              </span>
                              <span className="text-text-light text-xs line-through">
                                ₹{(item.mrp * item.quantity).toLocaleString('en-IN')}
                              </span>
                              <span className="text-deal-red text-xs font-semibold">
                                {discount}% off
                              </span>
                            </div>

                            {/* Qty + Remove */}
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center border border-border rounded-lg overflow-hidden">
                                <motion.button
                                  onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                                  className="w-8 h-8 flex items-center justify-center text-text-gray hover:bg-bg transition-colors cursor-pointer"
                                  whileTap={{ scale: 0.85 }}
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </motion.button>
                                <span className="w-8 h-8 flex items-center justify-center text-sm font-semibold text-text-dark border-x border-border tabular-nums">
                                  {item.quantity}
                                </span>
                                <motion.button
                                  onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                                  className="w-8 h-8 flex items-center justify-center text-text-gray hover:bg-bg transition-colors cursor-pointer"
                                  whileTap={{ scale: 0.85 }}
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </motion.button>
                              </div>

                              <motion.button
                                onClick={() => removeItem(item.id, item.selectedSize)}
                                className="flex items-center gap-1 text-xs text-text-light hover:text-deal-red transition-colors cursor-pointer"
                                whileTap={{ scale: 0.9 }}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                Remove
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border-t border-border px-5 py-4"
              >
                {/* Price breakdown */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-gray">Total MRP</span>
                    <span className="text-text-body line-through">
                      ₹{totalMrp.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-accent-green font-medium">You Save</span>
                    <span className="text-accent-green font-semibold">
                      −₹{totalSavings.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-gray">Delivery</span>
                    <span className="text-accent-green font-medium">FREE</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between">
                    <span className="font-display font-bold text-base text-text-dark">Total</span>
                    <span className="font-display font-bold text-xl text-text-dark">
                      ₹{totalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-4 mb-4 text-text-light">
                  <div className="flex items-center gap-1 text-[10px]">
                    <Truck className="w-3 h-3" />
                    Free Delivery
                  </div>
                  <div className="flex items-center gap-1 text-[10px]">
                    <ShieldCheck className="w-3 h-3" />
                    Secure Payment
                  </div>
                </div>

                {/* Checkout button */}
                <motion.button
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-sm tracking-wide hover:shadow-lg hover:shadow-primary/25 transition-shadow cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Place Order · ₹{totalPrice.toLocaleString('en-IN')}
                </motion.button>
              </motion.div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

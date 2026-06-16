import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product, selectedSize = '') => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.selectedSize === selectedSize
      )
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, selectedSize, quantity: 1 }]
    })
  }, [])

  const removeItem = useCallback((productId, selectedSize = '') => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.id === productId && item.selectedSize === selectedSize)
      )
    )
  }, [])

  const updateQuantity = useCallback((productId, selectedSize = '', delta) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === productId && item.selectedSize === selectedSize
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const totalMrp = items.reduce(
    (sum, item) => sum + item.mrp * item.quantity,
    0
  )
  const totalSavings = totalMrp - totalPrice

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((p) => !p), [])

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        totalMrp,
        totalSavings,
        openCart,
        closeCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

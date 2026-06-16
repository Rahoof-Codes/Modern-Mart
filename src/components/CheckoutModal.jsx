import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, MapPin, Phone, User, Check, Send } from 'lucide-react'

export default function CheckoutModal({ item, onClose }) {
  const { product, size } = item
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [pincode, setPincode] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!name.trim()) newErrors.name = 'Name is required'
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(phone.trim().replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    if (!address.trim()) newErrors.address = 'Street Address is required'
    if (!city.trim()) newErrors.city = 'City is required'
    if (!pincode.trim()) {
      newErrors.pincode = 'Pincode is required'
    } else if (!/^\d{6}$/.test(pincode.trim())) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    if (!validate()) return

    const totalPrice = product.price * quantity
    const formattedAddress = `${address.trim()}, ${city.trim()} - ${pincode.trim()}`
    
    // Create WhatsApp order details message
    const message = `🛒 *New Order from Modern Mart* 🛒\n\n` +
      `*Product Details:*\n` +
      `------------------\n` +
      `• *Name:* ${product.name}\n` +
      `• *ID:* ${product.uid || `MOD-${product.id}`}\n` +
      `• *Category:* ${product.category}\n` +
      (size ? `• *Size:* ${size}\n` : '') +
      `• *Quantity:* ${quantity}\n` +
      `• *Price:* ₹${product.price} each\n\n` +
      `*Customer Details:*\n` +
      `-------------------\n` +
      `• *Name:* ${name.trim()}\n` +
      `• *Phone:* ${phone.trim()}\n` +
      `• *Address:* ${formattedAddress}\n\n` +
      `*Order Summary:*\n` +
      `----------------\n` +
      `• *Subtotal:* ₹${totalPrice.toLocaleString('en-IN')}\n` +
      `• *Delivery:* FREE\n` +
      `• *Total Payable:* ₹${totalPrice.toLocaleString('en-IN')}`

    // Encode details for WhatsApp URL
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/919361034037?text=${encodedMessage}`

    // Open WhatsApp URL in new window/tab
    window.open(whatsappUrl, '_blank')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl relative z-10 flex flex-col max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="font-display font-bold text-lg text-text-dark">Checkout Details</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-bg transition-colors cursor-pointer text-text-gray"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-5">
          {/* Product Summary Card */}
          <div className="bg-bg rounded-2xl p-4 flex gap-4 border border-border/50">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-20 object-cover rounded-xl bg-white flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-bold text-primary uppercase bg-primary-bg px-2 py-0.5 rounded-md">
                {product.uid || `MOD-${product.id}`}
              </span>
              <h3 className="font-medium text-sm text-text-dark leading-snug mt-1.5 truncate">
                {product.name}
              </h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-text-gray">
                {size && (
                  <span>
                    Size: <strong className="text-text-dark">{size}</strong>
                  </span>
                )}
                <span>
                  Price: <strong className="text-text-dark">₹{product.price}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Checkout Form fields */}
          <form onSubmit={handlePlaceOrder} className="space-y-4">
            <h3 className="font-display font-bold text-sm text-text-dark uppercase tracking-wider">
              Shipping & Contact Details
            </h3>

            {/* Customer Name */}
            <div>
              <label className="block text-xs font-semibold text-text-body mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-bg text-sm outline-none border focus:bg-white transition-all ${
                    errors.name ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-primary/30'
                  }`}
                />
              </div>
              {errors.name && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.name}</p>}
            </div>

            {/* Customer Phone */}
            <div>
              <label className="block text-xs font-semibold text-text-body mb-1">
                WhatsApp / Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter 10-digit mobile number"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-bg text-sm outline-none border focus:bg-white transition-all ${
                    errors.phone ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-primary/30'
                  }`}
                />
              </div>
              {errors.phone && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.phone}</p>}
            </div>

            {/* Street Address */}
            <div>
              <label className="block text-xs font-semibold text-text-body mb-1">
                Street Address *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-4 w-4 h-4 text-text-light" />
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={2}
                  placeholder="House No, Building, Street Name, Area"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-bg text-sm outline-none border focus:bg-white transition-all resize-none ${
                    errors.address ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-primary/30'
                  }`}
                />
              </div>
              {errors.address && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.address}</p>}
            </div>

            {/* City & Pincode Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-text-body mb-1">
                  City *
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Mumbai"
                  className={`w-full px-4 py-2.5 rounded-xl bg-bg text-sm outline-none border focus:bg-white transition-all ${
                    errors.city ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-primary/30'
                  }`}
                />
                {errors.city && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.city}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-body mb-1">
                  Pincode *
                </label>
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="6-digit code"
                  maxLength={6}
                  className={`w-full px-4 py-2.5 rounded-xl bg-bg text-sm outline-none border focus:bg-white transition-all ${
                    errors.pincode ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-primary/30'
                  }`}
                />
                {errors.pincode && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.pincode}</p>}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border/80 my-4 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-text-dark">Quantity</p>
                  <p className="text-[10px] text-text-gray mt-0.5">Select count of items</p>
                </div>
                <div className="flex items-center border border-border rounded-xl bg-bg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-9 h-9 flex items-center justify-center font-bold text-text-gray hover:bg-border transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-semibold text-sm text-text-dark">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-9 h-9 flex items-center justify-center font-bold text-text-gray hover:bg-border transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Total breakdown */}
            <div className="bg-primary-bg rounded-2xl p-4 space-y-2 text-sm text-text-body border border-primary/10">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span>₹{(product.price * quantity).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-accent-green font-medium">
                <span>Shipping Charges</span>
                <span>FREE</span>
              </div>
              <div className="border-t border-primary/20 pt-2 flex justify-between font-bold text-text-dark">
                <span>Total Amount</span>
                <span className="text-primary text-base">₹{(product.price * quantity).toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Action Place Order */}
            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 cursor-pointer transition-shadow"
            >
              <Send className="w-4 h-4 fill-white" />
              Place Order via WhatsApp
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

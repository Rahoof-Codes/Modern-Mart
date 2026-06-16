import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart, Truck, Check } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product, index, onBuyNow }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const [wishlisted, setWishlisted] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  // Sizes depending on category: Fashion has S-XXL, Footwear has 7-10
  const isFashion = product.category === 'Fashion'
  const isFootwear = product.category === 'Footwear'
  const sizes = isFashion ? ['S', 'M', 'L', 'XL', 'XXL'] : isFootwear ? ['7', '8', '9', '10'] : []
  
  // Pre-select 'M' for fashion, '8' for footwear
  const [selectedSize, setSelectedSize] = useState(isFashion ? 'M' : isFootwear ? '8' : '')

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  const handleAdd = (e) => {
    e.stopPropagation()
    addItem(product, selectedSize)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const handleBuyNow = (e) => {
    e.stopPropagation()
    if (onBuyNow) {
      onBuyNow(product, selectedSize)
    }
  }

  const getTagClass = (tag) => {
    const t = tag.toLowerCase()
    if (t.includes('best')) return 'tag-bestseller'
    if (t.includes('trend')) return 'tag-trending'
    if (t.includes('new')) return 'tag-new'
    if (t.includes('popular')) return 'tag-popular'
    if (t.includes('top')) return 'tag-top'
    return 'tag-popular'
  }

  return (
    <motion.article
      id={`product-${product.id}`}
      className="bg-white rounded-2xl overflow-hidden card-hover group cursor-pointer border border-border/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.05, 0.3),
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-bg">
        {/* Shimmer loader */}
        {!imgLoaded && (
          <div className="absolute inset-0 shimmer" />
        )}

        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
        />

        {/* Tag */}
        {product.tag && (
          <span className={`absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${getTagClass(product.tag)}`}>
            {product.tag}
          </span>
        )}

        {/* Discount badge */}
        {discount > 0 && (
          <span className="absolute top-2.5 right-2.5 bg-deal-red text-white text-[11px] font-bold px-2 py-1 rounded-lg">
            {discount}% OFF
          </span>
        )}

        {/* Wishlist */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            setWishlisted(!wishlisted)
          }}
          className="absolute bottom-2.5 right-2.5 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          whileTap={{ scale: 0.85 }}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              wishlisted ? 'text-primary fill-primary' : 'text-text-gray'
            }`}
          />
        </motion.button>
      </div>

      {/* Info */}
      <div className="p-3 sm:p-4">
        {/* Category */}
        <p className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-1">
          {product.category}
        </p>

        {/* Name */}
        <h3 className="font-medium text-sm text-text-dark leading-snug mb-2 line-clamp-2 min-h-[2.5em]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-2.5">
          <div className="flex items-center gap-0.5 bg-accent-green text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
            <span>{product.rating}</span>
            <Star className="w-2.5 h-2.5 fill-current" />
          </div>
          <span className="text-text-light text-xs">
            ({product.reviews.toLocaleString('en-IN')})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="font-display font-bold text-lg text-text-dark">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {discount > 0 && (
            <span className="text-text-light text-sm line-through">
              ₹{product.mrp.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* Free delivery badge */}
        {product.freeDelivery && (
          <div className="flex items-center gap-1 text-accent-green text-[11px] font-medium mb-3">
            <Truck className="w-3.5 h-3.5" />
            <span>Free Delivery</span>
          </div>
        )}

        {/* Size Selector */}
        {sizes.length > 0 && (
          <div className="mb-3">
            <p className="text-[11px] font-semibold text-text-gray uppercase tracking-wider mb-1.5">
              Select Size: <span className="font-bold text-primary">{selectedSize}</span>
            </p>
            <div className="flex flex-wrap gap-1">
              {sizes.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(sz);
                  }}
                  className={`min-w-[28px] h-7 text-xs font-bold rounded-lg border transition-all cursor-pointer flex items-center justify-center ${
                    selectedSize === sz
                      ? 'bg-primary text-white border-primary shadow-sm'
                      : 'bg-white text-text-body border-border hover:bg-bg'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-2">
          {/* Add to cart button */}
          <motion.button
            id={`add-to-cart-${product.id}`}
            onClick={handleAdd}
            className={`flex-1 py-2 rounded-xl text-[13px] font-semibold transition-all cursor-pointer flex items-center justify-center gap-1 ${
              added
                ? 'bg-accent-green-bg text-accent-green border border-accent-green/30'
                : 'bg-primary-bg text-primary border border-primary/20 hover:bg-primary hover:text-white'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5" />
                Add Cart
              </>
            )}
          </motion.button>

          {/* Buy Now button */}
          <motion.button
            id={`buy-now-${product.id}`}
            onClick={handleBuyNow}
            className="flex-1 py-2 rounded-xl text-[13px] font-semibold bg-primary text-white border border-transparent hover:bg-primary-dark shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1"
            whileTap={{ scale: 0.95 }}
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}

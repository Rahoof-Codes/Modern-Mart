import { useMemo } from 'react'
import { motion } from 'framer-motion'
import products from '../data/products.json'
import ProductCard from './ProductCard'

export default function ProductGrid({ activeCategory, searchQuery, onBuyNow }) {
  const filtered = useMemo(() => {
    let list = products
    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory)
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.uid && p.uid.toLowerCase().includes(q)) ||
          p.id.toString() === q
      )
    }
    return list
  }, [activeCategory, searchQuery])

  return (
    <section id="products" className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-text-dark">
              {activeCategory === 'All' ? 'Products For You' : activeCategory}
            </h2>
            <p className="text-text-gray text-sm mt-0.5">
              {filtered.length} products · Lowest prices guaranteed
            </p>
          </div>
          <select className="text-sm text-text-gray bg-white border border-border rounded-xl px-3 py-2 outline-none focus:border-primary/30">
            <option>Sort by: Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
            <option>Newest First</option>
          </select>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} onBuyNow={onBuyNow} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-text-gray font-medium">
              No products found in this category
            </p>
            <p className="text-text-light text-sm mt-1">
              Try exploring other categories
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

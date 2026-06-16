import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  { name: 'All', emoji: '✨', color: 'from-pink-500 to-rose-500' },
  { name: 'Footwear', emoji: '👟', color: 'from-orange-400 to-amber-500' },
  { name: 'Fashion', emoji: '👗', color: 'from-fuchsia-500 to-pink-500' },
  { name: 'Gifts', emoji: '🎁', color: 'from-violet-500 to-purple-500' },
  { name: 'Home Decor', emoji: '🏡', color: 'from-emerald-500 to-teal-500' },
  { name: 'Kitchen', emoji: '🍳', color: 'from-yellow-500 to-orange-500' },
  { name: 'Electronics', emoji: '🎧', color: 'from-blue-500 to-indigo-500' },
  { name: 'Accessories', emoji: '📱', color: 'from-cyan-500 to-sky-500' },
]

export default function CategoryBar({ activeCategory, onCategoryChange }) {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 200, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3 relative">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll(-1)}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-md rounded-full items-center justify-center hover:shadow-lg transition-shadow"
        >
          <ChevronLeft className="w-4 h-4 text-text-gray" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-md rounded-full items-center justify-center hover:shadow-lg transition-shadow"
        >
          <ChevronRight className="w-4 h-4 text-text-gray" />
        </button>

        {/* Category pills */}
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto hide-scrollbar px-2 md:px-10"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.name
            return (
              <motion.button
                key={cat.name}
                onClick={() => onCategoryChange(cat.name)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'bg-bg text-text-body hover:bg-border'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-base">{cat.emoji}</span>
                <span>{cat.name}</span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

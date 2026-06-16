import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const banners = [
  {
    id: 1,
    title: 'Mega Footwear Sale',
    subtitle: 'Up to 70% OFF on Slippers, Shoes & Heels',
    cta: 'Shop Now',
    gradient: 'from-pink-500 via-rose-500 to-orange-400',
    emoji: '👟',
  },
  {
    id: 2,
    title: 'Gift Store Open',
    subtitle: 'Perfect gifts starting at just ₹199',
    cta: 'Send Gifts',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    emoji: '🎁',
  },
  {
    id: 3,
    title: 'Fashion Fiesta',
    subtitle: 'Kurtis, Sarees & T-Shirts — Flat 60% OFF',
    cta: 'Explore',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    emoji: '👗',
  },
  {
    id: 4,
    title: 'Home Makeover',
    subtitle: 'Decor, Bedsheets & Lights from ₹149',
    cta: 'Decorate',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    emoji: '🏡',
  },
]

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % banners.length)
    }, 4000)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (i) => {
    setCurrent(i)
    resetTimer()
  }
  const prev = () => goTo((current - 1 + banners.length) % banners.length)
  const next = () => goTo((current + 1) % banners.length)

  return (
    <section className="relative w-full overflow-hidden" id="banners">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {banners.map((b) => (
              <div
                key={b.id}
                className={`w-full flex-shrink-0 bg-gradient-to-r ${b.gradient} px-6 sm:px-10 py-8 sm:py-12 flex items-center justify-between min-h-[160px] sm:min-h-[200px]`}
              >
                <div className="flex-1">
                  <p className="text-white/80 text-xs sm:text-sm font-medium mb-1">
                    Limited Time Offer
                  </p>
                  <h2 className="font-display font-bold text-xl sm:text-3xl text-white mb-2 leading-tight">
                    {b.title}
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base mb-4">
                    {b.subtitle}
                  </p>
                  <button className="bg-white text-text-dark font-semibold text-sm px-5 py-2.5 rounded-xl hover:shadow-lg transition-shadow">
                    {b.cta} →
                  </button>
                </div>
                <div className="text-6xl sm:text-8xl ml-4 select-none">{b.emoji}</div>
              </div>
            ))}
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-text-dark" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-text-dark" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-6 bg-white'
                    : 'w-1.5 bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

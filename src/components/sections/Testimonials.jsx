import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { testimonials } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { fadeUpVariant, staggerContainerVariant } from '../../utils/animations'

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`text-sm ${i < rating ? 'text-gold' : 'text-white/20'}`}>
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { ref, inView } = useScrollReveal()

  const prev = () => setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((i) => (i + 1) % testimonials.length)

  const testimony = testimonials[current]

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 md:py-36"
      style={{ background: 'linear-gradient(135deg, #2C2724 0%, #1a1614 60%, #2C2724 100%)' }}
    >
      {/* Large background quote */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="font-playfair text-[30vw] text-white/2 leading-none select-none"
          style={{ lineHeight: 0.8 }}
        >
          "
        </span>
      </div>

      <div className="section-padding relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainerVariant}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUpVariant} className="label-text text-gold tracking-widest3 mb-4">
            Client Love
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="heading-lg text-white">
            Words from our{' '}
            <span className="italic text-gold">Happy Clients</span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="w-12 h-px bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="glass-dark p-8 md:p-12 text-center"
            >
              <span className="font-playfair text-6xl text-gold/30 leading-none block mb-2">"</span>
              <StarRating rating={testimony.rating} />
              <blockquote className="font-cormorant text-xl md:text-2xl text-white/80 italic leading-relaxed mb-8">
                {testimony.quote}
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimony.imageUrl}
                  alt={testimony.name}
                  className="w-12 h-12 rounded-full object-cover border border-gold/30"
                  loading="lazy"
                />
                <div className="text-left">
                  <p className="font-playfair text-white">{testimony.name}</p>
                  <p className="label-text text-gold text-[10px]">{testimony.event}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors duration-300"
            >
              <FiChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-1 bg-gold'
                      : 'w-2 h-1 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors duration-300"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import { brand } from '../../data/siteContent'

// Floating particle component
function Particle({ x, y, delay }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-gold/40"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.4, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
}))

export default function Hero() {
  const videoRef = useRef(null)
  const [videoError, setVideoError] = useState(true) // Using image fallback by default

  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(brand.whatsappMessage)}`

  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Fallback luxury image */}
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=90"
          alt="Luxury wedding photography"
          className="w-full h-full object-cover scale-105"
          style={{ filter: 'brightness(0.55)' }}
          loading="eager"
        />

        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-dark/20" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <Particle key={p.id} {...p} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding w-full max-w-6xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="label-text text-gold tracking-widest3 mb-6"
        >
          Luxury Wedding Photography
        </motion.p>

        {/* Main heading */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="font-playfair text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-none tracking-tight"
          >
            Creative Krishna
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6 pb-4">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.33, 1, 0.68, 1] }}
            className="font-playfair italic text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-gold leading-[1.08] tracking-tight"
          >
            Photography
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-cormorant text-xl md:text-2xl lg:text-3xl text-white/80 font-light tracking-wide mb-3"
        >
          {brand.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="body-text text-white/50 mb-12 tracking-widest"
        >
          {brand.subTagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToPortfolio}
            className="btn-outline text-white border-white/60 hover:border-gold hover:text-gold hover:shadow-gold/20 min-w-[200px]"
          >
            View Portfolio
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary min-w-[200px] justify-center"
          >
            <FaWhatsapp size={16} />
            Book Consultation
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector('#trust-bar')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="label-text text-[10px] tracking-widest3">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HiArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  )
}

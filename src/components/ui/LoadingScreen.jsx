import { motion } from 'framer-motion'
import { brand } from '../../data/siteContent'

export default function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
      onAnimationComplete={onComplete}
    >
      {/* Brand name reveal */}
      <div className="overflow-hidden mb-2">
        <motion.h1
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          className="font-playfair text-3xl md:text-4xl text-white tracking-wide"
        >
          {brand.shortName}
        </motion.h1>
      </div>

      <div className="overflow-hidden mb-12">
        <motion.p
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.33, 1, 0.68, 1] }}
          className="font-cormorant italic text-gold text-lg tracking-widest"
        >
          Jamshedpur
        </motion.p>
      </div>

      {/* Progress bar */}
      <div className="w-32 h-px bg-white/10 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-full bg-gold"
          onAnimationComplete={onComplete}
        />
      </div>
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { brand } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { fadeUpVariant, staggerContainerVariant } from '../../utils/animations'

export default function CTAStrip() {
  const { ref, inView } = useScrollReveal()
  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
    'Hi! I\'d like to book a consultation for my wedding photography. Can we discuss the details?'
  )}`

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80"
          alt="Wedding"
          className="w-full h-full object-cover brightness-[0.25]"
          loading="lazy"
        />
        {/* Animated gold glow */}
        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(199,164,106,0.25) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="section-padding relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainerVariant}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUpVariant} className="label-text text-gold tracking-widest3 mb-6">
            Ready to Begin?
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="heading-lg text-white mb-6">
            Let's Create Your Dream{' '}
            <span className="italic text-gold">Wedding Story</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="font-cormorant text-xl text-white/60 italic mb-10 leading-relaxed">
            Every love story deserves to be told beautifully. Let's capture yours.
          </motion.p>

          <motion.div variants={fadeUpVariant}>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-white font-inter text-sm tracking-widest uppercase shadow-2xl shadow-gold/30 hover:shadow-gold/50 hover:bg-gold-dark transition-all duration-300"
            >
              <FaWhatsapp size={20} />
              Book on WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { brand } from '../../data/siteContent'

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(brand.whatsappMessage)}`

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltipOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.2 }}
                className="bg-dark text-white p-4 shadow-2xl max-w-[220px] relative"
              >
                <button
                  onClick={() => setTooltipOpen(false)}
                  className="absolute top-2 right-2 text-white/40 hover:text-white"
                  aria-label="Close"
                >
                  <HiX size={12} />
                </button>
                <p className="font-cormorant text-base italic mb-1">Book a Consultation</p>
                <p className="body-text text-white/60 text-xs mb-3">
                  Chat with us on WhatsApp for instant booking
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 text-xs font-inter tracking-wide hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <FaWhatsapp size={14} />
                  Start Chat
                </a>
                {/* Arrow */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-dark rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.button
            onClick={() => setTooltipOpen(!tooltipOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open WhatsApp chat"
            className="w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-2xl shadow-green-500/30 relative"
            style={{ borderRadius: '50%' }}
          >
            <FaWhatsapp size={26} color="white" />
            {/* Pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
              className="absolute inset-0 bg-[#25D366] rounded-full"
              style={{ zIndex: -1 }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { motion } from 'framer-motion'
import { FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { brand, navLinks, services } from '../../data/siteContent'
import { fadeUpVariant, staggerContainerVariant } from '../../utils/animations'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Footer() {
  const { ref, inView } = useScrollReveal(0.1)
  const year = new Date().getFullYear()
  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(brand.whatsappMessage)}`

  const handleNavClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="bg-dark text-white/70">
      {/* Main footer */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerContainerVariant}
        className="section-padding pt-20 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
      >
        {/* Brand */}
        <motion.div variants={fadeUpVariant} className="lg:col-span-1">
          <h3 className="font-playfair text-2xl text-white mb-1">{brand.shortName}</h3>
          <p className="font-cormorant text-sm text-gold tracking-widest uppercase mb-6">Jamshedpur</p>
          <p className="body-text text-white/50 leading-relaxed mb-6">
            Luxury wedding photography & cinematic films. Capturing love stories that last forever.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
            >
              <FiInstagram size={16} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-green-400 hover:text-green-400 transition-colors duration-300"
            >
              <FaWhatsapp size={16} />
            </a>
            <a
              href={`mailto:${brand.email}`}
              aria-label="Email"
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
            >
              <FiMail size={16} />
            </a>
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div variants={fadeUpVariant}>
          <h4 className="label-text text-gold mb-6">Navigate</h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="body-text hover:text-gold hover:translate-x-1 inline-block transition-all duration-300"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={fadeUpVariant}>
          <h4 className="label-text text-gold mb-6">Services</h4>
          <ul className="space-y-3">
            {services.slice(0, 6).map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => handleNavClick('#services')}
                  className="body-text hover:text-gold hover:translate-x-1 inline-block transition-all duration-300"
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUpVariant}>
          <h4 className="label-text text-gold mb-6">Get in Touch</h4>
          <ul className="space-y-4">
            <li>
              <a
                href={`tel:${brand.phone}`}
                className="flex items-start gap-3 hover:text-gold transition-colors duration-300 group"
              >
                <FiPhone size={16} className="mt-0.5 flex-shrink-0 group-hover:text-gold" />
                <span className="body-text">{brand.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${brand.email}`}
                className="flex items-start gap-3 hover:text-gold transition-colors duration-300 group"
              >
                <FiMail size={16} className="mt-0.5 flex-shrink-0 group-hover:text-gold" />
                <span className="body-text break-all">{brand.email}</span>
              </a>
            </li>
            <li>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-gold transition-colors duration-300 group"
              >
                <FiInstagram size={16} className="mt-0.5 flex-shrink-0 group-hover:text-gold" />
                <span className="body-text">{brand.instagram}</span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin size={16} className="mt-0.5 flex-shrink-0 text-gold" />
              <span className="body-text">{brand.location}</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="section-padding">
        <div className="border-t border-white/10" />
      </div>

      {/* Bottom bar */}
      <div className="section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="body-text text-white/30 text-center md:text-left">
          © {year} {brand.name}. All Rights Reserved.
        </p>
        <p className="font-cormorant italic text-gold/60 text-sm tracking-wide">
          Capturing Love Stories That Last Forever
        </p>
      </div>
    </footer>
  )
}

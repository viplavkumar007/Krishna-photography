import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { brand, navLinks } from '../../data/siteContent'
import { useActiveSection } from '../../hooks/useActiveSection'

const logoWhiteSrc = '/creative-krishna-logo-white.png'
const logoDarkSrc = '/creative-krishna-logo-dark.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(brand.whatsappMessage)}`

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
        className={`z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-lg shadow-sm border-b border-gold/10'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`label-text transition-colors duration-300 gold-underline ${
                    scrolled ? 'text-text-dark' : 'text-white'
                  } ${isActive ? 'text-gold' : ''}`}
                >
                  {link.label}
                </button>
              )
            })}
          </nav>

          {/* Logo / Brand */}
          <button
            onClick={() => handleNavClick('#home')}
            className="h-12 w-40 md:h-16 md:w-52 -translate-x-3 md:-translate-x-5"
            aria-label={brand.name}
          >
            <img
              src={scrolled ? logoDarkSrc : logoWhiteSrc}
              alt={brand.name}
              className="h-full w-full object-contain object-center"
            />
          </button>

          {/* Right nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(3).map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`label-text transition-colors duration-300 gold-underline ${
                    scrolled ? 'text-text-dark' : 'text-white'
                  } ${isActive ? 'text-gold' : ''}`}
                >
                  {link.label}
                </button>
              )
            })}

            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-current/20">
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`transition-colors duration-300 hover:text-gold ${
                  scrolled ? 'text-text-dark' : 'text-white'
                }`}
              >
                <FiInstagram size={18} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2 px-5 text-[10px] bg-gold"
              >
                <FaWhatsapp size={14} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              scrolled ? 'text-text-dark' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-dark flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <img
                src={logoWhiteSrc}
                alt={brand.name}
                className="h-12 w-40 object-contain object-center"
              />
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <HiX size={24} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-playfair text-3xl text-white/80 hover:text-gold text-left transition-colors duration-300"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="px-8 pb-12 flex items-center gap-6">
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors duration-300"
              >
                <FiInstagram size={22} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FaWhatsapp size={16} />
                Book on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

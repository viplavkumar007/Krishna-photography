import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiSend, FiCheck } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { brand } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { fadeUpVariant, slideRightVariant, slideLeftVariant, staggerContainerVariant } from '../../utils/animations'

const eventTypes = [
  'Wedding',
  'Pre-Wedding Shoot',
  'Engagement',
  'Birthday',
  'Destination Wedding',
  'Other',
]

function FloatingInput({ label, type = 'text', value, onChange, name, required, as }) {
  const hasValue = value?.length > 0
  const Tag = as || 'input'

  return (
    <div className="relative">
      <Tag
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={as === 'textarea' ? 4 : undefined}
        className={`w-full bg-transparent border-b border-gold/30 focus:border-gold pt-6 pb-2 font-inter text-sm text-text-dark outline-none transition-colors duration-300 resize-none peer ${as === 'textarea' ? 'min-h-[100px]' : ''}`}
        placeholder=" "
        aria-label={label}
      />
      <label
        htmlFor={name}
        className={`absolute left-0 font-inter text-xs tracking-widest uppercase transition-all duration-300 pointer-events-none ${
          hasValue
            ? 'top-1 text-[10px] text-gold'
            : 'top-6 text-muted peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold'
        }`}
      >
        {label}
      </label>
    </div>
  )
}

export default function Contact() {
  const { ref, inView } = useScrollReveal()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate form submission — replace with your backend/Formspree/EmailJS
    await new Promise((r) => setTimeout(r, 1800))
    setStatus('success')

    // Also open WhatsApp with form details
    const msg = `Hi! I'd like to book a consultation.\n\nName: ${form.name}\nPhone: ${form.phone}\nEvent: ${form.eventType}\nDate: ${form.eventDate}\n\n${form.message}`
    window.open(`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(brand.whatsappMessage)}`

  return (
    <section id="contact" className="bg-cream py-24 md:py-36">
      <div className="section-padding">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainerVariant}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUpVariant} className="label-text text-gold tracking-widest3 mb-4">
            Let's Connect
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="heading-lg text-text-dark">
            Book a <span className="italic">Consultation</span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="w-12 h-px bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact info */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainerVariant}
            className="lg:col-span-2 space-y-10"
          >
            <motion.div variants={fadeUpVariant}>
              <h3 className="font-playfair text-2xl text-text-dark mb-1">{brand.name}</h3>
              <p className="font-cormorant italic text-muted">{brand.location}</p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="space-y-6">
              {[
                { icon: FiPhone, label: 'Phone', value: brand.phoneDisplay, href: `tel:${brand.phone}` },
                { icon: FiMail, label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
                { icon: FiInstagram, label: 'Instagram', value: brand.instagram, href: brand.instagramUrl, target: '_blank' },
                { icon: FiMapPin, label: 'Location', value: brand.location, href: null },
              ].map(({ icon: Icon, label, value, href, target }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="label-text text-muted text-[10px] mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={target}
                        rel={target ? 'noopener noreferrer' : undefined}
                        className="body-text text-text-dark hover:text-gold transition-colors duration-300"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="body-text text-text-dark">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 w-fit"
              >
                <FaWhatsapp size={20} />
                <span className="font-inter text-sm tracking-wide">Chat on WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideLeftVariant}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-20 text-center"
              >
                <div className="w-16 h-16 border border-gold flex items-center justify-center mb-6">
                  <FiCheck size={28} className="text-gold" />
                </div>
                <h3 className="font-playfair text-2xl text-text-dark mb-3">Message Sent!</h3>
                <p className="body-text text-muted max-w-sm">
                  Thank you for reaching out. We've opened WhatsApp so you can connect directly. We'll be in touch shortly!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <FloatingInput
                    label="Your Name *"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <FloatingInput
                    label="Phone Number *"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <FloatingInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />

                {/* Event type */}
                <div className="relative">
                  <select
                    name="eventType"
                    id="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gold/30 focus:border-gold pt-6 pb-2 font-inter text-sm text-text-dark outline-none transition-colors duration-300 appearance-none cursor-pointer"
                    aria-label="Event Type"
                  >
                    <option value="" disabled></option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <label
                    htmlFor="eventType"
                    className={`absolute left-0 font-inter text-xs tracking-widest uppercase transition-all duration-300 pointer-events-none ${
                      form.eventType ? 'top-1 text-[10px] text-gold' : 'top-6 text-muted'
                    }`}
                  >
                    Event Type *
                  </label>
                </div>

                <FloatingInput
                  label="Event Date"
                  name="eventDate"
                  type="date"
                  value={form.eventDate}
                  onChange={handleChange}
                />

                <FloatingInput
                  label="Tell Us About Your Wedding"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  as="textarea"
                />

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send enquiry"
                >
                  {status === 'loading' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={15} />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

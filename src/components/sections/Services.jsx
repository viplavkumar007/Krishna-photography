import { motion } from 'framer-motion'
import { services } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { fadeUpVariant, staggerContainerVariant } from '../../utils/animations'

function ServiceCard({ service, index }) {
  return (
    <motion.div
      variants={fadeUpVariant}
      className="group relative overflow-hidden cursor-pointer"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Arch image container */}
      <div
        className="relative overflow-hidden mb-5"
        style={{
          borderRadius: '9999px 9999px 0 0',
          aspectRatio: '3/4',
        }}
      >
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-all duration-500" />
      </div>

      {/* Text */}
      <div className="text-center px-2">
        <h3 className="font-playfair text-lg text-text-dark mb-2 group-hover:text-gold transition-colors duration-300">
          {service.title}
        </h3>
        <p className="body-text text-muted text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-400 max-h-0 group-hover:max-h-20 overflow-hidden">
          {service.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const { ref, inView } = useScrollReveal(0.1)
  const { ref: gridRef, inView: gridInView } = useScrollReveal(0.05)

  return (
    <section id="services" className="bg-cream-dark py-24 md:py-36">
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
            What We Offer
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="heading-lg text-text-dark">
            Our <span className="italic">Services</span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="w-12 h-px bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Service grid */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariant}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

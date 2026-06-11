import { motion } from 'framer-motion'
import { whyUs } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { fadeUpVariant, staggerContainerVariant } from '../../utils/animations'

export default function WhyUs() {
  const { ref, inView } = useScrollReveal()
  const { ref: gridRef, inView: gridInView } = useScrollReveal(0.05)

  return (
    <section className="bg-dark py-24 md:py-36 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #C7A46A 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
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
            Why Us
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="heading-lg text-white">
            The <span className="italic text-gold">Difference</span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="w-12 h-px bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariant}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5"
        >
          {whyUs.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariant}
              className="bg-dark p-8 hover:bg-dark-light transition-colors duration-300 group"
            >
              <div className="w-8 h-px bg-gold mb-6 group-hover:w-16 transition-all duration-500" />
              <h3 className="font-playfair text-lg text-white mb-3 group-hover:text-gold transition-colors duration-300">
                {item.title}
              </h3>
              <p className="body-text text-white/40 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

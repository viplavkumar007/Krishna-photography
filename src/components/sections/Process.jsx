import { motion } from 'framer-motion'
import { process } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { fadeUpVariant, staggerContainerVariant } from '../../utils/animations'

export default function Process() {
  const { ref, inView } = useScrollReveal()
  const { ref: stepsRef, inView: stepsInView } = useScrollReveal(0.1)

  return (
    <section className="bg-cream py-24 md:py-36">
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
            How It Works
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="heading-lg text-text-dark">
            Our <span className="italic">Process</span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="w-12 h-px bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Steps */}
        <motion.div
          ref={stepsRef}
          initial="hidden"
          animate={stepsInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariant}
          className="relative"
        >
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gold/20" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {process.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                className="flex flex-col items-center text-center group"
              >
                {/* Step number */}
                <div className="relative w-16 h-16 mb-6">
                  <div className="w-16 h-16 border border-gold/30 flex items-center justify-center bg-cream group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                    <span className="font-playfair text-xl text-gold group-hover:text-white transition-colors duration-500">
                      {step.step}
                    </span>
                  </div>
                </div>

                <h3 className="font-playfair text-lg text-text-dark mb-3 group-hover:text-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="body-text text-muted text-sm leading-relaxed max-w-[160px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

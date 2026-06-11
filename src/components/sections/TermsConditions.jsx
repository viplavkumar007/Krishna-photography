import { motion } from 'framer-motion'
import { FiCamera, FiCreditCard, FiMapPin, FiUsers } from 'react-icons/fi'
import { FaCheckCircle } from 'react-icons/fa'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { fadeUpVariant, staggerContainerVariant } from '../../utils/animations'

const terms = [
  {
    title: 'Equipment',
    icon: FiCamera,
    items: [
      'Canon / Nikon / Sony DSLR & Mirrorless Cameras',
      'Professional Lights',
      'Gimbals',
      'Drones',
    ],
  },
  {
    title: 'Team',
    icon: FiUsers,
    items: [
      'Professional Photographers',
      'Professional Videographers',
      'Additional team for large weddings',
    ],
  },
  {
    title: 'Booking Policy',
    icon: FiCreditCard,
    items: [
      '50% Advance Required',
      '80% Payment must be cleared after album design approval',
      'Remaining payment before final delivery',
    ],
  },
  {
    title: 'Travel',
    icon: FiMapPin,
    items: [
      'Travel & accommodation extra for destination/outstation shoots.',
    ],
  },
]

export default function TermsConditions() {
  const { ref, inView } = useScrollReveal()
  const { ref: gridRef, inView: gridInView } = useScrollReveal(0.05)

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="section-padding">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainerVariant}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUpVariant} className="label-text text-gold tracking-widest3 mb-4">
            Booking Details
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="heading-lg text-text-dark">
            Terms & <span className="italic">Conditions</span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="w-12 h-px bg-gold mx-auto mt-6" />
        </motion.div>

        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariant}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {terms.map((term) => {
            const Icon = term.icon

            return (
              <motion.div
                key={term.title}
                variants={fadeUpVariant}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="border border-gold/20 bg-white/40 p-7 transition-all duration-300 hover:border-gold/60 hover:bg-white/70"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center border border-gold/40 text-gold">
                  <Icon size={20} />
                </div>
                <h3 className="font-playfair text-2xl text-text-dark mb-5">
                  {term.title}
                </h3>
                <ul className="space-y-3">
                  {term.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FaCheckCircle size={13} className="mt-1 flex-shrink-0 text-gold/80" />
                      <span className="body-text text-sm text-muted leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

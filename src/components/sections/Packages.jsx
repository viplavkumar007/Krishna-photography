import { motion } from 'framer-motion'
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import { packages, miniPackages, brand } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { fadeUpVariant, staggerContainerVariant } from '../../utils/animations'

function PackageCard({ pkg }) {
  const isGold = pkg.id === 'gold'
  const isPlatinum = pkg.id === 'platinum'

  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I'm interested in the ${pkg.name} package (${pkg.priceRange}). Can we discuss?`
  )}`

  return (
    <motion.div
      variants={fadeUpVariant}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative flex flex-col p-8 border transition-all duration-500 ${
        isGold
          ? 'border-gold bg-dark text-white shadow-2xl shadow-gold/10'
          : isPlatinum
          ? 'border-gold/60 bg-cream hover:border-gold'
          : 'border-gold/20 bg-cream hover:border-gold/60'
      }`}
    >
      {/* Badge */}
      {pkg.badge && (
        <div
          className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 label-text text-[10px] ${
            isGold ? 'bg-gold text-white' : 'bg-dark text-gold border border-gold'
          }`}
        >
          {pkg.badge}
        </div>
      )}

      {/* Package name */}
      <p className={`label-text tracking-widest3 mb-2 ${isGold ? 'text-gold' : 'text-muted'}`}>
        {pkg.name}
      </p>
      <h3
        className={`font-playfair text-3xl mb-1 ${
          isGold ? 'text-white' : 'text-text-dark'
        }`}
      >
        {pkg.priceRange}
      </h3>

      <div className={`w-8 h-px mt-4 mb-6 ${isGold ? 'bg-gold' : 'bg-gold/40'}`} />

      {/* Features */}
      <ul className="flex-1 space-y-3 mb-8">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <FaCheckCircle
              size={14}
              className={`mt-0.5 flex-shrink-0 ${isGold ? 'text-gold' : 'text-gold/70'}`}
            />
            <span
              className={`body-text text-sm ${isGold ? 'text-white/80' : 'text-muted'}`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2 py-3.5 font-inter text-xs tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5 ${
          isGold
            ? 'bg-gold text-white hover:bg-gold-dark'
            : 'border border-gold/50 text-gold hover:bg-gold hover:text-white'
        }`}
      >
        <FaWhatsapp size={14} />
        {pkg.cta}
      </a>
    </motion.div>
  )
}

export default function Packages() {
  const { ref, inView } = useScrollReveal()
  const { ref: gridRef, inView: gridInView } = useScrollReveal(0.05)
  const { ref: miniRef, inView: miniInView } = useScrollReveal()

  const whatsappBase = `https://wa.me/${brand.whatsappNumber}?text=`

  return (
    <section id="packages" className="bg-cream py-24 md:py-36">
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
            Investment
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="heading-lg text-text-dark">
            Our <span className="italic">Packages</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="body-text text-muted mt-4 max-w-lg mx-auto">
            Every love story is different. Choose a package that fits your vision, or let us create a custom plan together.
          </motion.p>
          <motion.div variants={fadeUpVariant} className="w-12 h-px bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Main packages */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariant}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </motion.div>

        {/* Mini packages */}
        <motion.div
          ref={miniRef}
          initial="hidden"
          animate={miniInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariant}
        >
          <motion.p variants={fadeUpVariant} className="label-text text-gold tracking-widest3 mb-8 text-center">
            À La Carte
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {miniPackages.map((mini, i) => (
              <motion.a
                key={i}
                variants={fadeUpVariant}
                href={`${whatsappBase}${encodeURIComponent(`Hi, I'm interested in ${mini.name} photography. Can we discuss?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 border border-gold/20 hover:border-gold text-center transition-all duration-300 group hover:-translate-y-1"
              >
                <h4 className="font-playfair text-xl text-text-dark mb-1 group-hover:text-gold transition-colors duration-300">
                  {mini.name}
                </h4>
                <p className="body-text text-muted font-medium mt-2">{mini.price}</p>
                {mini.note && (
                  <p className="label-text text-gold text-[10px] tracking-widest mt-2">{mini.note}</p>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Custom package note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={miniInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center body-text text-muted mt-10"
        >
          All packages are customizable.{' '}
          <a
            href={`https://wa.me/${brand.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            Contact us
          </a>{' '}
          for a custom quote.
        </motion.p>
      </div>
    </section>
  )
}

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

function MiniPackageCard({ mini, index, whatsappBase }) {
  const isGold = index === 1
  const isPlatinum = index === 2
  const isDetailed = Boolean(mini.includes?.length || mini.duration)
  const whatsappUrl = `${whatsappBase}${encodeURIComponent(
    `Hi, I'm interested in ${mini.name} photography. Can we discuss?`
  )}`

  return (
    <motion.a
      variants={fadeUpVariant}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col p-8 border text-center transition-all duration-500 ${
        isGold
          ? 'border-gold bg-dark text-white shadow-2xl shadow-gold/10'
          : isPlatinum
          ? 'border-gold/60 bg-cream hover:border-gold'
          : 'border-gold/20 bg-cream hover:border-gold/60'
      }`}
    >
      {isGold && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 label-text text-[10px] bg-gold text-white">
          Popular Add-On
        </div>
      )}

      <p className={`label-text tracking-widest3 mb-2 ${isGold ? 'text-gold' : 'text-muted'}`}>
        {isPlatinum ? 'Premium Session' : 'Add-On Session'}
      </p>
      <h4 className={`font-playfair text-3xl mb-1 ${isGold ? 'text-white' : 'text-text-dark'}`}>
        {mini.name}
      </h4>
      <p className={`body-text font-medium ${isGold ? 'text-white/80' : 'text-muted'}`}>
        {mini.price}
      </p>
      {mini.priceNote && (
        <p className="label-text text-gold text-[10px] tracking-widest mt-2">
          {mini.priceNote}
        </p>
      )}

      <div className={`w-8 h-px mx-auto mt-5 mb-6 ${isGold ? 'bg-gold' : 'bg-gold/40'}`} />

      {isDetailed ? (
        <div className="flex-1 text-left">
          <p className={`label-text text-[10px] tracking-widest mb-4 ${isGold ? 'text-gold' : 'text-muted'}`}>
            Includes
          </p>
          <ul className="space-y-3">
            {mini.includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <FaCheckCircle size={13} className="mt-1 flex-shrink-0 text-gold/80" />
                <span className={`body-text text-sm leading-relaxed ${isGold ? 'text-white/70' : 'text-muted'}`}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
          {mini.duration && (
            <p className={`body-text text-sm font-medium mt-6 ${isGold ? 'text-white/80' : 'text-text-dark'}`}>
              Duration: <span className="text-gold">{mini.duration}</span>
            </p>
          )}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className={`body-text text-sm ${isGold ? 'text-white/70' : 'text-muted'}`}>
            {mini.note || 'Custom coverage available'}
          </p>
        </div>
      )}

      <span
        className={`mt-8 flex items-center justify-center gap-2 py-3.5 font-inter text-xs tracking-widest uppercase transition-all duration-300 ${
          isGold
            ? 'bg-gold text-white group-hover:bg-gold-dark'
            : 'border border-gold/50 text-gold group-hover:bg-gold group-hover:text-white'
        }`}
      >
        <FaWhatsapp size={14} />
        Enquire Now
      </span>
    </motion.a>
  )
}

const addOnServices = [
  { service: 'Drone Coverage', price: '₹5,000/day' },
  { service: 'Live Streaming', price: '₹15,000/event' },
  { service: 'Raw Photos & Videos', price: '₹5,000' },
  { service: 'Extra Album', price: '₹6,000' },
  { service: 'Same-Day Edit Video', price: '₹3,000' },
]

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
              <MiniPackageCard
                key={i}
                mini={mini}
                index={i}
                whatsappBase={whatsappBase}
              />
            ))}
          </div>

          <motion.div
            variants={fadeUpVariant}
            className="mt-8 border border-gold/40 bg-dark p-8 text-white shadow-2xl shadow-gold/10"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="label-text text-gold tracking-widest3 mb-2">
                  Extras
                </p>
                <h3 className="font-playfair text-3xl">
                  Add-On Services
                </h3>
              </div>
              <p className="body-text text-white/60 text-sm max-w-md md:text-right">
                Enhance any package with extra coverage, delivery options, or premium production support.
              </p>
            </div>

            <div className="w-8 h-px mt-6 mb-6 bg-gold" />

            <div className="divide-y divide-white/10">
              {addOnServices.map((item) => (
                <div
                  key={item.service}
                  className="flex items-center justify-between gap-6 py-4"
                >
                  <span className="body-text text-white/80">
                    {item.service}
                  </span>
                  <span className="font-inter text-sm font-semibold tracking-wide text-gold whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
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

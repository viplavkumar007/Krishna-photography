import { motion } from 'framer-motion'
import { signatureWeddings } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import {
  fadeUpVariant,
  slideRightVariant,
  slideLeftVariant,
  staggerContainerVariant,
} from '../../utils/animations'

function WeddingStory({ wedding, index }) {
  const isEven = index % 2 === 0
  const { ref, inView } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainerVariant}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 md:py-24 border-b border-gold/10 last:border-b-0`}
    >
      {/* Image block */}
      <motion.div
        variants={isEven ? slideRightVariant : slideLeftVariant}
        className={`relative ${!isEven ? 'lg:order-2' : ''}`}
      >
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {/* Main large image */}
          <div className="col-span-2 overflow-hidden aspect-[3/4]">
            <img
              src={wedding.images[0]}
              alt={wedding.couple}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          {/* Two small images stacked */}
          <div className="flex flex-col gap-2 md:gap-3">
            {wedding.images.slice(1).map((img, i) => (
              <div key={i} className="overflow-hidden flex-1">
                <img
                  src={img}
                  alt={`${wedding.couple} ${i + 2}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Decorative gold line */}
        <motion.div
          variants={fadeUpVariant}
          className="absolute -bottom-4 left-0 w-1/3 h-px bg-gold/50"
        />
      </motion.div>

      {/* Text block */}
      <motion.div
        variants={isEven ? slideLeftVariant : slideRightVariant}
        className={`${!isEven ? 'lg:order-1' : ''}`}
      >
        <motion.p variants={fadeUpVariant} className="label-text text-gold tracking-widest3 mb-4">
          {wedding.type}
        </motion.p>
        <motion.h3 variants={fadeUpVariant} className="heading-md text-text-dark mb-2">
          {wedding.couple}
        </motion.h3>
        <motion.p variants={fadeUpVariant} className="font-cormorant text-muted italic mb-6 tracking-wide">
          {wedding.location}
        </motion.p>

        <div className="w-8 h-px bg-gold mb-6" />

        <motion.p variants={fadeUpVariant} className="body-text text-muted leading-relaxed mb-8">
          {wedding.description}
        </motion.p>

        <motion.button
          variants={fadeUpVariant}
          onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-ghost text-text-dark hover:text-gold"
        >
          View Gallery
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default function SignatureWeddings() {
  const { ref, inView } = useScrollReveal()

  return (
    <section className="bg-cream-dark py-12 md:py-20">
      <div className="section-padding">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainerVariant}
          className="text-center mb-4"
        >
          <motion.p variants={fadeUpVariant} className="label-text text-gold tracking-widest3 mb-4">
            Love Stories
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="heading-lg text-text-dark">
            Signature <span className="italic">Weddings</span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="w-12 h-px bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Wedding stories */}
        {signatureWeddings.map((wedding, index) => (
          <WeddingStory key={wedding.id} wedding={wedding} index={index} />
        ))}
      </div>
    </section>
  )
}

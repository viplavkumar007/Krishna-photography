import { motion } from 'framer-motion'
import { about, stats } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import {
  fadeUpVariant,
  slideRightVariant,
  slideLeftVariant,
  staggerContainerVariant,
  imageRevealVariant,
} from '../../utils/animations'

export default function About() {
  const { ref: leftRef, inView: leftInView } = useScrollReveal()
  const { ref: rightRef, inView: rightInView } = useScrollReveal()
  const { ref: statsRef, inView: statsInView } = useScrollReveal(0.2)

  return (
    <section id="about" className="bg-cream py-24 md:py-36">
      <div className="section-padding">
        {/* Label */}
        <motion.p
          ref={leftRef}
          initial="hidden"
          animate={leftInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          className="label-text text-gold tracking-widest3 mb-16 text-center"
        >
          Our Story
        </motion.p>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Image */}
          <motion.div
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
            variants={imageRevealVariant}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[3/4] lg:aspect-[4/5]">
              <img
                src={about.imageUrl}
                alt="Creative Krishna Photography – Wedding Story"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Offset decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 -z-10" />
            <div className="absolute -top-6 -left-6 w-20 h-20 border border-gold/20 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            ref={rightRef}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
            variants={staggerContainerVariant}
          >
            <motion.div variants={fadeUpVariant} className="overflow-hidden mb-6">
              <h2 className="heading-lg text-text-dark">
                {about.headline}
                <br />
                <span className="italic text-gold">{about.headlineItalic}</span>
              </h2>
            </motion.div>

            <div className="w-12 h-px bg-gold mb-8" />

            {about.body.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUpVariant}
                className="body-text text-muted mb-4 leading-relaxed"
              >
                {para}
              </motion.p>
            ))}

            <motion.button
              variants={fadeUpVariant}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary mt-8"
            >
              Work With Us
            </motion.button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? 'visible' : 'hidden'}
          variants={staggerContainerVariant}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gold/20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariant}
              className={`flex flex-col items-center justify-center py-10 px-6 text-center ${
                i < stats.length - 1 ? 'border-r border-gold/20' : ''
              } hover:bg-cream-dark transition-colors duration-300`}
            >
              <span className="font-playfair text-4xl md:text-5xl text-text-dark mb-2">
                {stat.number}
              </span>
              <span className="label-text text-muted">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { faqs } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { fadeUpVariant, staggerContainerVariant } from '../../utils/animations'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-gold/15">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`font-cormorant text-xl transition-colors duration-300 pr-4 ${
            isOpen ? 'text-gold' : 'text-text-dark group-hover:text-gold'
          }`}
        >
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className={`flex-shrink-0 transition-colors duration-300 ${
            isOpen ? 'text-gold' : 'text-muted group-hover:text-gold'
          }`}
        >
          <HiChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="body-text text-muted pb-6 leading-relaxed max-w-2xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const { ref, inView } = useScrollReveal()

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="bg-cream-dark py-24 md:py-36">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left label */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainerVariant}
            className="lg:col-span-2"
          >
            <motion.p variants={fadeUpVariant} className="label-text text-gold tracking-widest3 mb-4">
              FAQ
            </motion.p>
            <motion.h2 variants={fadeUpVariant} className="heading-md text-text-dark mb-6">
              Common{' '}
              <span className="italic">Questions</span>
            </motion.h2>
            <motion.div variants={fadeUpVariant} className="w-8 h-px bg-gold mb-6" />
            <motion.p variants={fadeUpVariant} className="body-text text-muted leading-relaxed mb-8">
              Can't find what you're looking for? We're happy to talk through any details personally.
            </motion.p>
            <motion.button
              variants={fadeUpVariant}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Ask Us Directly
            </motion.button>
          </motion.div>

          {/* Accordion */}
          <div className="lg:col-span-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

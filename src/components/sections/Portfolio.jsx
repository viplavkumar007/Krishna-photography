import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { galleryCategories, galleryImages } from '../../data/siteContent'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { fadeUpVariant, staggerContainerVariant, scaleInVariant } from '../../utils/animations'

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="lightbox-overlay"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 text-white/70 hover:text-white p-2"
        aria-label="Close lightbox"
      >
        <HiX size={28} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 md:left-8 z-10 text-white/70 hover:text-white p-3 hover:bg-white/10 transition-colors"
        aria-label="Previous image"
      >
        <HiChevronLeft size={32} />
      </button>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl max-h-[85vh] mx-4"
      >
        <img
          src={images[currentIndex]?.url}
          alt="Gallery"
          className="max-w-full max-h-[85vh] object-contain"
        />
      </motion.div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 md:right-8 z-10 text-white/70 hover:text-white p-3 hover:bg-white/10 transition-colors"
        aria-label="Next image"
      >
        <HiChevronRight size={32} />
      </button>

      <div className="absolute bottom-6 text-white/40 label-text">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const { ref, inView } = useScrollReveal(0.05)

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length)
  const nextImage = () => setLightboxIndex((i) => (i + 1) % filtered.length)

  return (
    <section id="portfolio" className="bg-cream py-24 md:py-36">
      <div className="section-padding">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainerVariant}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUpVariant} className="label-text text-gold tracking-widest3 mb-4">
            Our Work
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="heading-lg text-text-dark">
            Featured <span className="italic">Gallery</span>
          </motion.h2>
          <motion.div variants={fadeUpVariant} className="w-12 h-px bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 label-text text-[10px] tracking-widest border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-white border-gold'
                  : 'border-muted/30 text-muted hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4"
          >
            {filtered.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid mb-3 md:mb-4 overflow-hidden group cursor-pointer relative"
                onClick={() => openLightbox(index)}
              >
                <div className="overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.category}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 flex items-center justify-center transition-all duration-400">
                  <span className="label-text text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={filtered}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

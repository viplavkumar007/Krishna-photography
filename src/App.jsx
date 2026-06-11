import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// UI
import LoadingScreen from './components/ui/LoadingScreen'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'

// Sections
import Hero from './components/sections/Hero'
import TrustBar from './components/sections/TrustBar'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import SignatureWeddings from './components/sections/SignatureWeddings'
import Packages from './components/sections/Packages'
import WhyUs from './components/sections/WhyUs'
import Testimonials from './components/sections/Testimonials'
import Process from './components/sections/Process'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import CTAStrip from './components/sections/CTAStrip'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Navbar />

          <main>
            <Hero />
            <TrustBar />
            <About />
            <Services />
            <Portfolio />
            <SignatureWeddings />
            <Packages />
            <WhyUs />
            <Testimonials />
            <Process />
            <FAQ />
            <CTAStrip />
            <Contact />
          </main>

          <Footer />
          <FloatingWhatsApp />
        </motion.div>
      )}
    </>
  )
}

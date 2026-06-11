import { motion } from 'framer-motion'
import { trustBarItems } from '../../data/siteContent'

export default function TrustBar() {
  // Double items for seamless loop
  const items = [...trustBarItems, ...trustBarItems, ...trustBarItems]

  return (
    <div id="trust-bar" className="bg-dark py-4 overflow-hidden border-y border-gold/20">
      <div className="flex overflow-hidden">
        <div className="marquee-track">
          {items.map((item, i) => (
            <div key={i} className="flex items-center shrink-0 px-6 md:px-10">
              <span className="font-cormorant text-white/80 text-lg md:text-xl tracking-widest whitespace-nowrap">
                {item}
              </span>
              <span className="ml-6 md:ml-10 text-gold text-xs">◆</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

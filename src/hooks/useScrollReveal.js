import { useInView } from 'react-intersection-observer'
import { useReducedMotion } from 'framer-motion'

export function useScrollReveal(threshold = 0.25) {
  const prefersReducedMotion = useReducedMotion()
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  return {
    ref,
    inView: prefersReducedMotion ? true : inView,
    prefersReducedMotion,
  }
}

import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isVisible].
 * Element fades + slides up once when it enters the viewport.
 * rootMargin triggers the reveal slightly before the element is fully visible.
 */
export function useScrollReveal(threshold = 0.12, rootMargin = '0px 0px -40px 0px') {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect() // fire once only
        }
      },
      { threshold, rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, rootMargin])

  return [ref, visible]
}

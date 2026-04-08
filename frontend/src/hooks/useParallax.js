import { useEffect, useRef } from 'react'

/**
 * Attaches a subtle parallax offset to an element based on its
 * position relative to the viewport center.
 * Uses requestAnimationFrame + IntersectionObserver so it only
 * runs while the element is visible — zero cost when off-screen.
 */
export function useParallax(strength = 18) {
  const ref    = useRef(null)
  const frameRef = useRef(null)
  const visibleRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting },
      { threshold: 0 }
    )
    obs.observe(el)

    function onScroll() {
      if (!visibleRef.current) return
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      frameRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const viewH = window.innerHeight
        // -1 (top of screen) → 0 (center) → +1 (bottom)
        const progress = (rect.top + rect.height / 2 - viewH / 2) / (viewH / 2)
        const offset = progress * strength
        el.style.transform = `translateY(${offset}px)`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      obs.disconnect()
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [strength])

  return ref
}

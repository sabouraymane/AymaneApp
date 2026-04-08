import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref to attach to a container and the index of the
 * child element that is most visible in the viewport.
 */
export function useActiveVideo(count) {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observers = []

    Array.from(container.children).forEach((child, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            setActiveIndex(i)
          }
        },
        { threshold: 0.6 }
      )
      obs.observe(child)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [count])

  return [containerRef, activeIndex]
}

import { useState, useEffect, useRef } from 'react'
import './Portfolio.css'
import ParticlesBg from './ParticlesBg'
import HeroTag     from './HeroTag'

const VIDEOS = [
  { id: 1, src: 'https://drive.google.com/file/d/1VLlFkq24C63mXPbCI73cmy6ja8UcTcUT/preview' },
  { id: 2, src: 'https://drive.google.com/file/d/1tGB5tIKAsSg5h6YlFzNQS4F4owVxQI5Y/preview' },
  { id: 3, src: 'https://drive.google.com/file/d/1pRB8LiYn0Gd1Np3KpmxBJRMim6FvywDw/preview' },
  { id: 4, src: 'https://drive.google.com/file/d/1shyiVdvHkR3Ck_jKhz3yJ1L6k-vXaluE/preview' },
  { id: 5, src: 'https://drive.google.com/file/d/1-PwbLCbRvrJp0GFCYn_gBGPY8O7e5yFy/preview' },
  { id: 6, src: 'https://drive.google.com/file/d/1UKmH0DIbK9ySm9b8lwZDqzj-VKWHzW63/preview' },
]

function Card({ video, eager }) {
  const ref = useRef(null)
  const [show,  setShow]  = useState(eager)
  const [hover, setHover] = useState(false)
  const [vis,   setVis]   = useState(false)

  /* Scroll-reveal */
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } },
      { threshold: 0.06, rootMargin: '0px 0px -20px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  /* Lazy-mount iframe */
  useEffect(() => {
    if (eager) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShow(true); obs.disconnect() } },
      { threshold: 0, rootMargin: '220px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [eager])

  return (
    <article
      ref={ref}
      className={`card ${vis ? 'card--in' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`card-shell ${hover ? 'card-shell--hov' : ''}`}>

        {show
          ? <iframe
              className="card-iframe"
              src={video.src}
              title={`video-${video.id}`}
              allow="autoplay; fullscreen"
              allowFullScreen
              loading={eager ? 'eager' : 'lazy'}
            />
          : <div className="card-skeleton"><div className="card-shimmer" /></div>
        }

        {/* Hover glow ring */}
        <div className="card-ring" />
      </div>
    </article>
  )
}

export default function Portfolio() {
  return (
    <main className="port">
      <ParticlesBg />
      <HeroTag />
      <div className="port-grid">
        {VIDEOS.map((v, i) => (
          <Card key={v.id} video={v} eager={i < 3} />
        ))}
      </div>
    </main>
  )
}

import { useRef, useState, useEffect } from 'react'
import './VideoCard.css'
import { useReveal } from '../hooks/useReveal'

/* Auto-generated YouTube thumbnail — tries maxres, falls back to hq */
function ytThumb(id) {
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
}

/* YouTube embed URL with all performance flags */
function ytEmbed(id) {
  return (
    `https://www.youtube.com/embed/${id}` +
    `?autoplay=1&mute=0&loop=1&playlist=${id}` +
    `&rel=0&modestbranding=1&playsinline=1&controls=1`
  )
}

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
    <path d="M8 5v14l11-7z" />
  </svg>
)

export default function VideoCard({ video, delay = 0 }) {
  const [revealRef, visible] = useReveal(0.08)
  const [active,   setActive]   = useState(false)
  const [hovered,  setHovered]  = useState(false)
  const [thumbErr, setThumbErr] = useState(false)

  /* Parallax — subtle vertical drift based on scroll position */
  const cardRef   = useRef(null)
  const frameRef  = useRef(null)
  const inViewRef = useRef(false)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const obs = new IntersectionObserver(
      ([e]) => { inViewRef.current = e.isIntersecting },
      { threshold: 0 }
    )
    obs.observe(card)

    function onScroll() {
      if (!inViewRef.current) return
      cancelAnimationFrame(frameRef.current)
      frameRef.current = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect()
        const vh   = window.innerHeight
        const prog = (rect.top + rect.height / 2 - vh / 2) / (vh / 2)
        card.style.setProperty('--parallax', `${prog * 12}px`)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      obs.disconnect()
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  /* Merge refs */
  function setRefs(el) {
    revealRef.current = el
    cardRef.current   = el
  }

  const thumb = thumbErr
    ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
    : ytThumb(video.youtubeId)

  return (
    <article
      ref={setRefs}
      className={`vc ${visible ? 'vc--in' : ''}`}
      style={{ '--delay': `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Player shell ── */}
      <div className={`vc-shell ${hovered ? 'vc-shell--hovered' : ''}`}>

        {active ? (
          /* Live iframe — only mounted after click */
          <iframe
            className="vc-iframe"
            src={ytEmbed(video.youtubeId)}
            title={video.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <>
            {/* Thumbnail — instant, zero cost */}
            <img
              className="vc-thumb"
              src={thumb}
              alt={video.title}
              loading="lazy"
              decoding="async"
              onError={() => setThumbErr(true)}
            />

            {/* Cinematic gradient */}
            <div className="vc-gradient" />

            {/* Glow ring */}
            <div className="vc-ring" />

            {/* Play button */}
            <button
              className={`vc-play ${hovered ? 'vc-play--show' : ''}`}
              onClick={() => setActive(true)}
              aria-label={`Play ${video.title}`}
            >
              <span className="vc-play-circle">
                <PlayIcon />
              </span>
            </button>

            {/* Tag */}
            {video.tag && <span className="vc-tag">{video.tag}</span>}
          </>
        )}
      </div>

      {/* ── Info ── */}
      <div className="vc-info">
        <p className="vc-title">{video.title}</p>
        <p className="vc-desc">{video.desc}</p>
      </div>
    </article>
  )
}

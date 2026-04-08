import { useState } from 'react'
import './Carousel.css'
import { useReveal } from '../hooks/useReveal'

const videos = [
  { id: 1, src: 'https://drive.google.com/file/d/1VLlFkq24C63mXPbCI73cmy6ja8UcTcUT/preview', title: 'Cinematic Reel',  desc: 'Color graded travel montage',        tag: 'Cinematic'   },
  { id: 2, src: 'https://drive.google.com/file/d/1tGB5tIKAsSg5h6YlFzNQS4F4owVxQI5Y/preview', title: 'Brand Story',    desc: 'Commercial edit · motion graphics',  tag: 'Commercial'  },
  { id: 3, src: 'https://drive.google.com/file/d/1pRB8LiYn0Gd1Np3KpmxBJRMim6FvywDw/preview', title: 'Short Film',     desc: 'Narrative edit · sound design',       tag: 'Film'        },
  { id: 4, src: 'https://drive.google.com/file/d/1shyiVdvHkR3Ck_jKhz3yJ1L6k-vXaluE/preview', title: 'Social Reel',    desc: 'Vertical format · optimized reach',   tag: 'Social'      },
  { id: 5, src: 'https://drive.google.com/file/d/1-PwbLCbRvrJp0GFCYn_gBGPY8O7e5yFy/preview', title: 'Music Video',    desc: 'Sync-cut edit · color grade',         tag: 'Music'       },
  { id: 6, src: 'https://drive.google.com/file/d/1UKmH0DIbK9ySm9b8lwZDqzj-VKWHzW63/preview', title: 'Event Highlight',desc: 'Live event · dynamic cuts',           tag: 'Event'       },
]

/* ── Single card ── */
function VideoCard({ video, delay }) {
  const [hovered,   setHovered]   = useState(false)
  const [revealRef, visible]      = useReveal(0.06)

  return (
    <article
      ref={revealRef}
      className={`cc ${visible ? 'cc--in' : ''}`}
      style={{ '--delay': `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`cc-shell ${hovered ? 'cc-shell--hov' : ''}`}>

        <iframe
          className="cc-iframe"
          src={video.src}
          title={video.title}
          allow="autoplay; fullscreen"
          allowFullScreen
          loading={video.id <= 3 ? 'eager' : 'lazy'}
        />

        <div className="cc-gradient" />
        <div className="cc-border"   />
        <div className="cc-ring"     />

        <span className="cc-tag">{video.tag}</span>

        <div className={`cc-info ${hovered ? 'cc-info--show' : ''}`}>
          <p className="cc-title">{video.title}</p>
          <p className="cc-desc">{video.desc}</p>
        </div>
      </div>
    </article>
  )
}

/* ── Section header ── */
function Header() {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`car-header ${visible ? 'car-header--in' : ''}`}>
      <p className="car-eyebrow">✦ Selected Work</p>
      <h2 className="car-title">Projects That <span>Move People</span></h2>
      <p className="car-sub">Every frame is intentional. Every cut has purpose.</p>
    </div>
  )
}

export default function Carousel() {
  return (
    <section className="car" id="work">
      <div className="car-bg" />

      <div className="car-inner">
        <Header />

        <div className="car-grid">
          {videos.map((v, i) => (
            <VideoCard key={v.id} video={v} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

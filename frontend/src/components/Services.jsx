import './Services.css'
import { useInView } from '../hooks/useInView'

const services = [
  { icon: '▶', title: 'YouTube Editing', desc: 'Engaging long-form content with dynamic cuts, custom intros, lower thirds, and optimized pacing to grow your channel.' },
  { icon: '📱', title: 'Reels & TikTok', desc: 'Scroll-stopping vertical videos with trending transitions, text overlays, and music sync for maximum reach.' },
  { icon: '📺', title: 'Ads & Commercials', desc: 'High-converting video ads for brands — from 15-second bumpers to full 60-second commercials.' },
  { icon: '🎬', title: 'Cinematic Edits', desc: 'Film-grade editing with professional color grading, sound design, and cinematic pacing for premium productions.' },
]

export default function Services() {
  const [ref, visible] = useInView()

  return (
    <section className="services section" id="services" ref={ref}>
      <div className={`container fade-section ${visible ? 'visible' : ''}`}>
        <p className="section-tag">✦ What I Do</p>
        <h2 className="section-title">Services I <span>Offer</span></h2>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={s.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import './Testimonials.css'
import { useInView } from '../hooks/useInView'
import { useState } from 'react'

const testimonials = [
  { name: 'Sarah M.', role: 'YouTuber — 500K subs', text: 'Aymane completely transformed my channel. The editing quality is insane — my watch time went up 40% after the first video.', avatar: 'SM' },
  { name: 'Karim B.', role: 'Brand Manager', text: 'We hired Aymane for a product launch commercial and the result was beyond our expectations. Cinematic, clean, and delivered on time.', avatar: 'KB' },
  { name: 'Lena R.', role: 'Content Creator', text: 'My reels went viral after working with Aymane. He understands trends and knows exactly how to make content pop.', avatar: 'LR' },
  { name: 'Omar T.', role: 'Music Artist', text: 'The music video edit was fire. Perfect sync, amazing color grade. I\'ve already booked him for my next 3 projects.', avatar: 'OT' },
]

export default function Testimonials() {
  const [ref, visible] = useInView()
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx(i => (i + 1) % testimonials.length)
  const t = testimonials[idx]

  return (
    <section className="testimonials section" id="testimonials" ref={ref}>
      <div className={`container fade-section ${visible ? 'visible' : ''}`}>
        <p className="section-tag">✦ Client Love</p>
        <h2 className="section-title">What They <span>Say</span></h2>

        <div className="testi-carousel">
          <div className="testi-card">
            <div className="testi-quote">"</div>
            <p className="testi-text">{t.text}</p>
            <div className="testi-author">
              <div className="testi-avatar">{t.avatar}</div>
              <div>
                <p className="testi-name">{t.name}</p>
                <p className="testi-role">{t.role}</p>
              </div>
            </div>
          </div>

          <div className="testi-controls">
            <button onClick={prev}>←</button>
            <div className="testi-dots">
              {testimonials.map((_, i) => (
                <span key={i} className={i === idx ? 'active' : ''} onClick={() => setIdx(i)} />
              ))}
            </div>
            <button onClick={next}>→</button>
          </div>
        </div>
      </div>
    </section>
  )
}

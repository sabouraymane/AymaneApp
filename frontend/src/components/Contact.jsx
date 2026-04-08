import { useState } from 'react'
import './Contact.css'
import { useReveal } from '../hooks/useReveal'

const socials = [
  { label: 'Instagram', icon: '📸', href: 'https://instagram.com' },
  { label: 'TikTok',    icon: '🎵', href: 'https://tiktok.com'    },
  { label: 'Email',     icon: '✉',  href: 'mailto:contact@aymane.edit' },
]

export default function Contact() {
  const [ref, visible] = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => { e.preventDefault(); setSent(true) }

  return (
    <section className="cta" id="contact">
      <div ref={ref} className={`cta-inner ${visible ? 'cta-inner--in' : ''}`}>

        {/* Left */}
        <div className="cta-left">
          <p className="cta-eyebrow">✦ Get In Touch</p>
          <h2 className="cta-title">
            For collaborations —<br />
            <em>let's build cinematic magic 🎬</em>
          </h2>
          <p className="cta-sub">
            Available for YouTube channels, brands,<br />
            music artists, and short film productions.
          </p>

          <div className="cta-socials">
            {socials.map(s => (
              <a key={s.label} href={s.href} className="cta-social" target="_blank" rel="noreferrer">
                <span className="cta-social-icon">{s.icon}</span>
                <span>{s.label}</span>
                <svg className="cta-social-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form className="cta-form" onSubmit={submit}>
          {sent ? (
            <div className="cta-success">
              <span>🎬</span>
              <p>Message received!<br />I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="cta-row">
                <label>Name<input name="name" value={form.name} onChange={handle} placeholder="Your name" required /></label>
                <label>Email<input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" required /></label>
              </div>
              <label>Message<textarea name="message" value={form.message} onChange={handle} rows={5} placeholder="Tell me about your project..." required /></label>
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                Send Message
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="15" height="15">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

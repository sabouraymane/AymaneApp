import './About.css'
import { useInView } from '../hooks/useInView'

const skills = [
  { name: 'Video Editing', level: 95 },
  { name: 'Color Grading', level: 88 },
  { name: 'Motion Graphics', level: 80 },
  { name: 'Sound Design', level: 75 },
]

const tools = [
  { name: 'Premiere Pro', icon: '🎬' },
  { name: 'After Effects', icon: '✨' },
  { name: 'DaVinci Resolve', icon: '🎨' },
  { name: 'Audition', icon: '🎵' },
]

export default function About() {
  const [ref, visible] = useInView()

  return (
    <section className="about section" id="about" ref={ref}>
      <div className={`about-inner container ${visible ? 'visible' : ''}`}>
        <div className="about-text">
          <p className="section-tag">✦ About Me</p>
          <h2 className="section-title">Crafting stories,<br /><span>frame by frame</span></h2>
          <p className="about-bio">
            Hey, I'm <strong>Aymane</strong> — a passionate freelance video editor with 5+ years of experience
            turning raw footage into compelling visual narratives. I specialize in cinematic edits,
            brand videos, and social media content that stops the scroll.
          </p>
          <p className="about-bio">
            Every project I take on is treated like a film — with intention, rhythm, and emotion.
            Whether it's a 30-second reel or a full commercial, I bring the same level of craft.
          </p>

          <div className="about-skills">
            {skills.map(s => (
              <div className="skill-item" key={s.name}>
                <div className="skill-header">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ '--w': `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-right">
          <div className="about-avatar">
            <div className="avatar-glow" />
            <div className="avatar-img">AE</div>
          </div>

          <div className="tools-grid">
            {tools.map(t => (
              <div className="tool-card" key={t.name}>
                <span className="tool-icon">{t.icon}</span>
                <span className="tool-name">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

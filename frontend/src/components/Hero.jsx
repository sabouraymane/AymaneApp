import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="about">
      {/* Animated gradient bg */}
      <div className="hero-bg" />
      <div className="hero-noise" />

      {/* Orbs */}
      <div className="hero-orb orb-a" />
      <div className="hero-orb orb-b" />
      <div className="hero-orb orb-c" />

      {/* Grid lines */}
      <div className="hero-grid" />

      <div className="hero-body">
        <p className="hero-tag"><span className="hero-pulse" />Freelance Video Editor</p>

        <h1 className="hero-h1">
          I Turn Moments Into<br />
          <em>Cinematic Stories</em>
        </h1>

        <p className="hero-sub">
          Professional Editing&nbsp;·&nbsp;Social Reels&nbsp;·&nbsp;Short Films &amp; Ads
        </p>

        <div className="hero-btns">
          <a href="#work" className="btn-primary">
            View Work
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="15" height="15">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">Let's Talk</a>
        </div>

        {/* Stats row */}
        <div className="hero-stats">
          {[['50+','Projects'],['5+','Years'],['100%','Passion']].map(([n,l]) => (
            <div key={l} className="hero-stat">
              <span className="hero-stat-n">{n}</span>
              <span className="hero-stat-l">{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll-cue">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}

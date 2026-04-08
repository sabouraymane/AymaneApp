import './HeroTag.css'

export default function HeroTag() {
  return (
    <div className="ht-wrap">

      {/* Thin animated side lines */}
      <div className="ht-line ht-line--left"  />
      <div className="ht-line ht-line--right" />

      {/* Top row */}
      <div className="ht-body">
        <span className="ht-dot" />
        <p className="ht-name">Aymane Editing</p>
        <span className="ht-sep">·</span>
        <p className="ht-role">Cinematic Video Editor</p>
        <span className="ht-dot" />
      </div>

      {/* Headline + light-trail stroke overlay */}
      <div className="ht-headline-wrap">

        {/* SVG diagonal light trail — sits over the text */}
        <svg
          className="ht-trail"
          viewBox="0 0 600 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            {/* Gradient: transparent → white-purple → transparent */}
            <linearGradient id="trailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="rgba(255,255,255,0)"   />
              <stop offset="40%"  stopColor="rgba(200,160,255,0.55)"/>
              <stop offset="55%"  stopColor="rgba(255,255,255,0.75)"/>
              <stop offset="70%"  stopColor="rgba(168,85,247,0.45)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)"   />
            </linearGradient>
          </defs>

          {/* Diagonal stroke — sweeps left-to-right */}
          <line
            className="ht-trail-line"
            x1="-120" y1="100"
            x2="120"  y2="20"
            stroke="url(#trailGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <h1 className="ht-headline">
          <span className="ht-line-block">
            {'Bring Your Imagination'.split('').map((ch, i) => (
              <span key={i} className="ht-char" style={{ animationDelay: `${i * 0.032}s` }}>
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            ))}
          </span>
          <span className="ht-line-block ht-line-block--accent">
            {'to Life with Aymane Editing'.split('').map((ch, i) => (
              <span key={i} className="ht-char" style={{ animationDelay: `${(22 + i) * 0.032}s` }}>
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            ))}
          </span>
        </h1>
      </div>

    </div>
  )
}

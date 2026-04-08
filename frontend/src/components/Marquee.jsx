import './Marquee.css'

const words = [
  'Crafted with precision.',
  'Stories that resonate.',
  'Designed for eyes that watch.',
  'Minds that feel.',
  'Frame-perfect cuts.',
  'Cinematic energy.',
]

export default function Marquee() {
  const repeated = [...words, ...words] // duplicate for seamless loop

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {repeated.map((w, i) => (
          <span key={i} className="marquee-item">
            {w} <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

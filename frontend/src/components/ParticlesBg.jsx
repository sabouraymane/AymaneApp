import { useEffect, useRef } from 'react'

const COUNT  = 72   // number of particles
const SPEED  = 0.28 // max drift speed

export default function ParticlesBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let raf

    /* Resize canvas to full viewport */
    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    /* Build particles */
    const particles = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      r:  Math.random() * 1.6 + 0.4,          // radius 0.4–2
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      a:  Math.random() * 0.45 + 0.08,         // opacity 0.08–0.53
      // hue cycles slowly between purple and blue
      hue: Math.random() * 60 + 220,           // 220–280
    }))

    /* Gradient background colours — shift over time */
    let tick = 0

    function draw() {
      tick++
      const w = canvas.width
      const h = canvas.height

      /* Clear */
      ctx.clearRect(0, 0, w, h)

      /* Slow-shifting radial gradient background */
      const cx1 = w * (0.15 + 0.1 * Math.sin(tick * 0.0008))
      const cy1 = h * (0.25 + 0.1 * Math.cos(tick * 0.0006))
      const cx2 = w * (0.82 + 0.08 * Math.cos(tick * 0.0007))
      const cy2 = h * (0.72 + 0.08 * Math.sin(tick * 0.0009))

      const g1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, w * 0.55)
      g1.addColorStop(0, `rgba(109,40,217,0.18)`)
      g1.addColorStop(1, `rgba(109,40,217,0)`)

      const g2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, w * 0.45)
      g2.addColorStop(0, `rgba(59,130,246,0.13)`)
      g2.addColorStop(1, `rgba(59,130,246,0)`)

      ctx.fillStyle = g1; ctx.fillRect(0, 0, w, h)
      ctx.fillStyle = g2; ctx.fillRect(0, 0, w, h)

      /* Draw + move particles */
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        /* Wrap around edges */
        if (p.x < -4)  p.x = w + 4
        if (p.x > w+4) p.x = -4
        if (p.y < -4)  p.y = h + 4
        if (p.y > h+4) p.y = -4

        /* Slow hue drift */
        p.hue += 0.04
        if (p.hue > 290) p.hue = 210

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.a})`
        ctx.fill()
      }

      /* Subtle connecting lines between close particles */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x
          const dy   = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(168,85,247,${0.06 * (1 - dist / 90)})`
            ctx.lineWidth   = 0.5
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 1,
      }}
    />
  )
}

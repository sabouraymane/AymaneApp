import { useEffect, useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open,  setOpen]  = useState(false)

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`nav ${solid ? 'nav--solid' : ''}`}>
      <a href="#" className="nav-logo">AE<span>.</span></a>

      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {['Work','About','Contact'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
        ))}
        <a href="#contact" className="nav-hire" onClick={() => setOpen(false)}>Hire Me</a>
      </nav>

      <button className={`nav-burger ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="menu">
        <span /><span /><span />
      </button>
    </header>
  )
}

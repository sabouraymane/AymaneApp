import './Footer.css'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <span className="foot-logo">AE<span>.</span></span>
        <p className="foot-copy">© {new Date().getFullYear()} Aymane Editing — All rights reserved</p>
        <div className="foot-links">
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

import './WhatsApp.css'

const PHONE   = '212703712135'
const MESSAGE = encodeURIComponent("Hi Aymane! I'd like to discuss a video project.")
const HREF    = `https://wa.me/${PHONE}?text=${MESSAGE}`

export default function WhatsApp() {
  return (
    <a
      href={HREF}
      className="wa-btn"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG logo */}
      <svg className="wa-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 2C8.268 2 2 8.268 2 16c0 2.49.648 4.83 1.782 6.86L2 30l7.338-1.742A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Z"
          fill="currentColor" opacity=".15"
        />
        <path
          d="M16 3.5C9.096 3.5 3.5 9.096 3.5 16c0 2.37.638 4.594 1.754 6.508L3.5 28.5l6.18-1.618A12.44 12.44 0 0 0 16 28.5c6.904 0 12.5-5.596 12.5-12.5S22.904 3.5 16 3.5Z"
          fill="white"
        />
        <path
          d="M21.8 18.8c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
          fill="#07070f"
        />
      </svg>

      {/* Tooltip */}
      <span className="wa-tooltip">Chat on WhatsApp</span>
    </a>
  )
}

import { useEffect, useRef, useState } from 'react'
import './VideoSlide.css'

// Convert Google Drive share URL → direct streamable URL
function toDirect(url) {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
  return match
    ? `https://drive.google.com/uc?export=download&id=${match[1]}`
    : url
}

export default function VideoSlide({ video, isActive, globalMuted, onToggleMute }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const [loaded, setLoaded] = useState(false)

  // Play / pause based on visibility
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (isActive) {
      el.play().catch(() => {})
      setPlaying(true)
    } else {
      el.pause()
      el.currentTime = 0
      setPlaying(false)
    }
  }, [isActive])

  // Sync mute state
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = globalMuted
  }, [globalMuted])

  function togglePlay() {
    const el = videoRef.current
    if (!el) return
    if (el.paused) { el.play(); setPlaying(true) }
    else           { el.pause(); setPlaying(false) }
  }

  return (
    <div className={`slide ${isActive ? 'active' : ''}`}>
      {/* Video */}
      <video
        ref={videoRef}
        className="slide-video"
        src={toDirect(video.url)}
        loop
        muted={globalMuted}
        playsInline
        preload="metadata"
        onCanPlay={() => setLoaded(true)}
        onClick={togglePlay}
      />

      {/* Gradient vignette */}
      <div className="slide-vignette" />

      {/* Loading spinner */}
      {!loaded && (
        <div className="slide-loader">
          <div className="spinner" />
        </div>
      )}

      {/* Pause indicator */}
      {!playing && loaded && (
        <div className="slide-paused" onClick={togglePlay}>
          <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}

      {/* Bottom info */}
      <div className={`slide-info ${isActive ? 'slide-info--in' : ''}`}>
        <p className="slide-title">{video.title}</p>
        <p className="slide-desc">{video.desc}</p>
      </div>

      {/* Side controls */}
      <div className="slide-controls">
        <button
          className="ctrl-btn"
          onClick={e => { e.stopPropagation(); onToggleMute() }}
          aria-label={globalMuted ? 'Unmute' : 'Mute'}
        >
          {globalMuted ? (
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18l1.73 1.73L21 18.46 5.54 3 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          )}
        </button>

        <button
          className="ctrl-btn"
          onClick={e => { e.stopPropagation(); togglePlay() }}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

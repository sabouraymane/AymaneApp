import { useState } from 'react'
import './Feed.css'
import VideoCard from './VideoCard'

/*
 * ─────────────────────────────────────────────────────────
 *  HOW TO ADD YOUR VIDEOS
 *
 *  Option A — YouTube (recommended, zero buffering):
 *    type: 'youtube'
 *    youtubeId: 'xxxxxxxxxxx'   ← the ID from your YouTube URL
 *    thumb: (optional) custom thumbnail URL, otherwise auto-fetched
 *
 *  Option B — Self-hosted / CDN MP4 (Cloudflare, Bunny, S3):
 *    type: 'video'
 *    url: 'https://your-cdn.com/video.mp4'
 *    thumb: 'https://your-cdn.com/thumb.jpg'  ← shown before video loads
 *
 *  ⚠️  Google Drive URLs are NOT supported — they throttle and block
 *      streaming. Upload to YouTube (free) or a CDN instead.
 * ─────────────────────────────────────────────────────────
 */
const videos = [
  {
    id: 1,
    type: 'youtube',
    youtubeId: 'aqz-KE-bpKQ',   // ← replace with your YouTube video ID
    title: 'Cinematic Reel',
    desc: 'Color graded travel montage',
    tag: 'Cinematic',
  },
  {
    id: 2,
    type: 'youtube',
    youtubeId: 'dQw4w9WgXcQ',   // ← replace with your YouTube video ID
    title: 'Brand Story',
    desc: 'Commercial edit with motion graphics',
    tag: 'Commercial',
  },
  {
    id: 3,
    type: 'youtube',
    youtubeId: 'ScMzIvxBSi4',   // ← replace with your YouTube video ID
    title: 'Short Film',
    desc: 'Narrative edit with sound design',
    tag: 'Film',
  },
  {
    id: 4,
    type: 'youtube',
    youtubeId: 'aqz-KE-bpKQ',   // ← replace with your YouTube video ID
    title: 'Music Video',
    desc: 'Sync-cut edit with color grade',
    tag: 'Music',
  },
  {
    id: 5,
    type: 'youtube',
    youtubeId: 'dQw4w9WgXcQ',   // ← replace with your YouTube video ID
    title: 'Social Reel',
    desc: 'Vertical format — optimized for reach',
    tag: 'Social',
  },
]

export default function Feed() {
  const [muted, setMuted] = useState(true)

  return (
    <div className="feed-page">

      {/* Ambient background orbs */}
      <div className="feed-orb feed-orb--1" aria-hidden="true" />
      <div className="feed-orb feed-orb--2" aria-hidden="true" />

      {/* ── Navbar ── */}
      <header className="feed-nav">
        <span className="feed-logo">AE<span className="feed-dot">.</span></span>
        <nav className="feed-navlinks">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="feed-hero">
        <p className="feed-hero-eyebrow">Freelance Video Editor</p>
        <h1 className="feed-hero-title">
          Aymane<br />
          <em>Editing</em>
        </h1>
        <p className="feed-hero-sub">
          Cinematic stories. Frame-perfect cuts. Premium visuals.
        </p>
        <a href="#work" className="feed-hero-cta">View Work ↓</a>
      </section>

      {/* ── Work grid ── */}
      <main className="feed-main" id="work">
        <div className="feed-section-label">Selected Work</div>
        <div className="feed-grid">
          {videos.map((v, i) => (
            <VideoCard
              key={v.id}
              video={v}
              globalMuted={muted}
              onToggleMute={() => setMuted(m => !m)}
              eager={i < 3}
              delay={i * 80}
            />
          ))}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="feed-footer">
        <span className="feed-footer-logo">AE<span>.</span></span>
        <p>© {new Date().getFullYear()} Aymane Editing — All rights reserved</p>
      </footer>

    </div>
  )
}

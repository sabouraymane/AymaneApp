import './Grid.css'
import VideoCard from './VideoCard'
import { videos } from '../data/videos'

export default function Grid() {
  return (
    <section className="grid-section" id="work">
      <div className="grid-header">
        <p className="grid-eyebrow">Selected Work</p>
        <h2 className="grid-title">Projects</h2>
      </div>

      <div className="grid-container">
        {videos.map((v, i) => (
          <VideoCard
            key={v.id}
            video={v}
            delay={i * 75}
          />
        ))}
      </div>
    </section>
  )
}

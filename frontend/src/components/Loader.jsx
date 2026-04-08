import './Loader.css'

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader-inner">
        <div className="loader-bar">
          <div className="loader-fill" />
        </div>
        <p className="loader-text">AYMANE EDITING</p>
        <span className="loader-sub">Loading experience...</span>
      </div>
    </div>
  )
}

import { useState } from 'react'
import './EditService.css'

const initialService = {
  name: 'Web Development',
  category: 'Technology',
  price: '1200',
  duration: '30',
  status: 'active',
  description: 'Full-stack web development service including design, development and deployment.',
  image: null,
}

export default function EditService() {
  const [form, setForm] = useState(initialService)
  const [preview, setPreview] = useState(null)
  const [saved, setSaved] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    setSaved(false)
  }

  function handleImage(e) {
    const file = e.target.files[0]
    if (!file) return
    setForm(f => ({ ...f, image: file.name }))
    setPreview(URL.createObjectURL(file))
    setSaved(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSaved(true)
  }

  return (
    <div className="es-layout">
      {/* Sidebar */}
      <aside className="es-sidebar">
        <div className="es-logo">⚙️ ServiceHub</div>
        <nav className="es-nav">
          <a href="#">Dashboard</a>
          <a href="#" className="active">Services</a>
          <a href="#">Bookings</a>
          <a href="#">Clients</a>
          <a href="#">Settings</a>
        </nav>
      </aside>

      {/* Main */}
      <main className="es-main">
        <header className="es-header">
          <div>
            <p className="es-breadcrumb">Services / Edit</p>
            <h1>Edit Service</h1>
          </div>
          <div className="es-header-actions">
            <button type="button" className="btn-secondary">Cancel</button>
            <button type="submit" form="edit-form" className="btn-primary">Save Changes</button>
          </div>
        </header>

        {saved && (
          <div className="es-toast">✅ Service saved successfully!</div>
        )}

        <form id="edit-form" className="es-form" onSubmit={handleSubmit}>
          {/* Left column */}
          <div className="es-col">
            <section className="es-card">
              <h2>General Info</h2>
              <label>
                Service Name
                <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Web Development" required />
              </label>
              <label>
                Category
                <select name="category" value={form.category} onChange={handleChange}>
                  <option>Technology</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Description
                <textarea name="description" value={form.description} onChange={handleChange} rows={4} placeholder="Describe the service..." />
              </label>
            </section>

            <section className="es-card">
              <h2>Pricing & Duration</h2>
              <div className="es-row">
                <label>
                  Price ($)
                  <input name="price" type="number" min="0" value={form.price} onChange={handleChange} placeholder="0.00" />
                </label>
                <label>
                  Duration (days)
                  <input name="duration" type="number" min="1" value={form.duration} onChange={handleChange} placeholder="30" />
                </label>
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="es-col es-col-sm">
            <section className="es-card">
              <h2>Service Image</h2>
              <div className="es-image-box">
                {preview
                  ? <img src={preview} alt="preview" />
                  : <div className="es-image-placeholder">🖼️<span>No image selected</span></div>
                }
              </div>
              <label className="btn-upload">
                Upload Image
                <input type="file" accept="image/*" onChange={handleImage} hidden />
              </label>
              {form.image && <p className="es-filename">{form.image}</p>}
            </section>

            <section className="es-card">
              <h2>Status</h2>
              <div className="es-status-group">
                {['active', 'inactive', 'draft'].map(s => (
                  <label key={s} className={`es-status-option ${form.status === s ? 'selected' : ''}`}>
                    <input type="radio" name="status" value={s} checked={form.status === s} onChange={handleChange} hidden />
                    <span className={`dot dot-${s}`} />
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </label>
                ))}
              </div>
            </section>

            <section className="es-card es-meta">
              <h2>Details</h2>
              <div className="es-meta-row"><span>Created</span><span>Jan 12, 2025</span></div>
              <div className="es-meta-row"><span>Last updated</span><span>Mar 30, 2026</span></div>
              <div className="es-meta-row"><span>Bookings</span><span>48</span></div>
            </section>
          </div>
        </form>
      </main>
    </div>
  )
}

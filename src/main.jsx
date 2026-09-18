import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [depth, setDepth] = useState('3')
  const [result, setResult] = useState(null)

  function calculate() {
    const l = Number(length), w = Number(width), d = Number(depth)
    if (![l, w, d].every(Number.isFinite) || l <= 0 || w <= 0 || d <= 0) {
      setResult({ error: 'Enter positive numbers for length, width, and depth.' })
      return
    }
    const cubicYards = (l * w * d) / 324
    setResult({ cubicYards, order: cubicYards * 1.1 })
  }

  return (
    <main className="page">
      <header className="hero">
        <div className="brand"><img className="brand-logo" src="/athena-calculators-logo.jpg" alt="ATHENA Calculators" /></div>
        <p className="eyebrow">MULCH CALCULATOR</p>
        <h1>How Much Mulch Do I Need?</h1>
        <p className="intro">Estimate cubic yards of mulch for garden beds, landscaping, and planting areas.</p>
      </header>
      <section className="card">
        <h2>Enter Your Measurements</h2>
        <div className="grid">
          <label>Length (feet)<input type="number" min="0" step="any" value={length} onChange={e => setLength(e.target.value)} /></label>
          <label>Width (feet)<input type="number" min="0" step="any" value={width} onChange={e => setWidth(e.target.value)} /></label>
          <label>Depth (inches)<input type="number" min="0" step="any" value={depth} onChange={e => setDepth(e.target.value)} /></label>
        </div>
        <button onClick={calculate}>Calculate Mulch</button>
        {result?.error && <p className="error">{result.error}</p>}
        {result && !result.error && <div className="result" aria-live="polite">
          <div><span>Mulch Needed</span><strong>{result.cubicYards.toFixed(2)} cubic yards</strong></div>
          <div><span>Recommended Order</span><strong>{result.order.toFixed(2)} cubic yards</strong></div>
        </div>}
      </section>
      <section className="affiliate-card" aria-label="Recommended mulch project supplies">
        <p className="affiliate-label">MULCH PROJECT SUPPLIES</p>
        <h2>Ready to order your project materials?</h2>
        <p>Use your mulch estimate to plan the job, then compare mulch, landscape fabric, edging, and garden tools on Amazon.</p>
        <div className="affiliate-links">
          <a href="https://www.amazon.com/s?k=landscape+mulch+garden&tag=athena-20" target="_blank" rel="sponsored noopener">Shop landscape mulch &amp; garden materials <span>(paid link)</span></a>
          <a href="https://www.amazon.com/s?k=landscape+fabric+landscape+edging&tag=athena-20" target="_blank" rel="sponsored noopener">Shop landscape fabric &amp; edging <span>(paid link)</span></a>
        </div>
      </section>
      <section className="info"><h2>How It Works</h2><p>Cubic yards = length × width × depth ÷ 324. A 10% planning allowance is included in the recommended order amount.</p></section>
      <footer>
        <p>Free mulch calculator for practical planning.</p>
        <p>As an Amazon Associate I earn from qualifying purchases.</p>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)

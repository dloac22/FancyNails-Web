import { WORKS_ALL } from '../data/worksAll.js'

export default function WorksPage() {
  return (
    <section className="section container">
      <h1>Our Works</h1>
      <div className="grid">
        {WORKS_ALL.map((src, i) => (
          <img key={i} src={src} alt={`Nail design ${i+1}`} loading="lazy" />
        ))}
      </div>
    </section>
  )
}

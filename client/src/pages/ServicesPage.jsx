import { SERVICES } from '../data/servicesData.js'

export default function ServicesPage() {
  return (
    <section className="section container">
      <h1>Services & Prices</h1>
      {SERVICES.map(section => (
        <div className="category card" key={section.category}>
          <h2>{section.category}</h2>
          <ul className="prices">
            {section.items.map((it, idx) => (
              <li key={idx}>
                <div className="row">
                  <strong>{it.name}</strong>
                  <span className="amount">
                    {it.price && `$${it.price}`}
                    {it.priceFrom && `$${it.priceFrom}+`}
                    {it.gelPrice && ` (Gel $${it.gelPrice})`}
                    {it.priceNote && it.priceNote}
                  </span>
                </div>
                {it.desc && <p className="muted">{it.desc}</p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

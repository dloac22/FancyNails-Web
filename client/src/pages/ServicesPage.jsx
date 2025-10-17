import { SERVICES } from '../data/servicesData.js'

export default function ServicesPage() {
  return (
    <section className="section container">
      <h1>Services & Prices</h1>

      <div className="card">
        <h2>Appointments & Walk-ins Welcome</h2>
        <p>Gift Certificates are Available!</p>

        <h3>10-Day Guarantee Policy</h3>
        <ul className="prices">
          <li>We are happy to fix lifts, chips, cracks, or broken nails within 10 days of service.</li>
          <li>The 10-day guarantee policy will not be applied to regular polish.</li>
        </ul>
        <p>
          If you are dissatisfied with the services, please share your experience at
          {' '}<a href="mailto:fancynailspa75@gmail.com">fancynailspa75@gmail.com</a>. Your satisfaction is essential to us.
        </p>
      </div>

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

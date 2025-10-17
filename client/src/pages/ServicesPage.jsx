import { SERVICES } from '../data/servicesData.js'

export default function ServicesPage() {
  return (
    <section className="section container">
      <h2>Appointments & Walk-ins Welcome

          Gift Certificates are Available!

          10-DAY GUARANTEE POLICY

          <li> We are happy to fix your lift, chip, crack, or broken nails within 10 days of service. </li>

          <li>The 10-day guarantee policy will not be applied to regular polish.</li> 

          If you are dissatisfied with the services, please share your experience at email: 
          fancynailspa75@gmail.com

          Your satisfaction is essential to us.</h2>
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

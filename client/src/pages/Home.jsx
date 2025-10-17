import Hero from '../components/Hero.jsx'
import { CATEGORIES_PREVIEW } from "../data/ServicesPreview.js";
import { WORKS_PREVIEW } from '../data/worksPreview.js'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services preview */}
      <section className="section container">
        <div className="section-head">
          <h2>Our Services</h2>
          <p> <span className="highlight">Appointments & Walk-ins Welcome</span> </p>
          <p>Gift Certificates are Available!</p>
          <p><span>10-DAY GUARANTEE POLICY</span></p>
          <li>We are happy to fix your lift, chip, crack, or broken nails within 10 days of service.</li>
          <li>The 10-day guarantee policy will not be applied to regular polish.</li>
              <p>If you are dissatisfied with the services, please share your experience at email: fancynailspa75@gmail.com </p>
              <p>Your satisfaction is essential to us.</p>
          <p>Manicure • Pedicure • Dipping • Acrylic • Gel X / Builder</p>
        </div>

        <div className="cards">
          {CATEGORIES_PREVIEW.map(c => (
            <div className="card" key={c.slug}>
              <img src={c.img} alt={c.title} />
              <div className="card-body">
                <h3>{c.title}</h3>
                <p>{c.snippet}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="center">
          <Link to="/services" className="btn">All services</Link>
        </div>
      </section>

      {/* Works preview */}
      <section className="section container">
        <div className="section-head">
          <h2>Our Works</h2>
          <p>Our designs for customers.</p>
        </div>

        <div className="grid">
          {WORKS_PREVIEW.map((src, i) => <img key={i} src={src} alt="Nail design" loading="lazy" />)}
        </div>

        <div className="center">
          <Link to="/works" className="btn">See full gallery</Link>
        </div>
      </section>
    </>
  )
}

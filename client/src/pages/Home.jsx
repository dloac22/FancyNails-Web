import Hero from '../components/Hero.jsx'
import { CATEGORIES_PREVIEW } from "../data/ServicesPreview.js";
import { WORKS_PREVIEW } from '../data/worksPreview.js'
import { Link } from 'react-router-dom'
import SimpleSlider from "../components/WorkPreviewSlider.jsx";


export default function Home() {
  return (
    <>
      <Hero />

      {/* Services preview */}
      <section className="section container">
        <div className="section-head">
          <h2>Our Services</h2>
        </div>

        <div className="cards">
          {CATEGORIES_PREVIEW.map(c => (
            <div className="card" key={c.slug}>
              <img src={c.img1} alt={c.title} />
              <div className="card-body">
                <h3>{c.title}</h3>
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

        <SimpleSlider images={WORKS_PREVIEW} />

        <div className="center">
          <Link to="/works" className="btn">See full gallery</Link>
        </div>
      </section>
    </>
  )
}


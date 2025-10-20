import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SERVICES } from '../data/servicesData.js'
const APPOINTMENTS_BG = "/assets/services/appointment.jpg";

// Function that brings customer to the services section
const slugify = s =>
  (s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function useScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);
}

export default function ServicesPage() {
  useScrollToHash();
  return (
    <section className="section container">
      <section
        className="service-section"
        style={{ backgroundImage: `url(${APPOINTMENTS_BG})` }}
      >
        <div className="service-overlay">
          <div className="container">
            <h1>Appointments &amp; Walk-ins Welcome</h1>
            <div className="service-content">
              <p><span>Gift Certificates are available!</span></p>
              <h3>10-Day Guarantee Policy</h3>
              <ul>
                <li>We are happy to fix lifts, chips, cracks, or broken nails within 10 days of service.</li>
                <li>The 10-day guarantee policy will not be applied to regular polish.</li>
              </ul>
              <p>
                If you are dissatisfied with the services, please share your experience at{" "}
                <a className="mail" href="mailto:fancynailspa75@gmail.com">fancynailspa75@gmail.com</a>. Your satisfaction is essential to us.
              </p>
            </div>
          </div>
        </div>
      </section>
      {<h1 className="main-title">Services &amp; Prices</h1>}
      {SERVICES.map(section => {
        const id = section.slug || slugify(section.category);
        return (
          <section
            id={id}                                   
            key={id}
            className="service-section"
            style={{ backgroundImage: `url(${section.bg || ""})` }}
          >
            <div className="service-overlay">
              <div className="container">
                <h2>{section.category}</h2>
                {section.category === "Acrylic / Color Powder" && <div className="gold-line" />}
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
                      {it.desc && (
                        <p className={`muted ${section.category === "Acrylic / Color Powder" ? "muted-gold" : ""}`}>
                          {it.desc}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
}

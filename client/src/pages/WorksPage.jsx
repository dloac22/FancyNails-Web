import { WORKS_ALL } from "../data/worksAll.js";

export default function WorksPage() {
  return (
    <section className="section container">
      <h1>Our Works</h1>

      <div className="works-grid">
        {WORKS_ALL.map((src, i) => (
          <figure className="work-tile" key={i}>
            <img className="work-img" src={src} alt={`Nail design ${i + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}

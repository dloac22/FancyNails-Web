export default function SocialPage() {
  const links = [
    { name: "Facebook", img: "/assets/logo/whiteBG.jpg", href: "https://www.facebook.com/people/Fancy-Nails-Spa/61580311348076/" },
    { name: "Instagram", img: "/assets/logo/whiteBG.jpg", href: "https://www.instagram.com/fancynailspa75/" },
    { name: "TikTok", img: "/assets/logo/whiteBG.jpg", href: "https://www.tiktok.com/@fancy.nails.spa75" },
    { name: "Google Page", img: "/assets/logo/whiteBG.jpg", href: "https://www.google.com/search?q=fancy+nails" },
  ]
  return (
    <section className="section container">
      <h1>About Us</h1>
      <p> As soon as you walk in, you’ll feel like you’re being transported to a different world. 
        The soft music, the relaxing ambiance, and the friendly staff will make you feel right at home.
        We have tables for nails, spa chairs for pedicures, and very well-trained technicians with many years of experience.
        Besides, we offer various nail care services, including acrylic and gel nails, pedicures, manicures, and more.
        With the highest quality products, we ensure you have a perfect experience. 
        Our goal is to provide you with a luxurious experience that leaves you feeling refreshed and beautiful.</p>
      <div className="cards social-cards">
        {links.map(x => (
          <a key={x.name} className="card link-card" href={x.href} target="_blank" rel="noreferrer">
            <img src={x.img} alt={x.name} />
            <div className="card-body">
              <h3>{x.name}</h3>
              <p>See photos and updates on {x.name}.</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}


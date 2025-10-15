export default function SocialPage() {
  const links = [
    { name: "Facebook", img: "client/public/asset/logo/whiteBG.jpg", href: "https://www.facebook.com/people/Fancy-Nails-Spa/61580311348076/" },
    { name: "Instagram", img: "client/public/asset/logo/whiteBG.jpg", href: "https://www.instagram.com/fancynailspa75/" },
    { name: "TikTok", img: "client/public/asset/logo/whiteBG.jpg", href: "https://www.tiktok.com/@fancy.nails.spa75" },
    { name: "Google Page", img: "client/public/asset/logo/whiteBG.jpg", href: "https://www.google.com/search?q=fancy+nails" },
  ]
  return (
    <section className="section container">
      <h1>Follow Us</h1>
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

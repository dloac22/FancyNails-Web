export default function SocialPage() {
  const links = [
    {
      name: "Facebook",
      img: "/assets/logo/facebook.png",
      href: "https://www.facebook.com/people/Fancy-Nails-Spa/61580311348076/",
      description: "Follow our page for stunning nail designs, self-care tips, and all the beauty inspiration you need!" 
    },
    {
      name: "Instagram",
      img: "/assets/logo/instagram.png",
      href: "https://www.instagram.com/fancynailspa75/",
      description: "Hey there, beauty lovers! 💅 Don’t forget to hit “Follow” so you never miss our latest nail inspo & salon vibes!" 
    },
    {
      name: "TikTok",
      img: "/assets/logo/tik-tok.png",
      href: "https://www.tiktok.com/@fancy.nails.spa75",
      description: "Follow us on TikTok for more nail inspo, behind-the-scenes fun & salon vibes! 💅🎬" 
    },
    {
      name: "Google",
      img: "/assets/logo/google.png",
      href: "https://www.google.com/search?q=fancy+nails",
      description: "" // Blank description
    },
  ];
  return (
    <section className="section container">
      <h1>ABOUT US</h1>
      <p> As soon as you walk in, you’ll feel like you’re being transported to a different world. 
        The soft music, the relaxing ambiance, and the friendly staff will make you feel right at home.
        We have tables for nails, spa chairs for pedicures, and very well-trained technicians with many years of experience.
        Besides, we offer various nail care services, including acrylic and gel nails, pedicures, manicures, and more.
        With the highest quality products, we ensure you have a perfect experience. 
        Our goal is to provide you with a luxurious experience that leaves you feeling refreshed and beautiful.</p>

      <h1>Follow Us on Social Media!</h1>
      <div className="cards social-cards">
        {links.map(x => (
          <a key={x.name} className="card link-card" href={x.href} target="_blank" rel="noreferrer">
            <img src={x.img} alt={x.name} />
            <div className="card-body">
              <h3>{x.name}</h3>
                  {x.description && <p>{x.description}</p>}
            </div>
          </a>
        ))}
      </div>

      {/* Google Reviews Section*/}
      <script src="https://elfsightcdn.com/platform.js" async></script>
      <div class="elfsight-app-30faea96-95eb-4371-87a4-06a7af6a31a3" data-elfsight-app-lazy></div>
    </section>
  )
}


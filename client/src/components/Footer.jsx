export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid container">
        <div className="about">
          <img src="/assets/logo/noBG.png" className="mono" alt="Fancy Nails" />
          <p>
            <strong>Fancy Nails & Spa</strong> in Worcester, Massachusetts.
			      Welcome to Fancy World- where beauty meets perfection
          </p>
          <div className="social-inline">
            <a href="https://www.facebook.com/people/Fancy-Nails-Spa/61580311348076/" target="_blank" rel="noreferrer" aria-label="Facebook"></a>
            <a href="https://www.instagram.com/fancynailspa75/" target="_blank" rel="noreferrer" aria-label="Instagram"></a>
            <a href="https://www.tiktok.com/@fancy.nails.spa75" target="_blank" rel="noreferrer" aria-label="TikTok">♫</a>
            <a href="https://www.google.com/search?q=fancy+nails" target="_blank" rel="noreferrer" aria-label="Google">G</a>
          </div>
        </div>

        <div className="contact">
          <h3>Contact Us</h3>
          <ul>
            <li>📞 (508) 373-2550</li>
            <li>📍 582 W Boylston St, Worcester, MA 01606 </li>
            <li>📧 <a href="mailto:fancynailspa75@gmail.com">fancynailspa75@gmail.com</a></li>
          </ul>

          <h3>Business hours</h3>
          <ul>
            <li>Mon – Sat: 9:00 AM – 7:00 PM</li>
            <li>Sun: CLOSED</li>
          </ul>
        </div>

        <div className="map">
          <iframe
            title="Fancy Nails Spa Location"
            width="100%" height="260" style={{ border: 0, borderRadius: 12 }}
            loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
  			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.1165046366957!2d-71.8000998!3d42.3113323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4076c5d9bffdf%3A0xde5d23ef0586a94a!2sFancy%20Nail%20and%20Spa!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          />
        </div>
      </div>

      <div className="legal">
        © 2025 Fancy Nails & Spa design by Fancy Nails & Spa • All Rights Reserved | nail salon in 10606 | best nail salon in 01606
      </div>
    </footer>
  )
}

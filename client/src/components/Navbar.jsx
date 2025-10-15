import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <div className="brand">
        <img src="/assets/logo.svg" alt="NAIL LAB" className="logo" />
        <div className="brand-text">
          <div className="brand-name">Fancy Nails & Spa</div>
        </div>
      </div>

      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/works">Our Works</NavLink>
        <NavLink to="/social">Social Media</NavLink>
        <a className="call-btn" href="tel:+15083732550">📞 (508) 373-2550</a>
      </nav>
    </header>
  )
}

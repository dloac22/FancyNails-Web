import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu when route changes (or on ESC)
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // lock body scroll when menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
  <header className="navbar">
    <div className="navbar-container">
      {/* Brand */}
      <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
        <img src="/client/public/asset/logo/noBG.png" alt="Fancy Nails & Spa Logo" />
        <h1>Fancy Nails & Spa</h1>
      </Link>

      {/* Desktop Nav & Call Button Wrapper */}
      <div className="nav-main">
        <nav className="nav-desktop" aria-label="Primary">
          <NavLink to="/" end className="nav-item">Home</NavLink>
          <NavLink to="/services" className="nav-item">Services</NavLink>
          <NavLink to="/works" className="nav-item">Our Works</NavLink>
          <NavLink to="/social" className="nav-item">Social Media</NavLink>
        </nav>
        <a href="tel:+15083732550" className="call-button">📞 (508) 373-2550</a>
      </div>


      {/* Mobile toggle */}
      <button
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {/* simple SVG icon */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>

    {/* Mobile menu panel */}
      <nav
        id="mobile-menu"
        className={`nav-mobile ${open ? "open" : ""}`}
        aria-label="Mobile"
      >
        <NavLink to="/" end className="nav-link" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/services" className="nav-link" onClick={() => setOpen(false)}>Services</NavLink>
        <NavLink to="/works" className="nav-link" onClick={() => setOpen(false)}>Our Works</NavLink>
        <NavLink to="/social" className="nav-link" onClick={() => setOpen(false)}>Social Media</NavLink>
        {/* Add this line below */}
        <a href="tel:+15083732550" className="nav-link call">📞 Call Us</a>
      </nav>
  </header>
  );
}

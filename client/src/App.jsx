import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import WorksPage from './pages/WorksPage.jsx'
import SocialPage from './pages/SocialPage.jsx'

// TEMP minimal components
function Home() {
  return (
    <section style={{ padding: 24 }}>
      <h1 style={{ color: "#ffe998" }}>Home works ✅</h1>
      <p style={{ color: "#fff" }}>
        If you see this, routing/rendering is fine. The blank page was not Vercel.
      </p>
    </section>
  );
}

export default function App() {
  return (
    <div className="site-bg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/social" element={<SocialPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

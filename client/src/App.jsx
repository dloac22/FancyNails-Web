
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = lazy(() => import('./pages/Home.jsx'));
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const WorksPage = lazy(() => import('./pages/WorksPage.jsx'));
const SocialPage = lazy(() => import('./pages/SocialPage.jsx'));
export default function App() {
  return (
    <> 
      <ScrollToTop />
      <div className="site-bg">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/social" element={<SocialPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  )
}


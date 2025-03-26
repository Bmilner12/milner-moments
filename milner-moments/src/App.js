import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import Contact from './pages/Contact';
import TermsPage from './pages/TermsPage'; // Add this import
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
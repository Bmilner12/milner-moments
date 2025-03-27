import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import Contact from './pages/Contact';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiesPage from './pages/CookiesPage';
import { ThemeProvider } from './context/ThemeContext';
import './styles/globals.css';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Wrap the app in both providers
function App() {
  return (
    <Router>
      <ThemeProvider>
        <ScrollToTop />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
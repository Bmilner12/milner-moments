import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import DarkModeToggle from './DarkModeToggle';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode } = useContext(ThemeContext);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/images/MM_Logo_Background_Removed.png" alt="MilnerMoments" />
          </Link>
          
          <nav className="desktop-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <DarkModeToggle />
            <Link to="/contact" className="book-btn">Book a Session</Link>
          </div>
          
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} 
        onClick={toggleMobileMenu}
      ></div>
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''} ${darkMode ? 'dark-mode' : ''}`}>
        <nav>
          <div className="mobile-dark-mode">
            <DarkModeToggle />
          </div>
          <ul>
            <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
            <li><Link to="/gallery" onClick={toggleMobileMenu}>Gallery</Link></li>
            <li><Link to="/services" onClick={toggleMobileMenu}>Services</Link></li>
            <li><Link to="/pricing" onClick={toggleMobileMenu}>Pricing</Link></li>
            <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
          </ul>
          <Link to="/contact" className="mobile-book-btn" onClick={toggleMobileMenu}>Book a Session</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
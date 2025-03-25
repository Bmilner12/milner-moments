import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-overlay"></div>
      
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Capture Your Moments?</h2>
          <p className="cta-text">Every pet, wildlife encounter, and family moment deserves to be preserved forever. Let's create beautiful images together.</p>
          
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn-primary">Book a Session</Link>
            <Link to="/contact" className="cta-btn-secondary">Contact Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
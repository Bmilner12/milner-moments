import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/About.css';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">About MilnerMoments</h1>
          <p className="page-subtitle">Our passion for capturing life's most precious moments</p>
        </div>
      </div>
      
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="/api/placeholder/600/800" alt="Photographer" />
            </div>
            <div className="about-content">
              <h2>Hello, I'm Alex</h2>
              <p>Welcome to MilnerMoments Photography! I'm a passionate photographer based in Leeds, specializing in pet, wildlife, and portrait photography.</p>
              <p>My journey into photography began 10 years ago when I received my first camera as a gift. What started as a hobby quickly developed into a passion and eventually into the business you see today.</p>
              <p>I believe that every pet has a unique personality, every wildlife encounter tells a story, and every portrait captures a moment in time that will never be repeated. My mission is to preserve these special moments for you to treasure forever.</p>
              <p>At MilnerMoments, we pride ourselves on creating a relaxed, enjoyable experience that allows the true essence of the subject to shine through. Whether it's capturing the playful spirit of your pet, the majesty of wildlife in their natural habitat, or the special connection between family members, we approach each session with dedication and creativity.</p>
              <div className="signature">
                <p>Looking forward to capturing your special moments,</p>
                <img src="/api/placeholder/150/60" alt="Signature" className="signature-img" />
                <p className="signature-name">Alex Milner</p>
                <p className="signature-title">Founder & Lead Photographer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="philosophy-section">
        <div className="container">
          <h2 className="section-title">Our Philosophy</h2>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <div className="philosophy-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm0 0L9 15m-4.07 4.07L15 9"></path>
                </svg>
              </div>
              <h3>Authenticity</h3>
              <p>We believe in capturing genuine moments rather than forced poses. The most beautiful images are those that reflect true emotion and personality.</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <h3>Quality</h3>
              <p>We're committed to excellence in every aspect of our work, from the session experience to the final delivered images.</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3>Connection</h3>
              <p>Building a rapport with our subjects is essential for creating images that truly resonate. We take the time to understand what makes each subject special.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-timeline">
            <div className="process-item">
              <div className="process-number">1</div>
              <div className="process-content">
                <h3>Initial Consultation</h3>
                <p>We begin with a conversation about your vision and requirements, answering any questions you might have and discussing location options.</p>
              </div>
            </div>
            <div className="process-item">
              <div className="process-number">2</div>
              <div className="process-content">
                <h3>The Photography Session</h3>
                <p>Our relaxed, friendly approach creates an enjoyable experience where natural moments can be captured beautifully.</p>
              </div>
            </div>
            <div className="process-item">
              <div className="process-number">3</div>
              <div className="process-content">
                <h3>Expert Editing</h3>
                <p>Each image is carefully edited to bring out its best qualities while maintaining a natural look.</p>
              </div>
            </div>
            <div className="process-item">
              <div className="process-number">4</div>
              <div className="process-content">
                <h3>Image Review & Selection</h3>
                <p>View your images in a private online gallery and select your favorites.</p>
              </div>
            </div>
            <div className="process-item">
              <div className="process-number">5</div>
              <div className="process-content">
                <h3>Product Delivery</h3>
                <p>Receive your beautifully finished digital images and any prints or products you've selected.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Book Your Session?</h2>
          <p>I'd love to discuss how we can capture your special moments together.</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
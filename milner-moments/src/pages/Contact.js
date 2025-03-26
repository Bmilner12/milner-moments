import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/Contact.css';

const Contact = () => {
  // Replace "xanebdbe" with your actual form ID from Formspree
  const [state, handleSubmit] = useForm("xanebdbe");
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'pet',
    date: '',
    time: '',
    message: '',
    howHeard: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Reset form after successful submission
  if (state.succeeded) {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
  
  return (
    <div className="contact-page">
      <Header />
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Do you have any questions or are you ready to book your session? We'd love to hear from you!</p>
        </div>
      </div>
      
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-card">
                <h2>Contact Information</h2>
                
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="info-text">
                    <h3>Email</h3>
                    <a href="mailto:milner.moments@outlook.com">milner.moments@outlook.com</a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="info-text">
                    <h3>Phone</h3>
                    <a href="tel:07491798234">07491 798234</a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="info-text">
                    <h3>Location</h3>
                    <p>Leeds, West Yorkshire</p>
                  </div>
                </div>
                
                <div className="social-links">
                  <h3>Follow Us</h3>
                  <div className="social-icons">
                    <a href="https://twtr.oia.bio/MilnerMoments" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="https://insta.oia.bio/MilnerMoments" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a href="https://yt.oia.bio/MilnerMoments" target="_blank" rel="noopener noreferrer" className="social-icon">
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="business-hours">
                  <h3>Business Hours</h3>
                  <div className="hours-item">
                    <span className="day">Monday - Friday:</span>
                    <span className="time">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday:</span>
                    <span className="time">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday:</span>
                    <span className="time">By Appointment Only</span>
                  </div>
                </div>
              </div>
              
              <div className="booking-process">
                <h3>Booking Process</h3>
                <ol className="process-list">
                  <li>
                    <span className="process-number">1</span>
                    <span className="process-text">Contact us with your requirements</span>
                  </li>
                  <li>
                    <span className="process-number">2</span>
                    <span className="process-text">Free 15-minute consultation call</span>
                  </li>
                  <li>
                    <span className="process-number">3</span>
                    <span className="process-text">50% deposit to secure your date</span>
                  </li>
                  <li>
                    <span className="process-number">4</span>
                    <span className="process-text">Enjoy your photography session!</span>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="contact-form-container">
              <div className="form-card">
                <h2>Send Us a Message</h2>
                
                {state.succeeded ? (
                  <div className="success-message">
                    <svg className="success-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We'll be in touch with you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    {/* Hidden field for Formspree to know the form name */}
                    <input type="hidden" name="_subject" value="New Photography Enquiry from Website" />
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Name*</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="interest">Interested In*</label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          required
                        >
                          <option value="pet">Pet Photography</option>
                          <option value="wildlife">Wildlife Photography</option>
                          <option value="interior space">Interior Space Photography</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="date">Preferred Date</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="time">Preferred Time</label>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">Message*</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="howHeard">How did you hear about us?</label>
                      <select
                        id="howHeard"
                        name="howHeard"
                        value={formData.howHeard}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="social">Social Media</option>
                        <option value="search">Search Engine</option>
                        <option value="referral">Friend/Family Referral</option>
                        <option value="event">Local Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="form-checkbox">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        required
                      />
                      <label htmlFor="privacy">
                        I agree to the <Link to="/privacy-policy">privacy policy</Link> and consent to being contacted regarding the enquiry.
                      </label>
                    </div>
                    
                    <button type="submit" className="submit-btn" disabled={state.submitting}>
                      <span>{state.submitting ? "Sending..." : "Send Message"}</span>
                      {!state.submitting && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What areas do you cover?</h3>
              <p>We are based in Leeds, West Yorkshire but can travel across Yorkshire and beyond for photography sessions. Travel fees may apply for locations beyond 30 miles.</p>
            </div>
            <div className="faq-item">
              <h3>How do I prepare for my pet photography session?</h3>
              <p>We recommend ensuring your pet is well-groomed, exercised (but not tired out), and has their favorite toys/treats on hand. We'll provide detailed guidance after booking.</p>
            </div>
            <div className="faq-item">
              <h3>How long does a typical session last?</h3>
              <p>Most sessions last 1-2 hours, but we never rush! We take time to ensure your pet is comfortable and we capture the perfect shots.</p>
            </div>
            <div className="faq-item">
              <h3>When will I receive my photos?</h3>
              <p>You'll receive a digital gallery of preview images within 2 weeks of your session. After selecting your favorites, final edited images will be ready within 1-2 weeks.</p>
            </div>
            <div className="faq-item">
              <h3>What if I need to reschedule?</h3>
              <p>We understand life happens! Rescheduling is free with at least 48 hours notice. Last-minute changes may incur a small fee.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer gift vouchers?</h3>
              <p>Yes! Photography sessions make wonderful gifts. Contact us to purchase a custom gift voucher for your loved ones.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <div className="map-container">
            {/* Google Maps iframe */}
            <div className="map-placeholder">
              <iframe 
                title="Milner Moments Photography Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75244.56005946114!2d-1.6178431!3d53.8007554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be18de2916f7d%3A0x3cf7c3fa878fcd3e!2sLeeds%2C%20UK!5e0!3m2!1sen!2suk!4v1616597355121!5m2!1sen!2suk" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Book Your Photography Session?</h2>
            <p>Fill out our contact form or give us a call to get started!</p>
            <a href="tel:07491798234" className="cta-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
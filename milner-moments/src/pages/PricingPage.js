import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/PricingPage.css';

const PricingPage = () => {
  const [activeCategory, setActiveCategory] = useState('pet');
  
  const pricingData = {
    pet: [
      {
        name: "Snapshot Package",
        price: "£40",
        description: "Perfect quick session at a local park or your home",
        features: [
          "30-Minute Mini Session",
          "2 high-resolution digital images",
          "Private online gallery",
          "Quick turnaround (5 business days)"
        ],
        popular: false
      },
      {
        name: "Memory Package",
        price: "£95",
        description: "Personalized session at your choice of location",
        features: [
          "60-Minute Full Session",
          "8 high-resolution digital images",
          "£15 print credit",
          "Social media optimized files",
          "Online gallery for 3 months"
        ],
        popular: true
      },
      {
        name: "Legacy Package",
        price: "£195",
        description: "Comprehensive session with multiple setups and backgrounds",
        features: [
          "90-Minute Extended Session",
          "15 high-resolution digital images",
          "One 8×10\" professional print",
          "Custom digital album design",
          "Online gallery for 6 months",
          "Priority editing (7 days)"
        ],
        popular: false
      },
      {
        name: "Timeless Package",
        price: "£395",
        description: "Relaxed photography experience with no time constraints",
        features: [
          "Unlimited Session Time",
          "All session images (30-50 typically)",
          "Wall Art Collection (16×20\" canvas + two 8×10\" prints)",
          "Custom mobile app",
          "Online gallery for 12 months",
          "Premium editing and artistic enhancements"
        ],
        popular: false
      }
    ],
    wildlife: [
      {
        name: "Explorer Package",
        price: "£75",
        description: "Beautiful wildlife images from our existing collection",
        features: [
          "5 high-resolution wildlife images",
          "Selection from various wildlife categories",
          "Personal use license for prints up to 11×14\""
        ],
        popular: false
      },
      {
        name: "Wilderness Package",
        price: "£150",
        description: "Custom shoot at a local nature reserve",
        features: [
          "2-hour wildlife photography session",
          "10 high-resolution wildlife images",
          "10% donation to local wildlife conservation",
          "Digital guide about the photographed species"
        ],
        popular: true
      },
      {
        name: "Safari Package",
        price: "£295",
        description: "Extended adventure for wildlife enthusiasts",
        features: [
          "Half-day (4-hour) guided wildlife experience",
          "20 high-resolution wildlife images",
          "Set of 5×7\" prints (your favorite 5 images)",
          "15% donation to wildlife conservation",
          "Custom printed wildlife booklet"
        ],
        popular: false
      }
    ],
    portrait: [
      {
        name: "Essence Package",
        price: "£85",
        description: "Perfect for individuals or couples",
        features: [
          "45-Minute Session",
          "5 high-resolution digital images",
          "Indoor studio or outdoor setting",
          "Professional editing"
        ],
        popular: false
      },
      {
        name: "Connection Package",
        price: "£175",
        description: "Ideal for families or small groups",
        features: [
          "75-Minute Session",
          "12 high-resolution digital images",
          "Option to use 2 nearby locations",
          "Two 5×7\" and one 8×10\" professional prints",
          "Enhanced editing and color grading"
        ],
        popular: true
      },
      {
        name: "Celebration Package",
        price: "£345",
        description: "Comprehensive coverage for extended families or special events",
        features: [
          "2-Hour Session",
          "25 high-resolution digital images",
          "One 16×20\" mounted print",
          "8×8\" premium layflat photo album",
          "Premium editing and artistic effects"
        ],
        popular: false
      }
    ]
  };
  
  const addOns = [
    {
      name: "Custom Pet Portrait Painting",
      price: "£175+",
      description: "Professional hand-painted artwork based on your favorite photo"
    },
    {
      name: "Express Editing",
      price: "£45",
      description: "Receive your edited images within 48 hours"
    },
    {
      name: "Location Travel",
      price: "£0.45/mile",
      description: "Extended travel beyond 15 miles of Leeds city center"
    },
    {
      name: "Photo Book Design",
      price: "£95",
      description: "Custom designed 20-page photo book"
    }
  ];
  
  return (
    <div className="pricing-page">
      <Header />
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Photography Packages</h1>
          <p className="page-subtitle">Affordable packages designed to capture your perfect moments</p>
        </div>
      </div>
      
      <section className="pricing-content">
        <div className="container">
          <div className="pricing-tabs">
            <button 
              className={`pricing-tab ${activeCategory === 'pet' ? 'active' : ''}`}
              onClick={() => setActiveCategory('pet')}
            >
              Pet Photography
            </button>
            <button 
              className={`pricing-tab ${activeCategory === 'wildlife' ? 'active' : ''}`}
              onClick={() => setActiveCategory('wildlife')}
            >
              Wildlife Photography
            </button>
            <button 
              className={`pricing-tab ${activeCategory === 'portrait' ? 'active' : ''}`}
              onClick={() => setActiveCategory('portrait')}
            >
              Portrait & Family
            </button>
          </div>
          
          <div className="price-cards">
            {pricingData[activeCategory].map((package_, index) => (
              <div 
                key={index} 
                className={`price-card ${package_.popular ? 'popular' : ''}`}
              >
                {package_.popular && <div className="popular-tag">Most Popular</div>}
                <div className="price-header">
                  <h3>{package_.name}</h3>
                  <div className="price">{package_.price}</div>
                </div>
                <div className="price-body">
                  <p className="package-description">{package_.description}</p>
                  <ul className="feature-list">
                    {package_.features.map((feature, i) => (
                      <li key={i}>
                        <span className="feature-icon">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="book-button">Book Now</a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="add-ons-section">
            <h2>Special Add-Ons & Enhancements</h2>
            <div className="add-ons-grid">
              {addOns.map((addon, index) => (
                <div key={index} className="add-on-card">
                  <h3>{addon.name}</h3>
                  <p className="add-on-price">{addon.price}</p>
                  <p className="add-on-description">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="special-offer">
            <div className="offer-content">
              <div className="offer-icon">
                <img src="/api/placeholder/60/60" alt="Painting Icon" />
              </div>
              <div className="offer-text">
                <h3>Exclusive Offer: Custom Pet Portrait Paintings</h3>
                <p>Transform your favorite pet photograph into a stunning handcrafted painting. Our local artist partner creates beautiful, personalized artwork that captures your pet's unique personality and spirit.</p>
                <p className="offer-note">Starting at £175, with multiple size options available.</p>
              </div>
            </div>
          </div>
          
          <div className="price-guarantee">
            <h3>Price Match Promise</h3>
            <p>Found a comparable photography package at a lower price? Let us know and we'll match it! We're committed to providing exceptional quality at competitive prices.</p>
          </div>
          
          <div className="booking-process">
            <h2>Booking Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Inquiry</h3>
                  <p>Contact us via email or phone to discuss your photography needs.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Consultation</h3>
                  <p>Free 15-minute phone consultation to plan your perfect session.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Booking</h3>
                  <p>50% deposit required to secure your date and time.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Photography Session</h3>
                  <p>Relax and enjoy your photography experience.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Image Selection</h3>
                  <p>Review your private gallery and select your favorite images.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h3>Delivery</h3>
                  <p>Receive your beautifully edited images and products.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>What payment methods do you accept?</h3>
                <p>We accept bank transfers, credit/debit cards, and PayPal. A 50% deposit is required to secure your booking, with the remaining balance due on or before the day of your session.</p>
              </div>
              <div className="faq-item">
                <h3>What happens if I need to reschedule?</h3>
                <p>We understand that plans change. You can reschedule your session with at least 48 hours notice at no additional cost. Rescheduling with less than 48 hours notice may incur a £25 fee.</p>
              </div>
              <div className="faq-item">
                <h3>How long until I receive my photos?</h3>
                <p>Delivery times vary by package. Standard delivery is within 2 weeks, while some packages include expedited delivery. Express editing is available as an add-on for faster turnaround.</p>
              </div>
              <div className="faq-item">
                <h3>Do you offer mini sessions?</h3>
                <p>Yes! We offer seasonal mini-sessions throughout the year. These are short, themed sessions at a reduced rate. Follow us on social media or join our mailing list to be notified about upcoming mini sessions.</p>
              </div>
            </div>
          </div>
          
          <div className="cta-section">
            <h2>Ready to capture your special moments?</h2>
            <p>Book your photography session today and let's create beautiful memories together.</p>
            <a href="/contact" className="cta-button">Book Your Session</a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
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
          "2 High-Resolution Digital Images",
          "High Quality Digital Downloads",
          "Quick Turnaround (up to 5 business days)"
        ],
        popular: false
      },
      {
        name: "Memory Package",
        price: "£95",
        description: "Personalised session at your choice of location",
        features: [
          "60-Minute Full Session",
          "8 High-Resolution Digital Images",
          "Social Media Optimized Files",
          "Online Gallery for 3 Months"
        ],
        popular: true
      },
      {
        name: "Legacy Package",
        price: "£195",
        description: "Comprehensive session with multiple setups and backgrounds",
        features: [
          "90-Minute Extended Session",
          "15 High-Resolution Digital Images",
          "One 8×10\" Professional Print",
          "Custom Digital Album Design",
          "Online Gallery for 6 Months",
          "Priority Editing (7 days)"
        ],
        popular: false
      },
      {
        name: "Timeless Package",
        price: "£395",
        description: "Relaxed photography experience with no time constraints",
        features: [
          "Unlimited Session Time",
          "All Session Images (30-50 typically)",
          "Wall Art Collection (16×20\" canvas + two 8×10\" prints)",
          "Online Gallery for 12 Months",
          "Premium Editing and Artistic Enhancements"
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
          "5 High-Resolution Wildlife Images",
          "Selection from Various Wildlife Categories",
          "Personal Use License for Prints up to 11×14\""
        ],
        popular: false
      },
      {
        name: "Wilderness Package",
        price: "£150",
        description: "Custom shoot at a local nature reserve",
        features: [
          "2-Hour Wildlife Photography Session",
          "10 High-Resolution Wildlife Images",
          "10% Donation to Local Wildlife Conservation",
          "Digital Guide About the Photographed Species"
        ],
        popular: true
      },
      {
        name: "Safari Package",
        price: "£295",
        description: "Extended adventure for wildlife enthusiasts",
        features: [
          "Half-Day (4-hour) Guided Wildlife Experience",
          "20 High-Resolution Wildlife Images",
          "Set of 5×7\" Prints (your favourite 5 images)",
          "15% Donation to Wildlife Conservation",
          "Custom Printed Wildlife Booklet"
        ],
        popular: false
      }
    ],
    portrait: [
      {
        name: "Basic Interior Package",
        price: "£125",
        description: "Perfect for showcasing a single room or small space",
        features: [
          "1-Hour Session",
          "5 High-Resolution Digital Images",
          "Professional Lighting Setup",
          "Advanced Composition and Styling Advice"
        ],
        popular: false
      },
      {
        name: "Standard Interior Package",
        price: "£250",
        description: "Comprehensive coverage for residential or small commercial spaces",
        features: [
          "2-Hour Session",
          "12 High-Resolution Digital Images",
          "Multiple Angles of Each Space",
          "Expert Editing and Colour Correction",
        ],
        popular: true
      },
      {
        name: "Premium Interior Package",
        price: "£450",
        description: "Complete solution for larger properties or detailed architectural photography",
        features: [
          "4-Hour Session",
          "25 High-Resolution Digital Images",
          "Twilight/Golden Hour Exterior Shots Included",
          "Detailed Architectural Element Coverage",
          "Premium Editing with Colour Enhancement"
        ],
        popular: false
      }
    ]
  };
  
  const addOns = [
   
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
              Interior Space
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
                <img src="images/Jessie_Painting.jpg" alt="Painting Icon" />
              </div>
              <div className="offer-text">
                <h3>Exclusive Offer: Custom Pet Portrait Paintings</h3>
                <p>Transform your favourite pet photograph into a stunning handcrafted painting. Our local artist partner creates beautiful, personalised artwork that captures your pet's unique personality and spirit.</p>
                <p className="offer-note">Starting at £175, with multiple size options available.</p>
              </div>
            </div>
          </div>
          
          <div className="booking-process">
            <h2>Booking Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Enquiry</h3>
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
                  <p>Review your private gallery and select your favourite images.</p>
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
                <h3>How much does delivery cost?</h3>
                <p>Delivery starts from £2.95, depending on products purchased.</p>
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
                <p>Yes! We offer seasonal mini-sessions throughout the year for your furry friends. These are short, themed sessions at a reduced rate. Follow us on social media or join our mailing list to be notified about upcoming mini sessions.</p>
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
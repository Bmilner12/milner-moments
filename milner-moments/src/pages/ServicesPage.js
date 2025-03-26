import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/ServicesPage.css';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('pet');
  
  const serviceDetails = {
    pet: {
      title: "Pet Photography",
      tagline: "Capture your pet's unique personality",
      description: "Every pet has its own unique personality, expressions, and quirks. My pet photography sessions are designed to capture these special characteristics in a relaxed and fun environment, creating beautiful images that truly reflect your beloved companion's spirit.",
      approach: "I take a patient, relaxed approach to pet photography. Sessions can take place in your home, garden, or a favorite outdoor location. For more excitable pets, we'll incorporate play and movement; for shy animals, we'll give them plenty of time to feel comfortable. The goal is always to create natural, authentic images that showcase your pet's true character.",
      features: [
        "Indoor or outdoor sessions",
        "Multiple pets welcome",
        "Natural and studio lighting options",
        "Personalised experience for shy or energetic pets",
        "Guidance on preparing your pet for the shoot",
        "Range of packages to suit different needs and budgets"
      ],
      faq: [
        {
          question: "How do you handle nervous or shy pets?",
          answer: "I always allow plenty of time for pets to become comfortable with me and the camera. We'll move at your pet's pace, using treats, toys, and gentle encouragement. Sometimes the best shots come after they've forgotten the camera is even there!"
        },
        {
          question: "Can I be in the photos with my pet?",
          answer: "Absolutely! Some of the most heartwarming images capture the special bond between pets and their owners. Just let me know in advance if you'd like to be included in some of the shots."
        },
        {
          question: "What should I do to prepare my pet for the session?",
          answer: "A well-rested, recently exercised pet tends to be more cooperative. If needed, consider a grooming session a day or two before. Bring their favorite treats and toys to the session, and avoid feeding them a full meal right before we start."
        }
      ],
      image: "/api/placeholder/800/600"
    },
    wildlife: {
      title: "Wildlife Photography",
      tagline: "The beauty of nature captured in its purest form",
      description: "Wildlife photography allows us to witness the extraordinary beauty, behaviour, and habitats of animals in their natural environment. My wildlife photography seeks to capture these fleeting moments with respect for the animals and their habitats, creating compelling images that showcase the wonder of the natural world.",
      approach: "Wildlife photography requires patience, respect, and knowledge of animal behaviour. I use long lenses to maintain a safe distance, minimising disturbance to the animals. Sessions typically take place during the golden hours of early morning or late afternoon when wildlife is most active and the light is most beautiful. Conservation principles guide all my wildlife photography work.",
      features: [
        "Local wildlife locations",
        "Dawn and dusk sessions",
        "Bird and small mammal specialists",
        "Conservation-focused approach",
        "Seasonal wildlife opportunities",
        "Various packages including prints and digital images"
      ],
      faq: [
        {
          question: "What kinds of wildlife can we expect to see?",
          answer: "In the Leeds and West Yorkshire area, we have opportunities to photograph a variety of birds including kingfishers, herons, and various songbirds, as well as mammals such as foxes, deer, and badgers. The specific wildlife varies by season and location."
        },
        {
          question: "Do I need to bring any special equipment?",
          answer: "No, I provide all the professional photography equipment needed. Just bring weather-appropriate clothing, sturdy footwear, and perhaps binoculars if you have them for spotting wildlife."
        },
        {
          question: "How long do wildlife photography sessions last?",
          answer: "Wildlife sessions are typically longer than other types of photography as they require patience. Sessions range from 2 hours to half-day expeditions, depending on the package you choose."
        }
      ],
      image: "/api/placeholder/800/600"
    },
    interior: {
      title: "Interior Space Photography",
      tagline: "Capturing the essence of architecture and design",
      description: "Interior Space Photography is about showcasing the unique character, design, and atmosphere of built environments. I specialise in capturing the architectural details, spatial relationships, and lighting that make each interior space distinctive. Whether for real estate marketing, architectural portfolios, or design publications, my images highlight the beauty and functionality of interior spaces with expert composition and technical precision.",
      approach: "My interior photography approach combines technical precision with artistic vision. I carefully assess lighting conditions and positioning to highlight architectural details and spatial flow. Using professional equipment and flexible scheduling, I capture each space's unique character while minimising disruption to commercial or residential environments.",
      features: [
        "Professional assessment of lighting and composition",
        "Multiple angles and perspectives of each space",
        "Advanced editing and color correction",
        "High-resolution digital images for various applications",
        "Expert lighting equipment to enhance architectural features",
        "Consultation on space preparation and styling"
      ],
      faq: [
        {
          question: "How should I prepare my space before an interior photography session?",
          answer: "For the best results, declutter and clean your space thoroughly. Remove personal items that might distract from the architectural features. Consider simple styling with minimal, tasteful decor. I can provide detailed preparation guidance specific to your space before the shoot."
        },
        {
          question: "What types of interior spaces do you photograph?",
          answer: "I photograph a wide range of interior spaces including residential homes, commercial offices, retail businesses, restaurants, hotels, and architectural showcases. Each type of space requires different techniques to highlight its unique features and purpose."
        },
        {
          question: "How are the final images delivered, and what usage rights do I receive?",
          answer: "You'll receive professionally edited, high-resolution digital images within 7-10 business days via a private online gallery. Images are suitable for print and digital use. Standard packages include usage rights for personal or business marketing purposes, while extended commercial licensing is available for publication or advertising use."
        }
      ],
      image: "/api/placeholder/800/600"
    }
  };
  
  const activeService = serviceDetails[activeTab];
  
  return (
    <div className="services-page">
      <Header />
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Photography Services</h1>
          <p className="page-subtitle">Professional photography tailored to capture the moments that matter most</p>
        </div>
      </div>
      
      <section className="services-tabs">
        <div className="container">
          <div className="tabs">
            <button 
              className={`tab-btn ${activeTab === 'pet' ? 'active' : ''}`}
              onClick={() => setActiveTab('pet')}
            >
              Pet Photography
            </button>
            <button 
              className={`tab-btn ${activeTab === 'wildlife' ? 'active' : ''}`}
              onClick={() => setActiveTab('wildlife')}
            >
              Wildlife Photography
            </button>
            <button 
              className={`tab-btn ${activeTab === 'interior space' ? 'active' : ''}`}
              onClick={() => setActiveTab('interior')}
            >
              Interior Space Photography
            </button>
          </div>
        </div>
      </section>
      
      <section className="service-details">
        <div className="container">
          <div className="service-hero">
            <div className="service-text">
              <h2>{activeService.title}</h2>
              <p className="service-tagline">{activeService.tagline}</p>
              <a href="/contact" className="service-cta">Book This Service</a>
            </div>
            <div className="service-image">
              <img src={activeService.image} alt={activeService.title} />
            </div>
          </div>
          
          <div className="service-description">
            <h3>About This Service</h3>
            <p>{activeService.description}</p>
          </div>
          
          <div className="service-grid">
            <div className="service-approach">
              <h3>My Approach</h3>
              <p>{activeService.approach}</p>
            </div>
            
            <div className="service-features">
              <h3>What's Included</h3>
              <ul className="features-list">
                {activeService.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="service-faq">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-list">
              {activeService.faq.map((item, index) => (
                <div key={index} className="faq-item">
                  <h4>{item.question}</h4>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="service-cta-block">
            <div className="cta-content">
              <h3>Ready to book your {activeService.title.toLowerCase()} session?</h3>
              <p>Get in touch to discuss your vision and schedule your photography experience.</p>
              <div className="cta-buttons">
                <a href="/pricing" className="cta-btn-secondary">View Pricing</a>
                <a href="/contact" className="cta-btn-primary">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
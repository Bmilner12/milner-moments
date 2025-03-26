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
        "Personalized experience for shy or energetic pets",
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
      description: "Wildlife photography allows us to witness the extraordinary beauty, behavior, and habitats of animals in their natural environment. My wildlife photography seeks to capture these fleeting moments with respect for the animals and their habitats, creating compelling images that showcase the wonder of the natural world.",
      approach: "Wildlife photography requires patience, respect, and knowledge of animal behavior. I use long lenses to maintain a safe distance, minimizing disturbance to the animals. Sessions typically take place during the golden hours of early morning or late afternoon when wildlife is most active and the light is most beautiful. Conservation principles guide all my wildlife photography work.",
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
      tagline: "Timeless portraits that tell your story",
      description: "Interior Space Photography is about capturing the essence of a person or family - the connections, emotions, and personalities that make each subject unique. I specialize in natural, relaxed portraits that reflect who you truly are, creating timeless images you'll treasure for years to come.",
      approach: "My interior space sessions are relaxed and enjoyable. Rather than stiff, posed images, I focus on creating a comfortable environment where natural expressions and interactions can shine through. Sessions can take place at your home, a meaningful location, or one of my suggested scenic spots around Leeds and West Yorkshire.",
      features: [
        "Location of your choice",
        "Relaxed, natural posing guidance",
        "Perfect for families with pets",
        "Seasonal mini-sessions available",
        "Variety of packages including digital images and prints",
        "Quick turnaround times"
      ],
      faq: [
        {
          question: "What should we wear for our interior space session?",
          answer: "I recommend coordinating rather than matching outfits. Choose colors that complement each other and avoid large logos or distracting patterns. I'll provide more detailed guidance based on your chosen location and the style you prefer."
        },
        {
          question: "How do you handle children who don't want to cooperate?",
          answer: "I have lots of experience with young children and understand they have their own timelines! I keep sessions fun and playful, with no pressure. Often the most authentic images come from letting kids be themselves rather than asking them to pose."
        },
        {
          question: "How many final images will we receive?",
          answer: "This depends on the package you choose, but typically interior space sessions result in 15-25 final edited images. You'll have the opportunity to select your favorites from a wider gallery of proofs."
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
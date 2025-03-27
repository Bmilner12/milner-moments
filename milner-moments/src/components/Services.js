import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Services.css';

const ServiceCard = ({ title, description, features, image }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        
        <ul className="feature-list">
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              <svg className="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link to="/services" className="service-link">
          View details
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Pet Photography",
      description: "Capture the unique personality and spirit of your beloved pets in beautiful, professional portraits.",
      image: "images/Toby.jpg",
      features: [
        "Indoor or outdoor sessions",
        "Multiple pets welcome",
        "Natural lighting options",
        "Personalised experience for shy or energetic pets"
      ]
    },
    {
      title: "Wildlife Photography",
      description: "Stunning images of animals in their natural habitats, from local wildlife to specialised nature expeditions.",
      image: "images/Robin.jpg",
      features: [
        "Local wildlife locations",
        "Dawn and dusk sessions",
        "Bird and small mammal specialists",
        "Conservation-focused approach"
      ]
    },
    {
      title: "Interior Space Photography",
      description: "Timeless interior space sessions for individuals, couples, and families that tell your unique story.",
      image: "images/OldPostOffice_Table.jpg",
      features: [
        "Location of your choice",
        "Relaxed, natural posing guidance",
        "Perfect for families with pets",
        "Seasonal mini-sessions available"
      ]
    }
  ];
  
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">Professional photography services tailored to capture the personalities and beauty of your Pets, Wildlife Encounters, and Interior Spaces.</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
            />
          ))}
        </div>
        
        <div className="services-link-container">
          <Link to="/services" className="services-link">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
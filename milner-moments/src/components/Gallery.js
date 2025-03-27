import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const galleryItems = [
    { id: 1, image: 'images/dog_with_lead.jpg', title: 'Autumn Joy', category: 'pets' },
    { id: 2, image: 'images/Mute_Swan_Wings.jpg', title: 'Graceful Sentinel', category: 'wildlife' },
    { id: 3, image: 'images/Golden_Retriever_Puppy.jpg', title: 'Curious Labrador Puppy', category: 'pets' },
    { id: 4, image: 'images/OldPostOffice_portrait.jpg', title: 'Timeless Corner', category: 'Interior' },
    { id: 5, image: 'images/mawhen.jpg', title: 'Perfect Timing', category: 'wildlife' },
    { id: 6, image: 'images/Halifax_Retro_Arcade.jpg', title: 'Nostalgia Corner', category: 'Interior' },
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);
  
  return (
    <section className="gallery">
      <div className="container">
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">A selection of my favourite captures, showcasing the beauty and personality of my subjects. Each image tells a unique story.</p>
        
        <div className="gallery-filters">
          <div className="filter-group">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'pets' ? 'active' : ''}`}
              onClick={() => setActiveFilter('pets')}
            >
              Pets
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'wildlife' ? 'active' : ''}`}
              onClick={() => setActiveFilter('wildlife')}
            >
              Wildlife
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Interior' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Interior')}
            >
              Interior
            </button>
          </div>
        </div>
        
        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.title} className="gallery-image" />
              <div className="gallery-overlay">
                <h3 className="gallery-title">{item.title}</h3>
                <p className="gallery-category">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gallery-link-container">
          <Link to="/gallery" className="gallery-link">
            View Full Gallery
            <svg className="gallery-link-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
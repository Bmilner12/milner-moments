import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/GalleryPage.css';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'pets', name: 'Pet Photography' },
    { id: 'wildlife', name: 'Wildlife Photography' },
    { id: 'portraits', name: 'Portrait Photography' },
  ];
  
  const subcategories = {
    pets: ['Dogs', 'Cats', 'Other Pets'],
    wildlife: ['Birds', 'Mammals', 'Insects'],
    portraits: ['Individuals', 'Couples', 'Families']
  };
  
  // This would be replaced with your actual gallery images
  const galleryImages = [
    { id: 1, category: 'pets', subcategory: 'Dogs', title: 'Autumn Joy', description: 'Golden retriever playing in autumn leaves', image: '/api/placeholder/800/1000' },
    { id: 2, category: 'pets', subcategory: 'Cats', title: 'Emerald Gaze', description: 'Close-up of a tabby cat with striking green eyes', image: '/api/placeholder/800/1000' },
    { id: 3, category: 'pets', subcategory: 'Dogs', title: 'Beach Run', description: 'Black lab running along the shoreline', image: '/api/placeholder/800/1000' },
    { id: 4, category: 'wildlife', subcategory: 'Birds', title: 'Perfect Timing', description: 'Kingfisher diving for a fish', image: '/api/placeholder/800/1000' },
    { id: 5, category: 'wildlife', subcategory: 'Mammals', title: 'Wilderness Guardian', description: 'Fox in its natural habitat', image: '/api/placeholder/800/1000' },
    { id: 6, category: 'wildlife', subcategory: 'Insects', title: 'New Beginnings', description: 'Butterfly emerging from cocoon', image: '/api/placeholder/800/1000' },
    { id: 7, category: 'portraits', subcategory: 'Families', title: 'Connected Moments', description: 'Family enjoying a picnic in the park', image: '/api/placeholder/800/1000' },
    { id: 8, category: 'portraits', subcategory: 'Couples', title: 'Twilight Romance', description: 'Couple silhouette against sunset', image: '/api/placeholder/800/1000' },
    { id: 9, category: 'portraits', subcategory: 'Individuals', title: 'Authentic Self', description: 'Natural light portrait of woman laughing', image: '/api/placeholder/800/1000' },
    { id: 10, category: 'pets', subcategory: 'Other Pets', title: 'Curious Friend', description: 'Rabbit exploring a garden setting', image: '/api/placeholder/800/1000' },
    { id: 11, category: 'wildlife', subcategory: 'Mammals', title: 'Dawn Visitor', description: 'Deer at sunrise in misty field', image: '/api/placeholder/800/1000' },
    { id: 12, category: 'portraits', subcategory: 'Families', title: 'New Friends', description: 'Child with puppy portrait', image: '/api/placeholder/800/1000' },
  ];
  
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);
    
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };
  
  return (
    <div className="gallery-page">
      <Header />
      
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Photography Gallery</h1>
          <p className="page-subtitle">Browse through our collection of stunning photography</p>
        </div>
      </div>
      
      <section className="gallery-content">
        <div className="container">
          <div className="gallery-categories">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {activeCategory !== 'all' && (
            <div className="gallery-subcategories">
              {subcategories[activeCategory].map((subcat, index) => (
                <span key={index} className="subcategory-tag">{subcat}</span>
              ))}
            </div>
          )}
          
          <div className="gallery-grid">
            {filteredImages.map(img => (
              <div 
                key={img.id} 
                className="gallery-item"
                onClick={() => openLightbox(img)}
              >
                <img src={img.image} alt={img.title} />
                <div className="gallery-item-overlay">
                  <h3>{img.title}</h3>
                  <p>{img.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="no-images">
              <p>No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            
            <div className="lightbox-image-container">
              <button className="lightbox-nav prev" onClick={() => navigateImage('prev')}>‹</button>
              <img src={selectedImage.image} alt={selectedImage.title} className="lightbox-image" />
              <button className="lightbox-nav next" onClick={() => navigateImage('next')}>›</button>
            </div>
            
            <div className="lightbox-details">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <div className="lightbox-meta">
                <span className="lightbox-category">{selectedImage.category}</span>
                <span className="lightbox-subcategory">{selectedImage.subcategory}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <section className="cta-section">
        <div className="container">
          <h2>Love what you see?</h2>
          <p>Book a photography session to capture your own special moments.</p>
          <a href="/contact" className="cta-button">Book a Session</a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
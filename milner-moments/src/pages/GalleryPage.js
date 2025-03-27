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
    { id: 'portraits', name: 'Interior Space Photography' },
  ];
  
  const subcategories = {
    pets: ['Dogs', 'Cats', 'Other Pets'],
    wildlife: ['Birds', 'Mammals', 'Insects'],
    portraits: ['Residential', 'Commercial', 'Architectural']
  };
  
  // This would be replaced with your actual gallery images
  const galleryImages = [
    { id: 1, category: 'pets', subcategory: 'Dogs', title: 'Alert Companion', description: 'Energetic mixed-breed dog enjoying a walk on a crisp autumn day.', image: 'images/dog_with_lead.jpg' },
    { id: 2, category: 'pets', subcategory: 'Other Pets', title: '', description: 'Close-up of a tabby cat with striking green eyes', image: 'images/Toby.jpg' },
    { id: 3, category: 'pets', subcategory: 'Dogs', title: 'Beach Run', description: 'Black lab running along the shoreline', image: 'images/Golden_Retriever_Puppy.jpg' },
    { id: 4, category: 'wildlife', subcategory: 'Birds', title: 'Perfect Timing', description: 'Kingfisher diving for a fish', image: 'images/Mute_Swan_Wings.jpg' },
    { id: 5, category: 'wildlife', subcategory: 'Mammals', title: 'Wilderness Guardian', description: 'Fox in its natural habitat', image: 'images/Robin.jpg' },
    { id: 6, category: 'wildlife', subcategory: 'Insects', title: 'New Beginnings', description: 'Butterfly emerging from cocoon', image: 'images/Duck.jpg' },
    { id: 7, category: 'portraits', subcategory: 'Architectural', title: 'Connected Moments', description: 'Family enjoying a picnic in the park', image: 'images/OldPostOffice_portrait.jpg' },
    { id: 8, category: 'portraits', subcategory: 'Commercial', title: 'Twilight Romance', description: 'Couple silhouette against sunset', image: 'images/Halifax_Retro_Arcade.jpg' },
    { id: 9, category: 'portraits', subcategory: 'Residential', title: 'Authentic Self', description: 'Natural light interior space of woman laughing', image: 'images/Royal_Armouries.jpg' },
    { id: 10, category: 'pets', subcategory: 'Other Pets', title: 'Curious Friend', description: 'Rabbit exploring a garden setting', image: 'images/Lizard.jpg' },
    { id: 11, category: 'wildlife', subcategory: 'Mammals', title: 'Dawn Visitor', description: 'Deer at sunrise in misty field', image: 'images/Flower_Field.jpg' },
    { id: 12, category: 'portraits', subcategory: 'Architectural', title: 'New Friends', description: 'Child with puppy interior space', image: 'images/OldPostOffice_Table.jpg' },
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
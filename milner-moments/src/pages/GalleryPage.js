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
    { id: 'Interior', name: 'Interior Space Photography' },
  ];
  
  const subcategories = {
    pets: ['Dogs', 'Cats', 'Other Pets'],
    wildlife: ['Birds', 'Mammals', 'Other'],
    Interior: ['Residential', 'Commercial', 'Architectural']
  };
  
  // This would be replaced with your actual gallery images
  const galleryImages = [
    { id: 1, category: 'pets', subcategory: 'Dogs', title: 'Alert Companion', description: 'Energetic mixed-breed dog enjoying a walk on a crisp autumn day.', image: 'images/dog_with_lead.jpg' },
    { id: 2, category: 'pets', subcategory: 'Dogs', title: 'Sleeping Chorkie in Repose', description: 'Close-up of a peaceful Chorkie (Chihuahua-Terrier mix) with sandy fur, dozing peacefully on a carpet.', image: 'images/Toby.jpg' },
    { id: 3, category: 'pets', subcategory: 'Dogs', title: 'Curious Labrador Puppy', description: 'Young Labrador puppy with cream-colored fur looking upward attentively, wearing a harness and collar.', image: 'images/Golden_Retriever_Puppy.jpg' },
    { id: 4, category: 'wildlife', subcategory: 'Birds', title: 'Graceful Sentinel', description: 'Elegant swan captured in a moment of serene contemplation at water\'s edge, its pristine white feathers contrasting against the earthy backdrop of nature.', image: 'images/Mute_Swan_Wings.jpg' },
    { id: 5, category: 'wildlife', subcategory: 'Birds', title: 'Urban Guardian', description: 'A vibrant robin perched on weathered stone, its bright orange breast a splash of color against the rustic backdrop of aged brick.', image: 'images/Robin.jpg' },
    { id: 6, category: 'wildlife', subcategory: 'Birds', title: 'Tranquil Passage', description: 'A solitary duck glides across emerald waters, creating gentle ripples that dance with the light while spring reeds frame this moment of peaceful solitude.', image: 'images/Duck.jpg' },
    { id: 7, category: 'Interior', subcategory: 'Commercial', title: 'Timeless Corner', description: 'A cozy, vintage-inspired café setting bathed in soft natural light, evoking warmth and nostalgia.', image: 'images/OldPostOffice_portrait.jpg' },
    { id: 8, category: 'Interior', subcategory: 'Residential', title: 'Nostalgic Retreat', description: 'A cozy, retro-inspired living room filled with vintage charm, warm lighting, and classic childhood memories.', image: 'images/Halifax_Retro_Arcade.jpg' },
    { id: 9, category: 'Interior', subcategory: 'Architectural', title: 'Majestic Arsenal', description: 'A striking architectural display of historical weaponry, arranged in perfect symmetry beneath a grand skylight.', image: 'images/Royal_Armouries.jpg' },
    { id: 10, category: 'pets', subcategory: 'Other Pets', title: 'Curious Friend', description: ' Capturing the mesmerising gaze and textured beauty of reptilian wisdom against a soft emerald backdrop.', image: 'images/Lizard.jpg' },
    { id: 11, category: 'wildlife', subcategory: 'Other', title: 'Spring Symphony', description: 'A magnificent tapestry of purple and white crocuses blankets the earth in a breathtaking display of nature\'s artistry, heralding the arrival of spring.', image: 'images/Flower_Field.jpg' },
    { id: 12, category: 'Interior', subcategory: 'Commercial', title: 'Solitary Anticipation', description: 'Soft light filters through multi-paned windows, illuminating a minimalist dining space with a rich wooden table and curved chairs, creating a mood of quiet expectation.', image: 'images/OldPostOffice_Table.jpg' },
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
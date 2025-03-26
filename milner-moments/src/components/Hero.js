import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Hero.css';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      image: 'images/dog_with_lead.jpg',
      title: 'Pet Photography',
      subtitle: 'Capturing Personalities'
    },
    {
      image: 'images/Mute_Swan_Reflection.jpg',
      title: 'Wildlife Photography',
      subtitle: 'Nature\'s Finest Moments'
    },
    {
      image: 'images/Royal_Armouries.jpg',
      title: 'Landscape Photography',
      subtitle: 'Timeless Memories'
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  const handleDotClick = (index) => {
    setActiveSlide(index);
  };
  
  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
        >
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="hero-image"
          />
        </div>
      ))}
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">{slides[activeSlide].title}</h1>
        <h2 className="hero-subtitle">{slides[activeSlide].subtitle}</h2>
        <Link to="/gallery" className="hero-btn">Explore</Link>
      </div>
      
      <div className="slide-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`slide-dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
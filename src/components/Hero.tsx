import React, { useState, useEffect } from 'react';
import { portfolioIdentities, heroContent } from '../data/introData';
import './Hero.css';

const Hero: React.FC = () => {
  const [currentIdentity, setCurrentIdentity] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const identity = portfolioIdentities[currentIdentity];
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < identity.length) {
        setDisplayText(identity.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, 100);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setDisplayText('');
          setCurrentIdentity(prev => (prev + 1) % portfolioIdentities.length);
        }, 2000);
      }
    };

    if (isTyping) {
      typeText();
    }
  }, [currentIdentity, isTyping]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">{heroContent.greeting}</span>
            <span className="name">{heroContent.name}</span>
          </h1>

          <div className="identity-container">
            <span className="identity-prefix">A </span>
            <span className="identity-text">
              {displayText}
              <span className={`cursor ${isTyping ? 'blink' : ''}`}>|</span>
            </span>
          </div>

          <p className="hero-description">{heroContent.description}</p>

          <div className="hero-buttons">
            <button className="cosmic-button primary" onClick={scrollToAbout}>
              {heroContent.buttons.primary}
            </button>
            <a
              href={`mailto:${heroContent.contact.email}`}
              className="cosmic-button secondary"
            >
              {heroContent.buttons.secondary}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="quantum-sphere">
            <div className="sphere-core"></div>
            <div className="orbit orbit-1">
              <div className="particle"></div>
            </div>
            <div className="orbit orbit-2">
              <div className="particle"></div>
            </div>
            <div className="orbit orbit-3">
              <div className="particle"></div>
            </div>
          </div>

          <div className="floating-elements">
            {heroContent.floatingElements.map((element, index) => (
              <div key={index} className={`element element-${index + 1}`}>
                {element}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>{heroContent.scrollText}</span>
      </div>
    </section>
  );
};

export default Hero;

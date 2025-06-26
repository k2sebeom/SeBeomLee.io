import React, { useState, useEffect } from 'react';
import { portfolioIdentities } from '../data/introData';
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
          setCurrentIdentity((prev) => (prev + 1) % portfolioIdentities.length);
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
            <span className="greeting">Hello, I'm</span>
            <span className="name">SeBeom Lee</span>
          </h1>
          
          <div className="identity-container">
            <span className="identity-prefix">A </span>
            <span className="identity-text">
              {displayText}
              <span className={`cursor ${isTyping ? 'blink' : ''}`}>|</span>
            </span>
          </div>
          
          <p className="hero-description">
            Solutions Architect at AWS with a passion for Physics, AI, and Game Development.
            I build innovative solutions that bridge the gap between cutting-edge technology 
            and real-world applications.
          </p>
          
          <div className="hero-buttons">
            <button className="cosmic-button primary" onClick={scrollToAbout}>
              Explore My Universe
            </button>
            <a 
              href="mailto:slee5@oberlin.edu" 
              className="cosmic-button secondary"
            >
              Contact Mission Control
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
            <div className="element element-1">⚛️</div>
            <div className="element element-2">🚀</div>
            <div className="element element-3">🎮</div>
            <div className="element element-4">🤖</div>
            <div className="element element-5">☁️</div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;

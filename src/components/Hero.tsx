import React, { useState, useEffect } from 'react';
import { portfolioIdentities, heroContent } from '../data/introData';
import './Hero.css';

const Hero: React.FC = () => {
  const [currentIdentity, setCurrentIdentity] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const identity = portfolioIdentities[currentIdentity];
    let idx = 0;

    const typeChar = () => {
      if (idx < identity.length) {
        setDisplayText(identity.substring(0, idx + 1));
        idx++;
        setTimeout(typeChar, 70);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setDisplayText('');
          setCurrentIdentity(prev => (prev + 1) % portfolioIdentities.length);
        }, 2500);
      }
    };

    if (isTyping) typeChar();
  }, [currentIdentity, isTyping]);

  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <div className="hero__greeting">{heroContent.greeting}</div>

          <h1 className="hero__name">
            <span className="hero__name-first">SeBeom</span>
            <span className="hero__name-last">Lee</span>
          </h1>

          <div className="hero__identity">
            <span className="hero__identity-text">
              {displayText}
              <span
                className={`hero__cursor ${isTyping ? 'hero__cursor--active' : ''}`}
              />
            </span>
          </div>

          <p className="hero__desc">{heroContent.description}</p>

          <div className="hero__ctas">
            <button className="btn-primary" onClick={scrollToAbout}>
              {heroContent.buttons.primary}
            </button>
            <a
              href={`mailto:${heroContent.contact.email}`}
              className="btn-glass"
            >
              {heroContent.buttons.secondary}
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__glass-shape hero__glass-shape--1" />
          <div className="hero__glass-shape hero__glass-shape--2" />
          <div className="hero__glass-shape hero__glass-shape--3" />
          <div className="hero__glow-core" />
        </div>
      </div>

      <button className="hero__scroll" onClick={scrollToAbout}>
        <span className="hero__scroll-dot" />
        <span className="hero__scroll-label">scroll</span>
      </button>
    </section>
  );
};

export default Hero;

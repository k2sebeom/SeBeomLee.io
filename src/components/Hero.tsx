import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { heroContent, portfolioIdentities } from '../data/introData';
import { scrollToId } from '../lib/smoothScroll';
import Magnetic from './Magnetic';
import './Hero.css';

const ease = [0.22, 1, 0.36, 1] as const;

const Hero: React.FC = () => {
  const [identityIndex, setIdentityIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIdentityIndex(i => (i + 1) % portfolioIdentities.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  const [first, ...rest] = heroContent.name.split(' ');

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <motion.div
          className="hero__chip"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="hero__chip-dot" />
          Solutions Architect · AWS Korea
        </motion.div>

        <h1 className="hero__name" aria-label={heroContent.name}>
          {[first, rest.join(' ')].map((word, wi) => (
            <span key={wi} className="hero__line">
              {word.split('').map((ch, ci) => (
                <motion.span
                  key={ci}
                  className={
                    wi === 1 ? 'hero__char gradient-text' : 'hero__char'
                  }
                  initial={{ y: '110%', rotate: 8 }}
                  animate={{ y: '0%', rotate: 0 }}
                  transition={{
                    duration: 1.1,
                    delay: 0.15 + wi * 0.15 + ci * 0.035,
                    ease,
                  }}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.div
          className="hero__identity"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <span className="hero__identity-prefix" aria-hidden>
            /
          </span>
          <span className="hero__identity-slot">
            <AnimatePresence mode="wait">
              <motion.span
                key={identityIndex}
                className="hero__identity-word"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                {portfolioIdentities[identityIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        <motion.p
          className="hero__desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease }}
        >
          {heroContent.description}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease }}
        >
          <Magnetic>
            <button
              className="btn btn--primary"
              onClick={() => scrollToId('projects')}
            >
              {heroContent.buttons.primary} <span aria-hidden>→</span>
            </button>
          </Magnetic>
          <Magnetic>
            <button
              className="btn btn--ghost"
              onClick={() => scrollToId('contact')}
            >
              {heroContent.buttons.secondary}
            </button>
          </Magnetic>
        </motion.div>
      </div>

      <motion.button
        className="hero__scroll"
        onClick={() => scrollToId('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        aria-label="Scroll to about"
      >
        <span className="hero__scroll-track">
          <span className="hero__scroll-thumb" />
        </span>
        {heroContent.scrollText}
      </motion.button>
    </section>
  );
};

export default Hero;

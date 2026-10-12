import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { navItems, logoText } from '../data/navigationData';
import { scrollToId } from '../lib/smoothScroll';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (
          el &&
          scrollPosition >= el.offsetTop &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <button className="nav__logo" onClick={() => scrollToId('hero')}>
        <span className="nav__logo-mark">S</span>
        <span className="nav__logo-text">{logoText}</span>
      </button>

      <div className="nav__links">
        {navItems.slice(1).map(item => (
          <button
            key={item.id}
            className={`nav__link ${activeSection === item.id ? 'nav__link--active' : ''}`}
            onClick={() => scrollToId(item.id)}
          >
            {activeSection === item.id && (
              <motion.span
                layoutId="nav-pill"
                className="nav__pill"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            <span className="nav__label">{item.label}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;

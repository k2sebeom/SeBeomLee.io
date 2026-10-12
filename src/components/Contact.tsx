import React from 'react';
import {
  contactEmail,
  contactMethods,
  serviceHighlights,
  contactIntro,
  footerInfo,
} from '../data/contactData';
import { logoText } from '../data/navigationData';
import Reveal from './Reveal';
import Magnetic from './Magnetic';
import './Contact.css';

const Contact: React.FC = () => (
  <section id="contact" className="section contact">
    <Reveal className="contact__hero">
      <span className="section-eyebrow">05 · Contact</span>
      <h2 className="contact__title">
        {contactIntro.title.replace(/\.$/, '')}
        <span className="gradient-text">.</span>
      </h2>
      <p className="contact__text">{contactIntro.text}</p>

      <Magnetic strength={0.25}>
        <a className="contact__email" href={`mailto:${contactEmail}`}>
          <span className="contact__email-label">Say hello</span>
          <span className="contact__email-address">{contactEmail}</span>
          <span className="contact__email-arrow" aria-hidden>
            →
          </span>
        </a>
      </Magnetic>
    </Reveal>

    <Reveal className="contact__highlights" delay={0.1}>
      {serviceHighlights.map(h => (
        <span key={h.text} className="contact__highlight">
          <span aria-hidden>{h.icon}</span>
          {h.text}
        </span>
      ))}
    </Reveal>

    <Reveal className="contact__methods" delay={0.15}>
      {contactMethods.map(method => (
        <a
          key={method.title}
          href={method.link}
          target={method.link.startsWith('mailto:') ? undefined : '_blank'}
          rel="noopener noreferrer"
          className="contact__method glass"
        >
          <span className="contact__method-icon">{method.icon}</span>
          <span className="contact__method-info">
            <span className="contact__method-title">{method.title}</span>
            <span className="contact__method-value">{method.value}</span>
          </span>
          <span className="contact__method-arrow" aria-hidden>
            ↗
          </span>
        </a>
      ))}
    </Reveal>

    <footer className="contact__footer">
      <blockquote className="contact__quote">
        &ldquo;{footerInfo.quote}&rdquo;
        <cite>— {footerInfo.author}</cite>
      </blockquote>
      <div className="contact__meta">
        <span>{footerInfo.location}</span>
        <span>{footerInfo.availability}</span>
        <span>
          © {new Date().getFullYear()} {logoText}
        </span>
      </div>
    </footer>
  </section>
);

export default Contact;

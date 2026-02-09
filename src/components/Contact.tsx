import React, { useState } from 'react';
import {
  contactMethods,
  serviceHighlights,
  contactIntro,
  footerInfo,
} from '../data/contactData';
import ScrollReveal from './ScrollReveal';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formData.subject || 'Contact from Portfolio'
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:slee5@oberlin.edu?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact__container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-number">// 05</span>
            <h2 className="section-title">
              <span className="gradient-text">Contact</span>
            </h2>
            <p className="section-subtitle">
              Have a project in mind? Let&rsquo;s build something together.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact__content">
          <ScrollReveal direction="left">
            <div className="contact__info">
              <div className="contact__intro glass">
                <h3 className="contact__intro-title">{contactIntro.title}</h3>
                <p className="contact__intro-text">{contactIntro.text}</p>
                <div className="contact__highlights">
                  {serviceHighlights.map((h, i) => (
                    <div key={i} className="contact__highlight">
                      <span className="contact__highlight-icon">{h.icon}</span>
                      <span className="contact__highlight-text">{h.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact__methods">
                {contactMethods.map((method, index) => (
                  <ScrollReveal key={index} delay={index * 80} direction="left">
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__method glass-elevated"
                    >
                      <span className="contact__method-icon">
                        {method.icon}
                      </span>
                      <div className="contact__method-info">
                        <h4 className="contact__method-title">
                          {method.title}
                        </h4>
                        <span className="contact__method-value">
                          {method.value}
                        </span>
                      </div>
                      <span className="contact__method-arrow">&rarr;</span>
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="contact__form glass">
              <h3 className="contact__form-title">Send a Message</h3>
              <form onSubmit={handleSubmit} className="contact__form-fields">
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="name" className="contact__label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="contact__input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email" className="contact__label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="contact__input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="subject" className="contact__label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="contact__input"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="message" className="contact__label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="contact__textarea"
                    rows={5}
                    placeholder="Tell me about your project or just say hello..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary contact__submit">
                  Send Message &rarr;
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <footer className="contact__footer glass">
            <div className="contact__footer-quote">
              <blockquote>
                &ldquo;{footerInfo.quote}&rdquo;
                <cite>&mdash; {footerInfo.author}</cite>
              </blockquote>
            </div>
            <div className="contact__footer-info">
              <p>{footerInfo.location}</p>
              <p>{footerInfo.availability}</p>
              <p>{footerInfo.responseTime}</p>
            </div>
          </footer>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { contactMethods, serviceHighlights, contactIntro, footerInfo } from '../data/contactData';
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
    // Create mailto link with form data
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
      <div className="contact-container">
        <h2 className="section-title">Mission Control</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro cosmic-card">
              <h3 className="intro-title">{contactIntro.title}</h3>
              <p className="intro-text">{contactIntro.text}</p>
              <div className="intro-highlights">
                {serviceHighlights.map((highlight, index) => (
                  <div key={index} className="highlight">
                    <span className="highlight-icon">{highlight.icon}</span>
                    <span>{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method cosmic-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-info">
                    <h4 className="method-title">{method.title}</h4>
                    <p className="method-value">{method.value}</p>
                    <p className="method-description">{method.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <div className="contact-form cosmic-card">
              <h3 className="form-title">Send a Transmission</h3>
              <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="What's your mission?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows={6}
                    placeholder="Tell me about your project, ideas, or just say hello!"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="cosmic-button form-submit">
                  <span className="submit-icon">🚀</span>
                  Launch Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <div className="footer-content cosmic-card">
            <div className="footer-quote">
              <blockquote>
                {footerInfo.quote}
                <cite>- {footerInfo.author}</cite>
              </blockquote>
            </div>
            <div className="footer-info">
              <p>{footerInfo.location}</p>
              <p>{footerInfo.availability}</p>
              <p>{footerInfo.responseTime}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

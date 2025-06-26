import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:slee5@oberlin.edu?subject=${subject}&body=${body}`;
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'slee5@oberlin.edu',
      link: 'mailto:slee5@oberlin.edu',
      description: 'Primary communication channel'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com/in/sebeom-lee',
      description: 'Professional networking'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'k2sebeom',
      link: 'https://github.com/k2sebeom',
      description: 'Code repositories & projects'
    },
    {
      icon: '🌐',
      title: 'Portfolio',
      value: 'sebeom.dev',
      link: 'https://sebeom.dev',
      description: 'Personal website'
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="contact-container">
        <h2 className="section-title">Mission Control</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro cosmic-card">
              <h3 className="intro-title">Ready to Launch Something Amazing?</h3>
              <p className="intro-text">
                Whether you're looking to build the next breakthrough AI application, 
                architect scalable cloud solutions, or explore the intersection of 
                physics and technology, I'm here to help turn your vision into reality.
              </p>
              <div className="intro-highlights">
                <div className="highlight">
                  <span className="highlight-icon">🚀</span>
                  <span>Cloud Architecture & AWS Solutions</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🤖</span>
                  <span>AI/ML Implementation & Strategy</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">⚛️</span>
                  <span>Physics-Based Computational Solutions</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🎮</span>
                  <span>Game Development & Interactive Experiences</span>
                </div>
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
                  <label htmlFor="name" className="form-label">Name</label>
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
                  <label htmlFor="email" className="form-label">Email</label>
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
                  <label htmlFor="subject" className="form-label">Subject</label>
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
                  <label htmlFor="message" className="form-label">Message</label>
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
                "The universe is not only stranger than we imagine, it is stranger than we can imagine."
                <cite>- J.B.S. Haldane</cite>
              </blockquote>
            </div>
            <div className="footer-info">
              <p>Currently based in Ohio, USA 🌍</p>
              <p>Available for remote collaboration across the galaxy 🛸</p>
              <p>Response time: Usually within 24 Earth hours ⏰</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

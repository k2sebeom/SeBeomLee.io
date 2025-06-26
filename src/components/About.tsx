import React from 'react';
import { aboutMeData } from '../data/aboutData';
import './About.css';

const About: React.FC = () => {
  const skills = [
    { category: 'Cloud & Architecture', items: ['AWS', 'Solutions Architecture', 'Serverless', 'Microservices'], icon: '☁️' },
    { category: 'AI & Machine Learning', items: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'], icon: '🤖' },
    { category: 'Physics & Simulation', items: ['Computational Physics', 'Numerical Methods', 'Quantum Computing', 'Modeling'], icon: '⚛️' },
    { category: 'Game Development', items: ['Unity', 'C#', 'Game Design', 'Graphics Programming'], icon: '🎮' },
    { category: 'Full-Stack Development', items: ['React', 'TypeScript', 'Node.js', 'Python'], icon: '💻' },
    { category: 'Blockchain & Web3', items: ['Smart Contracts', 'Solidity', 'DeFi', 'Ethereum'], icon: '⛓️' },
  ];

  return (
    <section id="about" className="section about">
      <div className="about-container">
        <h2 className="section-title">About the Mission</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="statement-card cosmic-card">
              <h3 className="statement-title">Mission Statement</h3>
              <p className="statement-text">{aboutMeData.statement}</p>
            </div>
            
            <div className="bio-card cosmic-card">
              <h3 className="bio-title">Journey Through Space & Time</h3>
              <p className="bio-text">{aboutMeData.bio}</p>
            </div>
          </div>
          
          <div className="skills-constellation">
            <h3 className="skills-title">Technical Arsenal</h3>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-planet cosmic-card">
                  <div className="skill-header">
                    <span className="skill-icon">{skillGroup.icon}</span>
                    <h4 className="skill-category">{skillGroup.category}</h4>
                  </div>
                  <div className="skill-items">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="about-stats">
          <div className="stat-item cosmic-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years of Coding</div>
          </div>
          <div className="stat-item cosmic-card">
            <div className="stat-number">3</div>
            <div className="stat-label">Degrees Pursuing</div>
          </div>
          <div className="stat-item cosmic-card">
            <div className="stat-number">∞</div>
            <div className="stat-label">Curiosity Level</div>
          </div>
          <div className="stat-item cosmic-card">
            <div className="stat-number">42</div>
            <div className="stat-label">Answer to Everything</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { workList } from '../data/workData';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section experience">
      <div className="experience-container">
        <h2 className="section-title">Mission Timeline</h2>
        
        <div className="timeline">
          <div className="timeline-line"></div>
          
          {[...workList].reverse().map((work, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <div className="marker-inner" style={{ backgroundColor: work.color }}>
                  <img src={work.icon} alt={work.company} className="company-icon" />
                </div>
              </div>
              
              <div className="timeline-content cosmic-card">
                <div className="work-header">
                  <h3 className="company-name">{work.company}</h3>
                  <span className="work-date">{work.date}</span>
                </div>
                
                <h4 className="position-title">{work.position}</h4>
                
                <div className="work-description">
                  {work.company === 'Amazon Web Services' && work.position === 'Solutions Architect' && (
                    <p>Currently architecting cloud solutions and helping customers transform their businesses with AWS services. Specializing in AI/ML, serverless architectures, and enterprise-scale deployments.</p>
                  )}
                  {work.company === 'Amazon Web Services' && work.position === 'Solutions Architect Intern' && (
                    <p>Designed and implemented cloud architectures for enterprise clients. Developed proof-of-concepts for AI/ML workloads and contributed to customer success through technical guidance and best practices.</p>
                  )}
                  {work.company === 'Pumpkin Inc.' && (
                    <p>Developed full-stack applications using modern web technologies. Built scalable backend services and responsive frontend interfaces, contributing to the company's digital transformation initiatives.</p>
                  )}
                  {work.company === 'LUXROBO Co., Ltd.' && (
                    <p>Developed Python applications for robotics and automation systems. Worked on computer vision algorithms and machine learning models for intelligent robotic behaviors.</p>
                  )}
                </div>
                
                <div className="work-technologies">
                  {work.company === 'Amazon Web Services' && (
                    <>
                      <span className="tech-tag">AWS</span>
                      <span className="tech-tag">Cloud Architecture</span>
                      <span className="tech-tag">AI/ML</span>
                      <span className="tech-tag">Serverless</span>
                    </>
                  )}
                  {work.company === 'Pumpkin Inc.' && (
                    <>
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">Node.js</span>
                      <span className="tech-tag">TypeScript</span>
                      <span className="tech-tag">MongoDB</span>
                    </>
                  )}
                  {work.company === 'LUXROBO Co., Ltd.' && (
                    <>
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">OpenCV</span>
                      <span className="tech-tag">Machine Learning</span>
                      <span className="tech-tag">Robotics</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="experience-summary cosmic-card">
          <h3 className="summary-title">Journey Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon">🚀</div>
              <div className="highlight-text">
                <h4>Cloud Architecture</h4>
                <p>Designed scalable solutions for enterprise clients</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🤖</div>
              <div className="highlight-text">
                <h4>AI/ML Integration</h4>
                <p>Implemented intelligent systems across various domains</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">💻</div>
              <div className="highlight-text">
                <h4>Full-Stack Development</h4>
                <p>Built end-to-end applications with modern technologies</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">⚛️</div>
              <div className="highlight-text">
                <h4>Research & Innovation</h4>
                <p>Applied physics principles to computational problems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

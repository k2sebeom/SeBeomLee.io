import React from 'react';
import { educationList } from '../data/educationData';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="section education">
      <div className="education-container">
        <h2 className="section-title">Academic Odyssey</h2>
        
        <div className="education-grid">
          {educationList.map((education, index) => (
            <div 
              key={index} 
              className="education-card cosmic-card"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="education-header">
                <div className="education-logo">
                  <img 
                    src={education.thumbnail} 
                    alt={education.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFhMWEyZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMGQ0ZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wn4+r77iPPC90ZXh0Pjwvc3ZnPg==';
                    }}
                  />
                </div>
                <div className="education-info">
                  <h3 className="institution-name">{education.title}</h3>
                  <a 
                    href={education.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="institution-link"
                  >
                    Visit Institution 🔗
                  </a>
                </div>
              </div>
              
              <div className="degrees-list">
                {education.degrees.map((degree, degreeIndex) => (
                  <div key={degreeIndex} className="degree-item">
                    <div className="degree-icon">
                      {degree.includes('Computer Science') ? '💻' :
                       degree.includes('Physics') ? '⚛️' :
                       degree.includes('Mathematics') ? '📐' : '🎓'}
                    </div>
                    <span className="degree-text">{degree}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="academic-highlights cosmic-card">
          <h3 className="highlights-title">Academic Focus Areas</h3>
          <div className="highlights-grid">
            <div className="highlight-area">
              <div className="area-icon">💻</div>
              <h4>Computer Science</h4>
              <p>Algorithms, Data Structures, Software Engineering, AI/ML</p>
            </div>
            <div className="highlight-area">
              <div className="area-icon">⚛️</div>
              <h4>Physics</h4>
              <p>Computational Physics, Quantum Mechanics, Numerical Methods</p>
            </div>
            <div className="highlight-area">
              <div className="area-icon">📐</div>
              <h4>Mathematics</h4>
              <p>Calculus, Linear Algebra, Differential Equations, Statistics</p>
            </div>
          </div>
        </div>
        
        <div className="education-journey cosmic-card">
          <h3 className="journey-title">Learning Philosophy</h3>
          <div className="philosophy-content">
            <div className="philosophy-item">
              <div className="philosophy-icon">🌌</div>
              <div className="philosophy-text">
                <h4>Interdisciplinary Approach</h4>
                <p>Bridging the gap between theoretical physics and practical computer science to solve complex problems.</p>
              </div>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">🔬</div>
              <div className="philosophy-text">
                <h4>Research-Driven Learning</h4>
                <p>Applying scientific methodology to software development and exploring computational solutions to physical phenomena.</p>
              </div>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">🚀</div>
              <div className="philosophy-text">
                <h4>Innovation Through Education</h4>
                <p>Leveraging academic knowledge to drive technological innovation and create meaningful impact in the industry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

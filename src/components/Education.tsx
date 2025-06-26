import React from 'react';
import { educationList } from '../data/educationData';
import { academicAreas, learningPhilosophy, getDegreeIcon } from '../data/academicData';
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
                    onError={e => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFhMWEyZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMGQ0ZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wn4+r77iPPC90ZXh0Pjwvc3ZnPg==';
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
                      {getDegreeIcon(degree)}
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
            {academicAreas.map((area, index) => (
              <div key={index} className="highlight-area">
                <div className="area-icon">{area.icon}</div>
                <h4>{area.title}</h4>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="education-journey cosmic-card">
          <h3 className="journey-title">Learning Philosophy</h3>
          <div className="philosophy-content">
            {learningPhilosophy.map((item, index) => (
              <div key={index} className="philosophy-item">
                <div className="philosophy-icon">{item.icon}</div>
                <div className="philosophy-text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

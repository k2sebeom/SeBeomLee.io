import React from 'react';
import { workList } from '../data/workData';
import { journeyHighlights } from '../data/experienceData';
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
                <div
                  className="marker-inner"
                  style={{ backgroundColor: work.color }}
                >
                  <img
                    src={work.icon}
                    alt={work.company}
                    className="company-icon"
                  />
                </div>
              </div>

              <div className="timeline-content cosmic-card">
                <div className="work-header">
                  <h3 className="company-name">{work.company}</h3>
                  <span className="work-date">{work.date}</span>
                </div>

                <h4 className="position-title">{work.position}</h4>

                <div className="work-description">
                  <p>{work.description}</p>
                </div>

                <div className="work-technologies">
                  {work.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-summary cosmic-card">
          <h3 className="summary-title">Journey Highlights</h3>
          <div className="highlights-grid">
            {journeyHighlights.map((highlight, index) => (
              <div key={index} className="highlight-item">
                <div className="highlight-icon">{highlight.icon}</div>
                <div className="highlight-text">
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

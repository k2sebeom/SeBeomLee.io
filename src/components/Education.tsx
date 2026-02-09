import React from 'react';
import { educationList } from '../data/educationData';
import {
  academicAreas,
  learningPhilosophy,
  getDegreeIcon,
} from '../data/academicData';
import ScrollReveal from './ScrollReveal';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="section education">
      <ScrollReveal>
        <div className="section-header">
          <span className="section-number">// 04</span>
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            A foundation in Computer Science, Physics, and Mathematics.
          </p>
        </div>
      </ScrollReveal>

      <div className="edu__cards">
        {educationList.map((edu, i) => (
          <ScrollReveal key={i} delay={i * 150} direction="scale">
            <div className="edu__card glass-elevated">
              <div className="edu__top">
                <div className="edu__logo">
                  <img
                    src={edu.thumbnail}
                    alt={edu.title}
                    onError={e => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <h3 className="edu__name">{edu.title}</h3>
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="edu__link"
                  >
                    Visit &rarr;
                  </a>
                </div>
              </div>
              <div className="edu__degrees">
                {edu.degrees.map((deg, di) => (
                  <div key={di} className="edu__degree">
                    <span>{getDegreeIcon(deg)}</span>
                    <span>{deg}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={100}>
        <div className="edu__areas glass">
          <h3 className="edu__heading">Academic Focus</h3>
          <div className="edu__areas-grid">
            {academicAreas.map((a, i) => (
              <div key={i} className="edu__area">
                <span className="edu__area-icon">{a.icon}</span>
                <h4 className="edu__area-name">{a.title}</h4>
                <p className="edu__area-desc">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="edu__phil glass">
          <h3 className="edu__heading">Learning Philosophy</h3>
          <div className="edu__phil-list">
            {learningPhilosophy.map((p, i) => (
              <div key={i} className="edu__phil-item">
                <span className="edu__phil-icon">{p.icon}</span>
                <div>
                  <h4 className="edu__phil-name">{p.title}</h4>
                  <p className="edu__phil-desc">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Education;

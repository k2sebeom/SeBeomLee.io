import React from 'react';
import { aboutMeData } from '../data/aboutData';
import { skillGroups } from '../data/skillsData';
import './About.css';

const About: React.FC = () => {
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
              {skillGroups.map((skillGroup, index) => (
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
      </div>
    </section>
  );
};

export default About;

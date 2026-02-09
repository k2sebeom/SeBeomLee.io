import React from 'react';
import { aboutMeData } from '../data/aboutData';
import { skillGroups } from '../data/skillsData';
import ScrollReveal from './ScrollReveal';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <ScrollReveal>
        <div className="section-header">
          <span className="section-number">// 01</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Building bridges between cloud innovation and real-world impact.
          </p>
        </div>
      </ScrollReveal>

      <div className="about__bento">
        <ScrollReveal direction="left" className="about__bio glass">
          <div className="about__bio-inner">
            <h3 className="about__bio-label">Who I Am</h3>
            <p className="about__bio-text">{aboutMeData.statement}</p>
            <div className="about__divider" />
            <h3 className="about__bio-label">My Journey</h3>
            <p className="about__bio-text">{aboutMeData.bio}</p>
          </div>
        </ScrollReveal>

        <div className="about__skills">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={i} delay={i * 80} direction="scale">
              <div className="about__skill glass-elevated">
                <span className="about__skill-icon">{group.icon}</span>
                <h4 className="about__skill-name">{group.category}</h4>
                <div className="about__skill-tags">
                  {group.items.map((s, si) => (
                    <span key={si} className="tag-glass">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

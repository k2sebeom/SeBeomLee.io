import React from 'react';
import { workList } from '../data/workData';
import { journeyHighlights } from '../data/experienceData';
import ScrollReveal from './ScrollReveal';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section experience">
      <ScrollReveal>
        <div className="section-header">
          <span className="section-number">// 02</span>
          <h2 className="section-title">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            From intern to architect &mdash; designing cloud solutions at scale.
          </p>
        </div>
      </ScrollReveal>

      <div className="exp__timeline">
        {[...workList].reverse().map((work, i) => (
          <ScrollReveal key={i} delay={i * 120}>
            <div className="exp__entry">
              <div className="exp__dot-wrap">
                <div className="exp__dot" />
                {i < workList.length - 1 && <div className="exp__line" />}
              </div>
              <div className="exp__card glass-elevated">
                <div className="exp__top">
                  <div>
                    <h3 className="exp__company">{work.company}</h3>
                    <h4 className="exp__role">{work.position}</h4>
                  </div>
                  <span className="exp__date">{work.date}</span>
                </div>
                <p className="exp__desc">{work.description}</p>
                <div className="exp__tech">
                  {work.technologies.map((t, ti) => (
                    <span key={ti} className="tag-aurora">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={200}>
        <div className="exp__highlights glass">
          <h3 className="exp__hl-title">Key Highlights</h3>
          <div className="exp__hl-grid">
            {journeyHighlights.map((h, i) => (
              <div key={i} className="exp__hl-item">
                <span className="exp__hl-icon">{h.icon}</span>
                <div>
                  <h4 className="exp__hl-name">{h.title}</h4>
                  <p className="exp__hl-desc">{h.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Experience;

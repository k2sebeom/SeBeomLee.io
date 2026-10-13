import React from 'react';
import { Trophy } from 'lucide-react';
import { educationList, getDegreeIcon } from '../data/educationData';
import { spotlightHandler } from '../lib/spotlight';
import Reveal from './Reveal';
import './Education.css';

const Education: React.FC = () => (
  <section id="education" className="section education">
    <Reveal className="section-header">
      <span className="section-eyebrow">04 · Education</span>
      <h2 className="section-title">
        Rooted in <span className="gradient-text">CS, physics, and math</span>.
      </h2>
    </Reveal>

    <div className="edu__grid">
      {educationList.map((edu, i) => (
        <Reveal key={edu.title} delay={i * 0.1}>
          <article
            className={`edu__card glass spotlight ${i === 0 ? 'edu__card--main' : ''}`}
            onMouseMove={spotlightHandler}
          >
            <header className="edu__top">
              <div className="edu__logo">
                <img src={edu.thumbnail} alt="" />
              </div>
              <div>
                <h3 className="edu__name">{edu.title}</h3>
                {edu.date && <span className="edu__date">{edu.date}</span>}
              </div>
              <a
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="edu__link"
                aria-label={`Visit ${edu.title}`}
              >
                ↗
              </a>
            </header>

            <ul className="edu__degrees">
              {edu.degrees.map(deg => {
                const DegreeIcon = getDegreeIcon(deg);
                return (
                  <li key={deg} className="edu__degree">
                    <DegreeIcon size={18} className="edu__icon" />
                    {deg}
                  </li>
                );
              })}
            </ul>

            {edu.honors && (
              <ul className="edu__honors">
                {edu.honors.map(honor => (
                  <li key={honor} className="edu__honor">
                    <Trophy size={16} className="edu__icon" />
                    {honor}
                  </li>
                ))}
              </ul>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Education;

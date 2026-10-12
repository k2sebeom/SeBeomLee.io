import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { workList } from '../data/workData';
import { spotlightHandler } from '../lib/spotlight';
import Reveal from './Reveal';
import './Experience.css';

const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 70%', 'end 60%'],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const jobs = [...workList].reverse();

  return (
    <section id="experience" className="section experience">
      <Reveal className="section-header">
        <span className="section-eyebrow">02 · Experience</span>
        <h2 className="section-title">
          From startup backend to{' '}
          <span className="gradient-text">cloud architecture</span>.
        </h2>
      </Reveal>

      <div className="exp__timeline" ref={timelineRef}>
        <div className="exp__rail">
          <motion.div
            className="exp__rail-fill"
            style={{ scaleY: lineScale }}
          />
        </div>

        {jobs.map((work, i) => (
          <Reveal
            key={`${work.company}-${work.position}`}
            className="exp__entry"
          >
            <div
              className={`exp__node ${i === 0 ? 'exp__node--current' : ''}`}
            />
            <article
              className={`exp__card glass spotlight ${i === 0 ? 'exp__card--current' : ''}`}
              onMouseMove={spotlightHandler}
            >
              <header className="exp__top">
                <div className="exp__logo" style={{ background: work.color }}>
                  {work.icon ? (
                    <img src={work.icon} alt="" />
                  ) : (
                    work.company.charAt(0)
                  )}
                </div>
                <div className="exp__titles">
                  <h3 className="exp__role">{work.position}</h3>
                  <span className="exp__company">{work.company}</span>
                </div>
                <span className="exp__date">
                  {i === 0 && <span className="exp__now">Now</span>}
                  {work.date}
                </span>
              </header>
              <p className="exp__desc">{work.description}</p>
              <div className="exp__tech">
                {work.technologies.map(t => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;

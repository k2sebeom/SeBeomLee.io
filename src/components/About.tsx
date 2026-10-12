import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { aboutMeData, aboutStats } from '../data/aboutData';
import { skillGroups } from '../data/skillsData';
import { spotlightHandler } from '../lib/spotlight';
import Reveal from './Reveal';
import CountUp from './CountUp';
import SkillSphere from './SkillSphere';
import './About.css';

const Word: React.FC<{
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span className="about__word" style={{ opacity }}>
      {word}{' '}
    </motion.span>
  );
};

const About: React.FC = () => {
  const statementRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: statementRef,
    offset: ['start 85%', 'end 45%'],
  });
  const words = aboutMeData.statement.split(' ');
  const allSkills = skillGroups
    .filter(g => g.category !== 'Languages' && g.category !== 'Certifications')
    .flatMap(g => g.items);

  return (
    <section id="about" className="section about">
      <Reveal className="section-header">
        <span className="section-eyebrow">01 · About</span>
      </Reveal>

      <p className="about__statement" ref={statementRef}>
        {words.map((w, i) => (
          <Word
            key={i}
            word={w}
            progress={scrollYProgress}
            range={[i / words.length, (i + 1) / words.length]}
          />
        ))}
      </p>

      <div className="about__grid">
        <Reveal className="about__bio">
          <p>{aboutMeData.bio}</p>
        </Reveal>

        <div className="about__stats">
          {aboutStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div
                className="about__stat glass spotlight"
                onMouseMove={spotlightHandler}
              >
                <span className="about__stat-num gradient-text">
                  <CountUp value={s.value} suffix={s.suffix} />
                </span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="about__skills">
        <Reveal className="about__sphere-wrap">
          <SkillSphere tags={allSkills} />
          <span className="about__sphere-hint">drag to spin</span>
        </Reveal>

        <div className="about__groups">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div
                className="about__group glass spotlight"
                onMouseMove={spotlightHandler}
              >
                <div className="about__group-head">
                  <span className="about__group-icon">{group.icon}</span>
                  <h3>{group.category}</h3>
                </div>
                <div className="about__group-items">
                  {group.items.map(item => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

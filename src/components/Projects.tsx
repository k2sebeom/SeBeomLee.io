import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  featuredProjects,
  projectsList,
  type ProjectInfo,
} from '../data/projectsData';
import {
  projectCategories,
  galleryConfig,
  projectsConfig,
} from '../data/projectsConfig';
import { spotlightHandler } from '../lib/spotlight';
import Reveal from './Reveal';
import './Projects.css';

const FALLBACK_THUMB =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="100%" height="100%" fill="%230b1114"/></svg>';

const tilt = (e: React.MouseEvent<HTMLElement>) => {
  spotlightHandler(e);
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  el.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
};
const untilt = (e: React.MouseEvent<HTMLElement>) => {
  e.currentTarget.style.transform = '';
};

const FeaturedCard: React.FC<{
  project: ProjectInfo;
  index: number;
  onOpen: () => void;
}> = ({ project, index, onOpen }) => (
  <motion.button
    layoutId={`project-${project.title}`}
    className={`feat__card spotlight ${index === 0 ? 'feat__card--hero' : ''}`}
    onClick={onOpen}
    onMouseMove={tilt}
    onMouseLeave={untilt}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    transition={{
      duration: 0.9,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    <img
      className="feat__img"
      src={project.thumbnail}
      alt=""
      loading="lazy"
      onError={e => {
        e.currentTarget.src = FALLBACK_THUMB;
      }}
    />
    <div className="feat__shade" />
    <div className="feat__body">
      <span className="feat__index">0{index + 1}</span>
      <h3 className="feat__title">{project.title}</h3>
      <p className="feat__desc">{project.description}</p>
    </div>
    <span className="feat__open" aria-hidden>
      ↗
    </span>
  </motion.button>
);

const ProjectModal: React.FC<{
  project: ProjectInfo;
  onClose: () => void;
}> = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="modal"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      data-lenis-prevent
    >
      <motion.div
        layoutId={`project-${project.title}`}
        className="modal__card"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        <div className="modal__media">
          <img src={project.thumbnail} alt="" />
        </div>
        <motion.div
          className="modal__body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="modal__title">{project.title}</h3>
          <p className="modal__desc">{project.description}</p>
          <div className="modal__actions">
            <a
              className="btn btn--primary"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open project <span aria-hidden>↗</span>
            </a>
            <button className="btn btn--ghost" onClick={onClose}>
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<ProjectInfo | null>(null);
  const [category, setCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(
    projectsConfig.pagination.initialCount
  );

  const filtered = useMemo(() => {
    const cat = projectCategories.find(c => c.id === category);
    if (!cat || cat.id === 'all') return projectsList;
    return projectsList.filter(p => {
      const text = `${p.title} ${p.description}`.toLowerCase();
      return cat.keywords.some(kw => text.includes(kw));
    });
  }, [category]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <section id="projects" className="section projects">
      <Reveal className="section-header">
        <span className="section-eyebrow">03 · Projects</span>
        <h2 className="section-title">
          Things I've <span className="gradient-text">built</span>.
        </h2>
        <p className="section-subtitle">{galleryConfig.description}</p>
      </Reveal>

      <div className="feat__grid">
        {featuredProjects.map((p, i) => (
          <FeaturedCard
            key={p.title}
            project={p}
            index={i}
            onOpen={() => setSelected(p)}
          />
        ))}
      </div>

      <Reveal className="archive__head">
        <h3 className="archive__title">{projectsConfig.categoryTitle}</h3>
        <div className="archive__filters">
          {projectCategories.map(cat => (
            <button
              key={cat.id}
              className={`archive__filter ${category === cat.id ? 'archive__filter--active' : ''}`}
              onClick={() => {
                setCategory(cat.id);
                setVisibleCount(projectsConfig.pagination.initialCount);
              }}
            >
              {category === cat.id && (
                <motion.span
                  layoutId="filter-pill"
                  className="archive__filter-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="archive__filter-label">{cat.label}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="archive__grid">
        <AnimatePresence mode="popLayout">
          {visible.map(p => (
            <motion.button
              layout
              key={p.title}
              className="archive__card glass spotlight"
              onMouseMove={spotlightHandler}
              onClick={() => setSelected(p)}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
            >
              <div className="archive__thumb">
                <img
                  src={p.thumbnail}
                  alt=""
                  loading="lazy"
                  onError={e => {
                    e.currentTarget.src = FALLBACK_THUMB;
                  }}
                />
              </div>
              <div className="archive__body">
                <h4>{p.title}</h4>
                <p>{p.description}</p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="archive__empty">{projectsConfig.noProjectsFound.title}</p>
      )}

      {visibleCount < filtered.length && (
        <div className="archive__more">
          <button
            className="btn btn--ghost"
            onClick={() =>
              setVisibleCount(c => c + projectsConfig.pagination.loadMoreCount)
            }
          >
            {projectsConfig.pagination.loadMoreText}
            <span className="archive__remaining">
              {filtered.length - visibleCount}
            </span>
          </button>
        </div>
      )}

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

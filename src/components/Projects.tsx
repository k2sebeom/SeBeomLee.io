import React, { useState, useEffect, useCallback } from 'react';
import { featuredProjects, projectsList } from '../data/projectsData';
import {
  projectCategories,
  projectStats,
  galleryConfig,
  projectsConfig,
} from '../data/projectsConfig';
import ScrollReveal from './ScrollReveal';
import './Projects.css';

const ProjectCard: React.FC<{
  project: (typeof projectsList)[0];
  index: number;
}> = ({ project, index }) => (
  <ScrollReveal delay={index * 60} direction="scale">
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="proj__card glass-elevated"
    >
      <div className="proj__img">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          onError={e => {
            (e.target as HTMLImageElement).src =
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmNGYxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTMiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBQcmV2aWV3PC90ZXh0Pjwvc3ZnPgo=';
          }}
        />
        <div className="proj__overlay">
          <span className="proj__overlay-cta">View Project &rarr;</span>
        </div>
      </div>
      <div className="proj__body">
        <h3 className="proj__title">{project.title}</h3>
        <p className="proj__desc">{project.description}</p>
      </div>
    </a>
  </ScrollReveal>
);

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(
    projectsConfig.pagination.initialCount
  );
  const [filteredProjects, setFilteredProjects] = useState(projectsList);

  const filterProjects = useCallback(
    (projects: typeof projectsList) => {
      if (selectedCategory === 'all') return projects;
      const cat = projectCategories.find(c => c.id === selectedCategory);
      if (!cat) return projects;
      return projects.filter(p => {
        const t = p.title.toLowerCase();
        const d = p.description.toLowerCase();
        return cat.keywords.some(kw => t.includes(kw) || d.includes(kw));
      });
    },
    [selectedCategory]
  );

  useEffect(() => {
    setFilteredProjects(filterProjects(projectsList));
    setVisibleCount(projectsConfig.pagination.initialCount);
  }, [selectedCategory, filterProjects]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <section id="projects" className="section projects">
      <ScrollReveal>
        <div className="section-header">
          <span className="section-number">// 03</span>
          <h2 className="section-title">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">{galleryConfig.description}</p>
        </div>
      </ScrollReveal>

      {/* Featured */}
      <ScrollReveal>
        <h3 className="proj__label">{galleryConfig.title}</h3>
      </ScrollReveal>
      <div className="proj__featured">
        {featuredProjects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>

      {/* All */}
      <ScrollReveal>
        <h3 className="proj__label">{projectsConfig.categoryTitle}</h3>
      </ScrollReveal>

      <ScrollReveal>
        <div className="proj__filters">
          {projectCategories.map(cat => (
            <button
              key={cat.id}
              className={`proj__filter ${selectedCategory === cat.id ? 'proj__filter--active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="proj__grid">
        {visibleProjects.map((p, i) => (
          <ProjectCard key={`${selectedCategory}-${i}`} project={p} index={i} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="proj__empty glass">
          <p>{projectsConfig.noProjectsFound.title}</p>
          <span>{projectsConfig.noProjectsFound.description}</span>
        </div>
      )}

      {hasMore && (
        <div className="proj__more">
          <button
            className="btn-glass"
            onClick={() =>
              setVisibleCount(
                prev => prev + projectsConfig.pagination.loadMoreCount
              )
            }
          >
            {projectsConfig.pagination.loadMoreText}
          </button>
          <span className="proj__remaining">
            {filteredProjects.length - visibleCount} more
          </span>
        </div>
      )}

      <ScrollReveal>
        <div className="proj__stats glass">
          <div className="proj__stat">
            <span className="proj__stat-num">{projectsList.length}+</span>
            <span className="proj__stat-lbl">Projects</span>
          </div>
          <div className="proj__stat">
            <span className="proj__stat-num">{projectStats.categories}</span>
            <span className="proj__stat-lbl">Categories</span>
          </div>
          <div className="proj__stat">
            <span className="proj__stat-num">{projectStats.ideasBrewing}</span>
            <span className="proj__stat-lbl">{projectStats.brewingLabel}</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Projects;

import React, { useState, useEffect, useCallback } from 'react';
import { featuredProjects, projectsList } from '../data/projectsData';
import {
  projectCategories,
  projectStats,
  galleryConfig,
  projectsConfig,
} from '../data/projectsConfig';
import './Projects.css';

const ProjectCard: React.FC<{
  project: (typeof projectsList)[0];
  index: number;
}> = ({ project, index }) => (
  <div
    className="project-card cosmic-card"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="project-image">
      <img
        src={project.thumbnail}
        alt={project.title}
        onError={e => {
          const target = e.target as HTMLImageElement;
          target.src =
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExYTJlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzAwZDRmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
        }}
      />
      <div className="project-overlay">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link cosmic-button"
        >
          <span className="link-icon">🚀</span>
          <span className="link-text">Launch Project</span>
        </a>
      </div>
    </div>

    <div className="project-content">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-tags">
        {projectCategories.slice(1).map(category => {
          const matchesCategory = category.keywords.some(
            keyword =>
              project.title.toLowerCase().includes(keyword) ||
              project.description.toLowerCase().includes(keyword)
          );

          return matchesCategory ? (
            <span key={category.id} className={`project-tag ${category.id}`}>
              {category.label}
            </span>
          ) : null;
        })}
      </div>
    </div>
  </div>
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

      const category = projectCategories.find(
        cat => cat.id === selectedCategory
      );
      if (!category) return projects;

      return projects.filter(project => {
        const title = project.title.toLowerCase();
        const description = project.description.toLowerCase();

        return category.keywords.some(
          keyword => title.includes(keyword) || description.includes(keyword)
        );
      });
    },
    [selectedCategory]
  );

  useEffect(() => {
    const filtered = filterProjects(projectsList);
    setFilteredProjects(filtered);
    setVisibleCount(projectsConfig.pagination.initialCount);
  }, [selectedCategory, filterProjects]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + projectsConfig.pagination.loadMoreCount);
  };

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < filteredProjects.length;

  return (
    <section id="projects" className="section projects">
      <div className="projects-container">
        <h2 className="section-title">{projectsConfig.title}</h2>

        {/* Featured Projects Gallery */}
        <div className="featured-projects">
          <h3 className="featured-title">{galleryConfig.title}</h3>
          <p className="featured-description">{galleryConfig.description}</p>
          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* All Projects Section */}
        <div className="all-projects">
          <h3 className="category-title">{projectsConfig.categoryTitle}</h3>

          <div className="project-controls">
            <div className="category-filters">
              {projectCategories.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="filter-icon">{category.icon}</span>
                  <span className="filter-label">{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="no-projects">
              <div className="no-projects-icon">
                {projectsConfig.noProjectsFound.icon}
              </div>
              <h3>{projectsConfig.noProjectsFound.title}</h3>
              <p>{projectsConfig.noProjectsFound.description}</p>
            </div>
          ) : (
            hasMoreProjects && (
              <div className="load-more-container">
                <button
                  className="load-more-button cosmic-button"
                  onClick={handleLoadMore}
                >
                  <span className="button-icon">
                    {projectsConfig.pagination.loadMoreIcon}
                  </span>
                  <span className="button-text">
                    {projectsConfig.pagination.loadMoreText}
                  </span>
                </button>
                <div className="projects-remaining">
                  {filteredProjects.length - visibleCount} more projects
                  available
                </div>
              </div>
            )
          )}
        </div>

        <div className="projects-stats cosmic-card">
          <div className="stat">
            <div className="stat-number">{projectsList.length}+</div>
            <div className="stat-label">Total Projects</div>
          </div>
          <div className="stat">
            <div className="stat-number">{projectStats.categories}</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat">
            <div className="stat-number">{projectStats.ideasBrewing}</div>
            <div className="stat-label">{projectStats.brewingLabel}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

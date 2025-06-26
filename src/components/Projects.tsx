import React, { useState } from 'react';
import { featuredProjects, projectsList } from '../data/projectsData';
import { projectCategories, projectStats } from '../data/projectsConfig';
import './Projects.css';

const Projects: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterProjects = (projects: typeof projectsList) => {
    if (selectedCategory === 'all') return projects;

    const category = projectCategories.find(cat => cat.id === selectedCategory);
    if (!category) return projects;

    return projects.filter(project => {
      const title = project.title.toLowerCase();
      const description = project.description.toLowerCase();

      return category.keywords.some(keyword => 
        title.includes(keyword) || description.includes(keyword)
      );
    });
  };

  const displayedProjects = showAllProjects
    ? filterProjects(projectsList)
    : filterProjects(featuredProjects);

  return (
    <section id="projects" className="section projects">
      <div className="projects-container">
        <h2 className="section-title">Project Galaxy</h2>

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

          <button
            className="toggle-btn cosmic-button"
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            {showAllProjects ? 'Show Featured' : 'Show All Projects'}
          </button>
        </div>

        <div className="projects-grid">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
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
                    className="project-link"
                  >
                    <span className="link-icon">🚀</span>
                    Launch Project
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {projectCategories.slice(1).map(category => {
                    const matchesCategory = category.keywords.some(keyword =>
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
          ))}
        </div>

        {displayedProjects.length === 0 && (
          <div className="no-projects">
            <div className="no-projects-icon">🔍</div>
            <h3>No projects found in this category</h3>
            <p>Try selecting a different category or view all projects</p>
          </div>
        )}

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

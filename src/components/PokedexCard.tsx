import { useEffect } from 'react';
import './PokedexCard.css';

interface PokedexCardProps {
  name: string;
  sprite: string;
  data: any;
  onClose: () => void;
}

function PokedexCard({ name, sprite, data, onClose }: PokedexCardProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const renderContent = () => {
    if (data.statement && data.bio) {
      return (
        <div className="pokedex-content">
          <div className="section">
            <p className="statement">{data.statement}</p>
          </div>
          <div className="section">
            <h3>Bio</h3>
            <p>{data.bio}</p>
          </div>
        </div>
      );
    }

    if (data.workList) {
      return (
        <div className="pokedex-content">
          {data.workList.map((work: any, index: number) => (
            <div key={index} className="work-card">
              <h3>{work.company}</h3>
              <p className="position">{work.position}</p>
              <p className="date">{work.date}</p>
              <p className="description">{work.description}</p>
              <div className="tech-badges">
                {work.technologies.map((tech: string, i: number) => (
                  <span key={i} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (data.featuredProjects && data.projectsList) {
      return (
        <div className="pokedex-content">
          <div className="section">
            <h3>Featured Projects</h3>
            <div className="projects-grid">
              {data.featuredProjects.map((project: any, index: number) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                >
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="section">
            <h3>All Projects</h3>
            <div className="projects-list">
              {data.projectsList.map((project: any, index: number) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-item"
                >
                  {project.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (data.educationList) {
      return (
        <div className="pokedex-content">
          {data.educationList.map((edu: any, index: number) => (
            <a
              key={index}
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              className="education-card"
            >
              <h3>{edu.title}</h3>
              <div className="degrees">
                {edu.degrees.map((degree: string, i: number) => (
                  <span key={i} className="degree-badge">
                    {degree}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      );
    }

    if (data.contactMethods) {
      return (
        <div className="pokedex-content">
          {data.contactMethods.map((contact: any, index: number) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <h3>{contact.title}</h3>
              {contact.value && (
                <p className="contact-value">{contact.value}</p>
              )}
              {contact.description && (
                <p className="contact-desc">{contact.description}</p>
              )}
            </a>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="pokedex-overlay" onClick={onClose}>
      <div className="pokedex-card" onClick={e => e.stopPropagation()}>
        <div className="pokedex-header">
          <h2>{name}</h2>
        </div>
        <div className="pokedex-sprite">
          <img src={sprite} alt={name} />
        </div>
        {renderContent()}
      </div>
    </div>
  );
}

export default PokedexCard;

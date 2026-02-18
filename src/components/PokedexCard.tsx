import { useEffect } from 'react'
import './PokedexCard.css'

interface WorkExperience {
  company: string
  position: string
  date: string
  description: string
  technologies: string[]
}

interface Project {
  title: string
  description: string
  thumbnail: string
  link: string
}

interface Education {
  title: string
  degrees: string[]
  thumbnail: string
  link: string
}

interface PokedexCardProps {
  title: string
  sprite: string
  content: {
    statement?: string
    bio?: string
    workList?: WorkExperience[]
    featuredProjects?: Project[]
    projectsList?: Project[]
    educationList?: Education[]
  }
  onClose: () => void
}

const PokedexCard = ({ title, sprite, content, onClose }: PokedexCardProps) => {
  useEffect(() => {
    // Prevent scrolling when card is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className="pokedex-overlay" onClick={onClose}>
      <div className="pokedex-card" onClick={(e) => e.stopPropagation()}>
        <div className="pokedex-header">
          <div className="pokedex-title">{title}</div>
          <button className="pokedex-close" onClick={onClose}>×</button>
        </div>

        <div className="pokedex-content">
          <div className="pokedex-sprite-container">
            <img src={sprite} alt={title} className="pokedex-sprite" />
          </div>

          <div className="pokedex-info">
            {content.statement && (
              <div className="pokedex-section">
                <h3>Profile</h3>
                <p>{content.statement}</p>
              </div>
            )}

            {content.bio && (
              <div className="pokedex-section">
                <h3>Bio</h3>
                <p>{content.bio}</p>
              </div>
            )}

            {content.workList && content.workList.map((work, index) => (
              <div key={index} className="pokedex-section work-entry">
                <h3>{work.company}</h3>
                <div className="work-header">
                  <div className="work-position">{work.position}</div>
                  <div className="work-date">{work.date}</div>
                </div>
                <p>{work.description}</p>
                <div className="work-technologies">
                  {work.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            ))}

            {content.featuredProjects && (
              <div className="pokedex-section">
                <h3>Featured Projects</h3>
                <div className="projects-grid">
                  {content.featuredProjects.map((project, index) => (
                    <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
                      <div className="project-title">{project.title}</div>
                      <p className="project-description">{project.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {content.projectsList && (
              <div className="pokedex-section">
                <h3>All Projects</h3>
                <div className="projects-list">
                  {content.projectsList.map((project, index) => (
                    <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-list-item">
                      <div className="project-title">{project.title}</div>
                      <p className="project-description">{project.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {content.educationList && content.educationList.map((edu, index) => (
              <div key={index} className="pokedex-section education-entry">
                <h3>{edu.title}</h3>
                <div className="education-degrees">
                  {edu.degrees.map((degree, i) => (
                    <div key={i} className="degree-badge">{degree}</div>
                  ))}
                </div>
                <a href={edu.link} target="_blank" rel="noopener noreferrer" className="education-link">
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="pokedex-footer">
          <div className="pokedex-hint">Click anywhere to close</div>
        </div>
      </div>
    </div>
  )
}

export default PokedexCard

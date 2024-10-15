import React, { useState } from 'react';
import SectionContainer from '../layouts/SectionContainer';
import { SectionTitle } from '../shared/Typography';
import styled from 'styled-components';
import { ProjectsProvider } from '../../contexts/ProjectsContext';
import { featuredProjects, projectsList } from '../../data/projectsData';
import ProjectItem from './ProjectItem';
import { breakpoints } from '../../styles/theme';

const ProjectsContainer = styled.div`
  /* background-color: pink; */

  width: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* box-sizing: border-box; */
  /* padding-left: 1rem; */
  /* padding-right: 1rem; */
`;

const ProjectsGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.4rem;

  width: 100%;

  & h1 {
    text-align: center;
    /* background-color: blue; */
  }

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const MoreButton = styled.button`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;

  margin-top: 2rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;

  color: ${(props) => props.theme.colors.textColor};

  font-size: 1.2rem;
  font-weight: 700;

  cursor: pointer;

  background-color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.ternary};

  box-shadow: ${(props) => props.theme.colors.shadowPrimary};
  transition: box-shadow 0.5s ease;
  &:hover {
    box-shadow: ${(props) => props.theme.colors.shadowSecondary};
  }
`;

function Projects(): JSX.Element {
  const [showMoreProjects, setShowMoreProjects] = useState<boolean>(false);

  return (
    <SectionContainer id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectsContainer>
        <ProjectsProvider>
          <ProjectsGrid>
            {featuredProjects.map((proj, i) => {
              return <ProjectItem key={`project-${i}`} project={proj} />;
            })}
            {showMoreProjects &&
              projectsList.map((proj, i) => {
                return <ProjectItem key={`project-${i}`} project={proj} />;
              })}
          </ProjectsGrid>
          <MoreButton
            onClick={() => {
              setShowMoreProjects((prev) => {
                return !prev;
              });
            }}
          >
            {showMoreProjects ? 'Show Less' : 'Show All'}
          </MoreButton>
        </ProjectsProvider>
      </ProjectsContainer>
    </SectionContainer>
  );
}

export default Projects;

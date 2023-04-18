import React from 'react';
import SectionContainer from '../layouts/SectionContainer';
import { SectionTitle } from '../shared/Typography';
import styled from 'styled-components';
import { ProjectsProvider } from '../../contexts/ProjectsContext';
import { projectsList } from '../../data/projectsData';
import ProjectItem from './ProjectItem';
import { breakpoints } from '../../styles/theme';

const ProjectsContainer = styled.div`
  /* background-color: pink; */

  width: 90%;

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
  gap: 1rem;

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

function Projects(): JSX.Element {
  return (
    <SectionContainer id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectsContainer>
        <ProjectsProvider>
          <ProjectsGrid>
            {projectsList.map((proj, i) => {
              return <ProjectItem key={`project-${i}`} project={proj} />;
            })}
          </ProjectsGrid>
        </ProjectsProvider>
      </ProjectsContainer>
    </SectionContainer>
  );
}

export default Projects;

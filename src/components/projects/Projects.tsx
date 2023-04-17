import React from 'react';
import SectionContainer from '../layouts/SectionContainer';
import { SectionTitle } from '../shared/Typography';
import styled from 'styled-components';
import { ProjectsProvider } from '../../contexts/ProjectsContext';
import { projectsList } from '../../data/projectsData';
import ProjectItem from './ProjectItem';

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

  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  width: 100%;

  & h1 {
    text-align: center;
    /* background-color: blue; */
  }
`;

function Projects(): JSX.Element {
  return (
    <SectionContainer>
      <ProjectsContainer>
        <SectionTitle>Projects</SectionTitle>
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

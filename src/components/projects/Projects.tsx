import React from 'react';
import SectionContainer from '../layouts/SectionContainer';
import { SectionTitle } from '../shared/Typography';
import styled from 'styled-components';

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
        <ProjectsGrid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => {
            return <h1 key={`foo-${i}`}>Foo {i}</h1>;
          })}
        </ProjectsGrid>
      </ProjectsContainer>
    </SectionContainer>
  );
}

export default Projects;

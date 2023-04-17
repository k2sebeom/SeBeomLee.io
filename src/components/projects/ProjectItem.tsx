import React from 'react';
import styled from 'styled-components';
import { type ProjectInfo } from '../../data/projectsData';

const ItemContainer = styled.div`
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 1rem 1rem 0 0;
`;

interface ProjectItemProps {
  project: ProjectInfo;
}

function ProjectItem({ project }: ProjectItemProps): JSX.Element {
  return (
    <ItemContainer>
      <Thumbnail src={project.thumbnail} />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </ItemContainer>
  );
}

export default ProjectItem;

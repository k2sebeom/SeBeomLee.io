import React from 'react';
import styled from 'styled-components';
import { type ProjectInfo } from '../../data/projectsData';

const ItemContainer = styled.div`
  border-radius: 1rem;
  box-shadow: ${(props) => props.theme.colors.shadowPrimary};

  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: ${(props) => props.theme.colors.shadowSecondary};
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

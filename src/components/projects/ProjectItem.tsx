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
  height: 14rem;
  border-radius: 1rem 1rem 0 0;
`;

interface ProjectItemProps {
  project: ProjectInfo;
}

const TitleText = styled.h1`
  margin-top: 0.3rem;
  font-size: 1.6rem;
`;

const DescText = styled.p`
  padding-left: 1rem;
`;

function ProjectItem({ project }: ProjectItemProps): JSX.Element {
  return (
    <ItemContainer>
      <a href={project.link} target="_blank" rel="noreferrer">
        <Thumbnail src={project.thumbnail} />
      </a>
      <TitleText>{project.title}</TitleText>
      <DescText>{project.description}</DescText>
    </ItemContainer>
  );
}

export default ProjectItem;

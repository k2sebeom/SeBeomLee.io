import React, { useEffect } from 'react';
import styled from 'styled-components';
import { type ProjectInfo } from '../../data/projectsData';
import { breakpoints } from '../../styles/theme';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ItemContainer = styled(motion.div)`
  border-radius: 1rem;
  box-shadow: ${(props) => props.theme.colors.shadowPrimary};

  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: ${(props) => props.theme.colors.shadowSecondary};
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 18rem;
  border-radius: 1rem 1rem 0 0;

  @media (min-width: ${breakpoints.sm}) {
    height: 16rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    height: 18rem;
  }
`;

interface ProjectItemProps {
  project: ProjectInfo;
}

const TitleText = styled.h1`
  margin-top: 0.3rem;
  font-size: 1.6rem;

  padding-left: 1rem;
  padding-right: 1rem;
`;

const DescText = styled.p`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const itemVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -50 },
};

function ProjectItem({ project }: ProjectItemProps): JSX.Element {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls
        .start('visible')
        .then(() => {})
        .catch((err) => {
          console.error(err);
        });
    }
  }, [controls, inView]);

  return (
    <ItemContainer ref={ref} animate={controls} initial="hidden" variants={itemVariants}>
      <a href={project.link} target="_blank" rel="noreferrer">
        <Thumbnail src={project.thumbnail} />
      </a>
      <TitleText>{project.title}</TitleText>
      <DescText>{project.description}</DescText>
    </ItemContainer>
  );
}

export default ProjectItem;

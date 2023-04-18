import React from 'react';
import styled from 'styled-components';
import { aboutMeData } from '../../data/aboutData';
import SectionContainer from '../layouts/SectionContainer';
import { SectionTitle } from '../shared/Typography';
import { breakpoints } from '../../styles/theme';
import ResumeButton from './ResumeButton';

const Container = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  & h2,
  p {
    width: 80%;
  }

  @media (max-width: ${breakpoints.md}) {
    & h2,
    p {
      width: 100%;
    }
  }
`;

const StatementText = styled.h2`
  font-size: 1.3rem;
`;

const BioText = styled.p`
  color: #999;
`;

function AboutMe(): JSX.Element {
  return (
    <SectionContainer id="aboutme">
      <SectionTitle>About Me</SectionTitle>
      <Container>
        <StatementText>{aboutMeData.statement}</StatementText>
        <BioText>{aboutMeData.bio}</BioText>
        <ResumeButton />
      </Container>
    </SectionContainer>
  );
}

export default AboutMe;

import React from 'react';
import SectionContainer from '../layouts/SectionContainer';
import styled from 'styled-components';
import { SectionTitle } from '../shared/Typography';
import { educationList } from '../../data/educationData';
import EducationCard from './EducationCard';
import { breakpoints } from '../../styles/theme';

const EduContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EduGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

function Education(): JSX.Element {
  return (
    <SectionContainer id="education">
      <SectionTitle>Education</SectionTitle>
      <EduContainer>
        <EduGrid>
          {educationList.map((edu, i) => {
            return <EducationCard key={`educard-${i}`} education={edu} />;
          })}
        </EduGrid>
      </EduContainer>
    </SectionContainer>
  );
}

export default Education;

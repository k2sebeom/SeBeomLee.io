import React from 'react';
import { type EducationInfo } from '../../data/educationData';
import styled from 'styled-components';

interface CardProps {
  education: EducationInfo;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Thumbnail = styled.img`
  height: 160px;

  margin-left: 1rem;
`;

const DegreeItem = styled.li`
  color: #777;
  padding-left: 0.2rem;
`;

const DegreeList = styled.ul`
  padding-left: 2rem;
`;

const CardTitle = styled.h3`
  margin-top: 1rem;
  margin-bottom: 0.2rem;
  margin-left: 1rem;
`;

function EducationCard({ education }: CardProps): JSX.Element {
  return (
    <CardContainer>
      <Thumbnail src={education.thumbnail} />

      <CardTitle>{education.title}</CardTitle>
      <DegreeList>
        {education.degrees.map((deg, i) => {
          return <DegreeItem key={`degree-${i}`}>{deg}</DegreeItem>;
        })}
      </DegreeList>
    </CardContainer>
  );
}

export default EducationCard;

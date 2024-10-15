import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionContainer from '../layouts/SectionContainer';
import styled, { useTheme } from 'styled-components';
import { SectionTitle } from '../shared/Typography';
import { type WorkInfo, workList } from '../../data/workData';

const WorkContainer = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 2rem;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const WorkIcon = styled.img`
  height: 80%;
  width: 80%;

  border-radius: 30%;
  object-fit: contain;
`;

const WorkItemContainer = styled.div`
  & h3,
  p {
    color: ${(props) => props.theme.colors.labelColor};
  }
`;

interface WorkItemProps {
  work: WorkInfo;
}

function WorkItem({ work }: WorkItemProps): JSX.Element {
  const theme = useTheme();

  return (
    <VerticalTimelineElement
      contentStyle={{
        borderTop: `3px solid ${theme.colors.primary}`,
        paddingTop: '0.2rem',
        background: `${theme.colors.cardColor}`,

        boxShadow: `${theme.colors.shadowPrimary}`,

        color: `${theme.colors.labelColor}`,
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${theme.colors.cardColor}`,
      }}
      icon={
        <IconContainer>
          <WorkIcon src={work.icon} />
        </IconContainer>
      }
      iconStyle={{
        background: work.color,
      }}
      date={work.date}
    >
      <WorkItemContainer>
        <h3>{work.company}</h3>
        <p>{work.position}</p>
      </WorkItemContainer>
    </VerticalTimelineElement>
  );
}

function Work(): JSX.Element {
  const theme = useTheme();

  return (
    <SectionContainer id="work">
      <SectionTitle>Work</SectionTitle>
      <WorkContainer>
        <VerticalTimeline lineColor={theme.colors.primary}>
          {workList.map((work, i) => {
            return <WorkItem key={`work-${i}`} work={work} />;
          })}
        </VerticalTimeline>
      </WorkContainer>
    </SectionContainer>
  );
}

export default Work;

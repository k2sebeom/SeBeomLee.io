import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import { useTheme } from 'styled-components';
import { themes } from '../../styles/theme';

function Work(): JSX.Element {
  // const theme = useTheme();

  return (
    <VerticalTimeline lineColor={themes.light.colors.primary}>
      <VerticalTimelineElement position="left">
        <h1>asdsa</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement>
        <h1>asdsa</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement>
        <h1>asdsa</h1>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Work;

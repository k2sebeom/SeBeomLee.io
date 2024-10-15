import React from 'react';
import styled from 'styled-components';
import IntroEarth from './IntroEarth';
import IntroTyping from './IntroTyping';
import { breakpoints } from '../../styles/theme';

const IntroContainer = styled.div`
  position: relative;

  @media (max-width: ${breakpoints.xs}) {
    margin-bottom: 5rem;
  }
`;

function Intro(): JSX.Element {
  return (
    <IntroContainer>
      <IntroEarth />
      <IntroTyping />
    </IntroContainer>
  );
}

export default Intro;

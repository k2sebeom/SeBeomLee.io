import React from 'react';
import styled from 'styled-components';
import IntroEarth from './IntroEarth';
import IntroTyping from './IntroTyping';

const IntroContainer = styled.div`
  position: relative;
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

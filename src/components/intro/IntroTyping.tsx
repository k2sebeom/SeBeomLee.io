import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { portfolioIdentities } from '../../data/introData';

const TypingContainer = styled.div`
  font-size: 2.5rem;
  font-weight: 600;

  position: absolute;
  top: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TypingArea = styled.div`
  width: 80%;
  user-select: none;
`;

const FixedName = styled.h3`
  font-size: 3rem;
  font-weight: 700;

  margin: 0;
`;

const IntroTyping = (): JSX.Element => {
  return (
    <TypingContainer>
      <TypingArea>
        <FixedName>Hello, I am SeBeom</FixedName>
        <Typewriter
          options={{
            strings: portfolioIdentities,
            autoStart: true,
            loop: true,
          }}
        />
      </TypingArea>
    </TypingContainer>
  );
};

export default IntroTyping;

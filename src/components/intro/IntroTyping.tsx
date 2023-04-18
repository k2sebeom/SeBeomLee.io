import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { portfolioIdentities } from '../../data/introData';
import { motion } from 'framer-motion';

const TypingContainer = styled(motion.div)`
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

  color: ${(props) => props.theme.colors.labelColor};
`;

const FixedName = styled.h3`
  font-size: 3rem;
  font-weight: 700;

  margin: 0;
`;

const IntroTyping = (): JSX.Element => {
  return (
    <TypingContainer
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
    >
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

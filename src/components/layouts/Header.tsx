import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.nav)`
  display: flex;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primaryLight};
  height: 50px;

  align-items: center;
  justify-content: flex-end;

  box-sizing: border-box;
  padding-right: 4rem;
`;

function Header(): JSX.Element {
  return (
    <HeaderContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}></HeaderContainer>
  );
}

export default Header;

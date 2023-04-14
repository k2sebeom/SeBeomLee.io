import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RxHamburgerMenu } from 'react-icons/rx';

const HeaderContainer = styled(motion.nav)`
  display: flex;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primaryLight};
  height: 50px;

  align-items: center;
  justify-content: flex-end;

  box-sizing: border-box;
  padding-right: 4rem;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-right: 1rem;
  }
`;

const HeaderLink = styled.a`
  color: ${(props) => props.theme.colors.textColorLight};
  margin-right: 0.7rem;
  margin-left: 0.7rem;

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    display: none;
  }
`;

const MenuIcon = styled(RxHamburgerMenu)`
  color: ${(props) => props.theme.colors.textColorLight};

  display: none;

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    display: block;
    font-size: 1.5rem;
  }

  &:active {
    opacity: 0.5;
  }
`;

function Header(): JSX.Element {
  return (
    <HeaderContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <HeaderLink>About Me</HeaderLink>
      <HeaderLink>Projects</HeaderLink>
      <HeaderLink>Work</HeaderLink>
      <HeaderLink>Education</HeaderLink>
      <MenuIcon />
    </HeaderContainer>
  );
}

export default Header;

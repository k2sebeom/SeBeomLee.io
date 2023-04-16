import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaRegMoon } from 'react-icons/fa';
import { RiSunLine } from 'react-icons/ri';
import { breakpoints } from '../../styles/theme';
import { useThemeSwitcher } from '../../hooks/useThemeSwitcher';

const HeaderContainer = styled(motion.nav)`
  display: flex;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  height: 50px;

  align-items: center;
  justify-content: flex-end;

  box-sizing: border-box;
  padding-right: 4rem;

  @media (max-width: ${breakpoints.sm}) {
    padding-right: 1rem;
  }
`;

const HeaderLink = styled.a`
  color: ${(props) => props.theme.colors.textColor};
  margin-right: 0.7rem;
  margin-left: 0.7rem;

  user-select: none;

  @media (max-width: ${breakpoints.xs}) {
    display: none;
  }
`;

const MenuLink = styled.a`
  color: ${(props) => props.theme.colors.labelColor};
  margin-right: 0.7rem;
  margin-left: 0.7rem;

  border-bottom: 1px solid #ddd;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  box-sizing: border-box;

  user-select: none;
  cursor: pointer;

  &:active {
    opacity: 0.5;
  }
`;

const MenuIcon = styled(RxHamburgerMenu)`
  color: ${(props) => props.theme.colors.textColor};

  display: none;

  margin-left: 15px;

  cursor: pointer;

  @media (max-width: ${breakpoints.xs}) {
    display: block;
    font-size: 1.5rem;
  }

  &:active {
    opacity: 0.5;
  }
`;

const MenuContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  overflow: hidden;
`;

const SquareButton = styled.div`
  width: 35px;
  height: 35px;

  border-radius: 10px;

  margin-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.secondary};

  color: ${(props) => props.theme.colors.labelColor};

  &:active {
    opacity: 0.7;
  }
`;

function Header(): JSX.Element {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const { toggleTheme, activeTheme } = useThemeSwitcher();

  return (
    <div>
      <HeaderContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <HeaderLink>About Me</HeaderLink>
        <HeaderLink>Projects</HeaderLink>
        <HeaderLink>Work</HeaderLink>
        <HeaderLink>Education</HeaderLink>

        <SquareButton onClick={toggleTheme}>{activeTheme === 'dark' ? <RiSunLine /> : <FaRegMoon />}</SquareButton>
        <MenuIcon
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
        />
      </HeaderContainer>
      <AnimatePresence>
        {showMenu && (
          <MenuContainer
            initial={{ height: 0, transformOrigin: 'top' }}
            animate={{ height: 150, transformOrigin: 'top' }}
            exit={{ height: 0, transformOrigin: 'top' }}
            transition={{ duration: 0.7 }}
          >
            <MenuLink>About Me</MenuLink>
            <MenuLink>Projects</MenuLink>
            <MenuLink>Work</MenuLink>
            <MenuLink>Education</MenuLink>
          </MenuContainer>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.nav`
  display: flex;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primaryLight};
  height: 50px;

  align-items: center;
  justify-content: flex-end;

  box-sizing: border-box;
  padding-right: 4rem;
`;

const HeaderLink = styled.a`
  color: white;
  margin-right: 0.7rem;
  margin-left: 0.7rem;
`;

function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <HeaderLink>About Me</HeaderLink>
      <HeaderLink>Projects</HeaderLink>
      <HeaderLink>Work</HeaderLink>
      <HeaderLink>Education</HeaderLink>
    </HeaderContainer>
  );
}

export default Header;

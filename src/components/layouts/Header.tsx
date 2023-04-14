import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.nav`
  display: flex;
`;

function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <h1>Foo</h1>
    </HeaderContainer>
  );
}

export default Header;

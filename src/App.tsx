import React from 'react';
import Header from './components/layouts/Header';
import Intro from './components/intro/Intro';
import styled, { ThemeProvider } from 'styled-components';
import { useThemeSwitcher } from './hooks/useThemeSwitcher';
import { themes } from './styles/theme';
import Projects from './components/projects/Projects';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
`;

function App(): JSX.Element {
  const { activeTheme } = useThemeSwitcher();

  return (
    <ThemeProvider theme={activeTheme === 'dark' ? themes.dark : themes.light}>
      <Container>
        <Header />
        <Intro />
        <Projects />
      </Container>
    </ThemeProvider>
  );
}

export default App;

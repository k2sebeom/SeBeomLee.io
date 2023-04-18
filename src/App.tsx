import React from 'react';
import Header from './components/layouts/Header';
import Intro from './components/intro/Intro';
import styled, { ThemeProvider } from 'styled-components';
import { useThemeSwitcher } from './hooks/useThemeSwitcher';
import { themes } from './styles/theme';
import Projects from './components/projects/Projects';
import Work from './components/work/Work';
import Education from './components/education/Education';
import Footer from './components/layouts/Footer';
import AboutMe from './components/aboutme/AboutMe';

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

        <AboutMe />
        <Projects />
        <Work />
        <Education />

        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;

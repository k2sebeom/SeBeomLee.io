import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Helvetica';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }
  .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px ${(props) =>
      props.theme.colors.primary}, inset 0 2px 0 rgba(0,0,0,.0), 0 3px 0 4px rgba(0,0,0,.0)
  }
`;

export default GlobalStyles;

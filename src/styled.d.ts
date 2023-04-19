import 'styled-components';
interface IPalette {
  main: string;
  contrastText: string;
}

interface IThemeColors {
  primary: string;
  secondary: string;
  ternary: string;

  textColor: string;
  subTextColor: string;

  labelColor: string;
  cardColor: string;

  shadowPrimary: string;
  shadowSecondary: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IThemeColors;
  }
}

const themes = {
  dark: {
    colors: {
      primary: '#1A405D',
      secondary: '#0F2C3E',

      textColor: '#FFF',

      labelColor: '#FFF',

      shadowPrimary: 'rgba(255, 255, 255, 0.1) 0px 4px 12px',
      shadowSecondary:
        'rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px',
    },
  },
  light: {
    colors: {
      primary: '#99ADD3',
      secondary: '#FFF',

      textColor: '#FFF',

      labelColor: '#000',

      shadowPrimary: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
      shadowSecondary:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
  },
};

const breakpoints = {
  xs: '450px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export { themes, breakpoints };

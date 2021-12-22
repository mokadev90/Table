import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: {
      light: '#2e7d32',
      main: '#2e7d32',
      lighter: '#60ad5e',
      dark: '#185e20',
    },
    secondary: {
      main: '#00838f',
      light: '#4fb3bf',
      dark: '#005662',
    },
    bg: '#f3f3f3',
    white: '#e0ffdd',
    grey: '#9b9b9b',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

import ProductSans from '/src/assets/fonts/ProductSansRegular.ttf'
// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: 'ProductSans, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'ProductSans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('ProductSans'), local('ProductSans-Regular'), url(${ProductSans}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  palette: {

    primary: {
      main: '#5f489c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8b73ca',
      contrastText: '#fafafa',
    },
    error: {
      main: red.A400,
      contrastText: '',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
    },
    background: {
      default: '#111111',
      paper: '#212121',
    },
  },
});

export default theme;
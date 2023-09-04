import { createTheme } from '@mui/material/styles'
import rfDewiBoldItalicFont from '../assets/fonts/RFDewi-BoldItalic.woff'
import rfDewiRegularFont from '../assets/fonts/RFDewi-Regular.woff'
import rfDewiBlackFont from '../assets/fonts/RFDewi-Black.woff'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1300,
    },
  },
  palette: {
    dark: {
      main: '#121214',
    },
    white: {
      main: '#fff',
    },
    secondary: {
      main: '#49D0FF',
    },
    text: {
      primary: '#24334B',
    },
    info: {
      main: '#24334B',
      light: '#3F5984',
    },
    grey: {
      300: '#CDCDCD',
    },
  },
  typography: {
    fontFamily: 'RFDewi-Regular, sans-serif',
    h1: {
      fontFamily: 'RFDewi-Black',
      fontSize: 'clamp(18px, 3vw, 51px)',
      fontWeight: '900',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: 'clamp(16px, 3vw, 31px)',
      fontWeight: '900',
    },
    h3: {
      fontSize: 'clamp(14px, 3vw, 23px)',
      fontWeight: '700',
    },
    h4: {
      fontSize: 'clamp(12px, 3vw, 19px)',
      fontWeight: '600',
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
     
      @font-face {
        font-family: 'RFDewi-BoldItalic';
        src: url(${rfDewiBoldItalicFont}) format('woff');
        font-weight: 100;
        font-style: normal;
      }
      @font-face {
        font-family: 'RFDewi-Regular';
        src: url(${rfDewiRegularFont}) format('woff');
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: 'RFDewi-Black';
        src: url(${rfDewiBlackFont}) format('woff');
        font-weight: 700;
        font-style: normal;
      }
    `,
    },
  },
})

export default theme

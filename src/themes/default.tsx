import { createTheme } from '@mui/material/styles'

const theme = createTheme({
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
    fontFamily: 'Merriweather, sans-serif',
    h1: {
      fontSize: 'clamp(18px, 3vw, 51px)',
      fontWeight: '900',
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
          font-family: 'Merriweather';
          font-style: normal;
          font-display: swap;
          }
      `,
    },
  },
})

export default theme

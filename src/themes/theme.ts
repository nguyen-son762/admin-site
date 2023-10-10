import { createTheme } from '@mui/material'

export const theme = createTheme({
  spacing: 4,
  typography: {
    fontFamily: "'Roboto', 'Noto Sans JP', sans-serif",
    h1: {
      letterSpacing: 0
    },
    h2: {
      letterSpacing: 0
    },
    h4: {
      letterSpacing: 0
    },
    h5: {
      lineHeight: 1.4,
      '@media (min-width:600px)': {
        fontSize: '1.5625rem',
        lineHeight: 1.36
      },
      '@media (min-width:960px)': {
        fontSize: '1.5625rem'
      },
      '@media (min-width:1280px)': {
        fontSize: '1.5625rem'
      }
    },
    h6: {
      letterSpacing: 0
    },
    subtitle1: {
      letterSpacing: 0
    },
    subtitle2: {
      letterSpacing: 0,
      lineHeight: '20px'
    },
    body1: {
      letterSpacing: 0
    },
    body2: {
      letterSpacing: 0
    },
    button: {
      letterSpacing: 0.46
    },
    caption: {
      letterSpacing: 0,
      lineHeight: '19px'
    },
    overline: {
      letterSpacing: 0,
      fontWeight: 500
    }
  }
})

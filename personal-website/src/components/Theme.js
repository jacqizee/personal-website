export const theme = (mode) => ({
  palette: {
    mode, 
    ...( mode === 'light') ? {
      primary: {
        main: '#4e342e',
      },
      secondary: {
        main: '#039be5',
      },
      background: {
        default: '#fafafa',
        paper: '#ffffff',
      },
    } : {
      primary: {
        main: '#039be5',
      },
      secondary: {
        main: '#7b5e57',
      },
      background: {
        default: '#303030',
        paper: '#424242',
      },
    }
  },
  typography: {
    fontFamily: 'Inconsolata, Arial',
    h1: {
      fontSize: '4.5rem',
    },
    h2: {
      fontSize: '3.8rem',
    },
    h3: {
      fontSize: '3.1rem',
    },
    h4: {
      fontSize: '2.6rem',
    },
    h5: {
      fontSize: '2.1rem',
    },
    h6: {
      fontSize: '1.6rem',
    },
  },
})
export const theme = (mode) => ({
  palette: {
    mode, 
    ...( mode === 'light') ? {
      primary: {
        main: '#0090D8',
        darker: '#004467',
        contrastText: '#3D3D3D'
      },
      secondary: {
        main: '#5d4037',
        contrastText: '#3D3D3D'
      },
      background: {
        default: '#f9f9f9',
        defaultDarker: '#f0f0f0',
        paper: '#ffffff',
      },
    } : {
      primary: {
        main: '#039be5',
        darker: '#004467',
        contrastText: '#fff'
      },
      secondary: {
        main: '#7b5e57',
        contrastText: '#fff'
      },
      background: {
        default: '#303030',
        defaultDarker: '#252525',
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
    subtitle1: {
      fontSize: '1.3rem'
    },
    subtitle2: {
      fontSize: '1.1rem'
    },
    body1: {
      fontSize: '0.98rem'
    },
    body2: {
      fontSize: '0.9rem'
    },
  },
})
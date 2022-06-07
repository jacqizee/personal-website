import { useState } from 'react'

import Navigation from './components/Navigation'
import Links from './components/Links'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Box from '@mui/material/Box'

import { theme } from './components/Theme'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'


const App = () => {

  const [ mode, setMode ] = useState('light')

  return (
    <ThemeProvider theme={createTheme(theme(mode))}>
      <Box component="nav">
        <Navigation mode={mode} setMode={setMode} />
        <Links />
      </Box>
      <Box className="site-wrapper" component='main'>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'background.default' }}>
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
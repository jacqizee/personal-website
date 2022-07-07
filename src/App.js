import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Interests from './components/Interests'
import Skills from './components/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/Contact'

import { theme } from './components/Theme'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'

const App = () => {

  const [ mode, setMode ] = useState('light')

  return (
    <ThemeProvider theme={createTheme(theme(mode))}>
      <BrowserRouter>
        <Navigation mode={mode} setMode={setMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Interests />
        <Contact />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
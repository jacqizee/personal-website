import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Links from './components/Links'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
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
        <Links />
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        {/* <Routes>
          <Route path='/#about' element={<About />} />
          <Route path='/#experience' element={<Experience />} />
          <Route path='/#portfolio' element={<Portfolio />} />
          <Route path='/#contact' element={<Contact />} />
        </Routes> */}
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
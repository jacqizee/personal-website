import Navigation from './components/Navigation'
import Links from './components/Links'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Box from '@mui/material/Box'

const App = () => {
  return (
    <>
      <Box component="nav">
        <Navigation />
        <Links />
      </Box>
      <Box className="site-wrapper" component='main'>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
        </Box>
      </Box>
    </>
  )
}

export default App
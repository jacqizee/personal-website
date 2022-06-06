import Skills from './Skills'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const About = () => {
  return(
    <Box id="about" sx={{ width: '100%', minHeight: '100vh', height: '100vh', backgroundColor: 'white' }}>
      <Box sx={{ height: '100%' }}>
        <Typography sx={{ textAlign: 'center', mx: 5, my: 3 }}>
          About Me
        </Typography>
        <Skills />
      </Box>
    </Box>
  )
}

export default About
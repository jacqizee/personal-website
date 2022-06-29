import Skills from './Skills'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import { flexCenterCol } from './styles/styles'

const About = () => {
  return(
    <Box id="about" sx={{ width: '100%', minHeight: '100vh', height: '100vh', backgroundColor: 'white', textAlign: 'center', ...flexCenterCol }}>
      {/* Headline */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', px: 5, py: 3, width: 'fit-content', boxShadow: '5px 5px 0 black', mb: 3 }}>
        <Typography variant="h4">
          About Me
        </Typography>
      </Box>

      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={12} md={6}>
          <Typography variant='h5'>
            Hey there!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Skills />
        </Grid>
      </Grid>
    </Box>
  )
}

export default About
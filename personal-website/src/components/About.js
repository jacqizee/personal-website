import Skills from './Skills'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import { flexCenterCol } from './styles/styles'

const About = () => {
  return(
    <Box id="about" sx={{ width: '100%', minHeight: '100vh', height: '100vh', backgroundColor: 'white', textAlign: 'center', ...flexCenterCol }}>
      {/* Headline */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', px: 3, py: 1, width: 'fit-content', boxShadow: '5px 5px 0 black', mb: 3 }}>
        <Typography variant="h4">
          About Me
        </Typography>
      </Box>

      <Grid container sx={{ height: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' sx={{ mb: 1 }}>
            👋🏻 Hey There!
          </Typography>
          <Box sx={{ textAlign: 'left', width: '50%' }}>
            <Typography variant='body1' sx={{ mb: 1 }}>
              I'm Jackie, a former digital marketer turned software engineer 👩🏻‍💻
            </Typography>
            <Typography variant='body1' sx={{ mb: 1 }}>
              While I've spent a few years in digital marketing 🖥, I've found myself drawn to software engineering and the endless potential 🌱 to learn and grow in the field.
            </Typography>
            <Typography variant='body1' sx={{ mb: 1 }}>
              After months of quietly self-studying 📚 in my free hours before and after work, in 2022 I decided to take the leap and enroll full-time 🤓 in a Software Engineering bootcamp to further accelerate my learning (though I find the more I learn, the more I learn how much more there is to learn!).
            </Typography>
            <Typography variant='body1' sx={{ mb: 1 }}>
              I love the creative 🎨 and rewarding nature of coding and am excited to challenge myself 💪🏻 to create and work on projects I can be proud of.
            </Typography>
          </Box>
        </Box>
        {/* <Grid item xs={12} md={6}>
          <Skills />
        </Grid> */}
      </Grid>
    </Box>
  )
}

export default About
import Fade from 'react-reveal/Fade'

// Files
import resume from '../assets/Jacqueline_Zhou_Resume.pdf'
import cv from '../assets/Jacqueline_Zhou_CV.pdf'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

import { flexCenterCol, headlineStyling, cardStyling, paragraphStyling, sectionStyling } from './styles/styles'

const About = () => {
  return(
    <Box id="about" sx={{ ...sectionStyling }}>
      
      {/* Headline */}
      <Typography variant="h4" sx={ headlineStyling }>
        About Me
      </Typography>

      {/* Body */}
      <Fade>
        <Box sx={{ ...cardStyling, ...flexCenterCol, textAlign: 'center' }}>
          <Typography variant='h6' sx={{ mb: 1, color: 'primary.contrastText' }}>
            👋🏻 Hey There!
          </Typography>
          <Typography variant='body1' sx={ paragraphStyling }>
            I'm Jackie, a former digital marketer turned software engineer. 👩🏻‍💻
          </Typography>
          <Typography variant='body1' sx={ paragraphStyling }>
            While I've enjoyed a few years in digital marketing, I've found myself drawn to software engineering and the endless potential to learn and grow in the field.
          </Typography>
          <Typography variant='body1' sx={ paragraphStyling }>
            After self-studying in my free hours before and after work, in 2022 I decided to take the leap and enroll full-time in a Software Engineering bootcamp to further accelerate my learning (though I find the more I learn, the more I learn how much more there is I want to learn).
          </Typography>
          <Typography variant='body1' sx={ paragraphStyling }>
            I love the creative and rewarding nature of coding and am excited to challenge myself by creating and working on projects I can be proud of! 💪🏻
          </Typography>
        
          {/* Resume/CV */}
          <Box sx={{ display: 'flex' }}>
            <Button component={Link} href={resume} variant='outlined' target='__blank__' sx={{ mt: 1, color: 'secondary.contrastText', boxShadow: 0, mx: .5 }}>Resume</Button>
            <Button component={Link} href={cv} variant='outlined' target='__blank__' sx={{ mt: 1, color: 'secondary.contrastText', boxShadow: 0, mx: .5 }}>CV</Button>
          </Box>
        </Box>
      </Fade>
    </Box>
  )
}

export default About
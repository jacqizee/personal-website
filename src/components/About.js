// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { flexCenterCol, headlineStyling, cardStyling, paragraphStyling } from './styles/styles'

const About = () => {
  return(
    <Box id="about" sx={{ width: '100%', backgroundColor: 'background.default', ...flexCenterCol }}>
      
      {/* Headline */}
      <Typography variant="h4" sx={ headlineStyling }>
        About Me
      </Typography>

      {/* Body */}
      <Box sx={{ ...cardStyling, ...flexCenterCol, mb: 3, textAlign: 'center' }}>
        <Typography variant='h6' sx={{ mb: 1, color: 'primary.contrastText' }}>
          👋🏻 Hey There!
        </Typography>
        <Typography variant='body1' sx={ paragraphStyling }>
          I'm Jackie, a former digital marketer turned software engineer.
        </Typography>
        <Typography variant='body1' sx={ paragraphStyling }>
          While I've enjoyed a few years in digital marketing, I've found myself drawn to software engineering and the endless potential to learn and grow in the field.
        </Typography>
        <Typography variant='body1' sx={ paragraphStyling }>
          After months of self-studying in my free hours before and after work, in 2022 I decided to take the leap and enroll full-time in a Software Engineering bootcamp to further accelerate my learning (though I find the more I learn, the more I learn how much more there is I want to learn).
        </Typography>
        <Typography variant='body1' sx={ paragraphStyling }>
          I love the creative and rewarding nature of coding and am excited to challenge myself by creating and working on projects I can be proud of!
        </Typography>
      </Box>
      
    </Box>
  )
}

export default About
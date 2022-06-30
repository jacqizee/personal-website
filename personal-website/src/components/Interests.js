
// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { flexCenterCol, aboutMeStyling } from './styles/styles'

const Interests = () => {
  return (
    <Box id="interests" sx={{ width: '100%', backgroundColor: 'background.default', ...flexCenterCol }}>
      {/* Interests */}
      {/* Headline */}
      <Typography variant="h4" sx={ aboutMeStyling[2] }>
      Interests
      </Typography>
      
      {/* Body */}
      <Box sx={{ ...aboutMeStyling[0], display: 'flex', alignItems: 'center', flexDirection: 'column', mb: 3 }}>
        <Typography variant='body1' sx={ aboutMeStyling[1] }>
          When I'm away from the computer, I like to spend my time watercolor painting and graphite sketching 👩🏻‍🎨, with my favorite thing to draw at the moment being birds.
        </Typography>
        <Typography variant='body1' sx={ aboutMeStyling[1] }>
          I also love to spend time in the kitchen baking breads 🍞 and cookies, and trying new recipes (have any favorites you'd like to share? 👀) inspired by the places I've travelled.
        </Typography>
      </Box>
    </Box>
  )
}

export default Interests

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { sectionStyling, paragraphStyling, headlineStyling, cardStyling } from './styles/styles'

const Interests = () => {
  return (
    <Box id="interests" sx={{ ...sectionStyling }}>
      {/* Interests */}
      {/* Headline */}
      <Typography variant="h4" sx={ headlineStyling }>
      Interests
      </Typography>
      
      {/* Body */}
      <Box sx={{ ...cardStyling, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant='body1' sx={ paragraphStyling }>
          When I'm away from the computer, I like to spend my time watercolor painting and graphite sketching 👩🏻‍🎨, with my favorite thing to draw at the moment being birds.
        </Typography>
        <Typography variant='body1' sx={ paragraphStyling }>
          I also love to spend time in the kitchen baking breads 🍞 and cookies, and trying new recipes (have any favorites you'd like to share?) inspired by the places I've traveled 🌎.
        </Typography>
      </Box>
    </Box>
  )
}

export default Interests
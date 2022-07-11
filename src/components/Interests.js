// Images
import art1 from '../assets/art-preview-1.png'
import art2 from '../assets/art-preview-2.png'
import art3 from '../assets/art-preview-3.png'

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
      <Box sx={{ ...cardStyling, display: 'flex', alignItems: 'center', flexDirection: 'column', bgcolor: 'rgba(0,144,216,0.25)'}}>
        
        <Typography variant='body1' sx={ paragraphStyling }>
          When I'm away from the computer, I like to spend my time watercolor painting and graphite sketching 👩🏻‍🎨, with my favorite thing to draw at the moment being birds.
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 3 }}>
          <Box component='img' src={art1} alt='art' sx={{ width: { xs: '30%', md: '25%'}, mx: 1 }}/>
          <Box component='img' src={art2} alt='art' sx={{ width: { xs: '30%', md: '25%'}, mx: 1 }}/>
          <Box component='img' src={art3} alt='art' sx={{ width: { xs: '30%', md: '25%'}, mx: 1 }}/>
        </Box>
        
        <Typography variant='body1' sx={ paragraphStyling }>
          I also love to spend time in the kitchen baking bread 🍞 and cookies, and trying new recipes (have any favorites you'd like to share?) inspired by the places I've traveled 🌎.
        </Typography>
      </Box>
    </Box>
  )
}

export default Interests
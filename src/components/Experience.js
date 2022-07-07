// Styling
import { sectionStyling, headlineStyling } from './styles/styles'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Experience = () => {
  return(
    <Box id='experience' sx={{ ...sectionStyling, bgcolor: 'background.defaultDarker' }}>
      {/* Headline */}
      <Typography variant="h4" sx={ headlineStyling }>
        Experience
      </Typography>

      <Box>

      </Box>

    </Box>
  )
}

export default Experience

// Styling
import { sectionStyling, flexCenterCol, headlineStyling } from './styles/styles'

// MUI
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Experience = () => {
  return(
    <Box id='experience' sx={{ ...sectionStyling, bgcolor: 'background.defaultDarker' }}>
      {/* Headline */}
      <Typography variant="h4" sx={ headlineStyling }>
        Experience
      </Typography>
      
      <Box>
        <Paper sx={{ p: 10, m: 1 }}>
          <Typography>
            Experience
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}

export default Experience

// Styling
import { sharedStyling, flexCenterCol } from './styles/styles'

// MUI
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Portfolio = () => {
  return(
    <Box id='portfolio' sx={{ ...flexCenterCol, backgroundColor: 'background.default' }}>
      {/* Headline */}
      <Typography variant="h4" sx={ sharedStyling[2] }>
        Portfolio
      </Typography>
      <Box>
        <Paper sx={{ p: 10, m: 1 }}>
          
        </Paper>
      </Box>
    </Box>
  )
}

export default Portfolio
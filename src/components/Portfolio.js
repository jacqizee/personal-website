
// Styling
import { flexCenterCol, headlineStyling } from './styles/styles'

// Images
import tetris from '../assets/portfolio/Lofi-Tetris.png'
import betterCred from '../assets/portfolio/BetterCred.gif'
import Plantpedia from '../assets/portfolio/Plantpedia.gif'
import recipeFinder from '../assets/portfolio/RecipeFinder.gif'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Portfolio = () => {
  return(
    <Box id='portfolio' sx={{ ...flexCenterCol, backgroundColor: 'background.default' }}>
      {/* Headline */}
      <Typography variant="h4" sx={ headlineStyling }>
        Portfolio
      </Typography>
      <Box sx={{ display: 'flex', m: 10 }}>
        <Box component='img' src={tetris} alt='preview of lo-fi tetris project' sx={{ width: '45%' }} />
          <Typography variant='h6' sx={{ bgcolor: 'primary.dark', height: 'fit-content' }}>Lo-Fi Tetris</Typography>
      </Box>
    </Box>
  )
}

export default Portfolio
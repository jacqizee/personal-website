
// Styling
import { flexCenterCol, headlineStyling } from '../styles/styles'

// Components
import { PortfolioCardRight, PortfolioCardLeft } from './PortfolioCard'
import { portfolioItems } from './PortfolioItems'

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

      <PortfolioCardRight portfolioItem={portfolioItems[0]} />
      
      <PortfolioCardLeft portfolioItem={portfolioItems[1]} />
      
      <PortfolioCardRight portfolioItem={portfolioItems[2]} />

      <PortfolioCardLeft portfolioItem={portfolioItems[3]} />

    </Box>
  )
}

export default Portfolio
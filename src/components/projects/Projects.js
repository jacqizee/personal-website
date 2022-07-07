
// Styling
import { flexCenterCol, headlineStyling } from '../styles/styles'

// Components
import { PortfolioCardRight, PortfolioCardLeft } from './ProjectCard'
import { portfolioItems } from './ProjectItems'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Projects = () => {
  return(
    <Box id='projects' sx={{ ...flexCenterCol, backgroundColor: 'background.default' }}>
      {/* Headline */}
      <Typography variant="h4" sx={{ ...headlineStyling, mb: 5 }}>
        Projects
      </Typography>

      <PortfolioCardRight portfolioItem={portfolioItems[0]} />
      
      <PortfolioCardLeft portfolioItem={portfolioItems[1]} />
      
      <PortfolioCardRight portfolioItem={portfolioItems[2]} />

      <PortfolioCardLeft portfolioItem={portfolioItems[3]} />

    </Box>
  )
}

export default Projects

// Styling
import { flexCenterCol, headlineStyling } from '../styles/styles'

// Components
import { ProjectCardRight, ProjectCardLeft } from './ProjectCard'
import { projectItems } from './ProjectItems'

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

      <ProjectCardRight portfolioItem={projectItems[0]} />
      
      <ProjectCardLeft portfolioItem={projectItems[1]} />
      
      <ProjectCardRight portfolioItem={projectItems[2]} />

      <ProjectCardLeft portfolioItem={projectItems[3]} />

    </Box>
  )
}

export default Projects
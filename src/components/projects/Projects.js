
// Styling
import { sectionStyling, headlineStyling } from '../styles/styles'

// Components
import { ProjectCardRight, ProjectCardLeft } from './ProjectCard'
import { projectItems } from './ProjectItems'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Projects = () => {
  return(
    <Box id='projects' sx={{ ...sectionStyling, pb: 1 }}>
      {/* Headline */}
      <Typography variant="h4" sx={{ ...headlineStyling }}>
        Projects
      </Typography>

      <ProjectCardRight projectItems={projectItems[0]} />

      <ProjectCardLeft projectItems={projectItems[1]} />
      
      <ProjectCardRight projectItems={projectItems[2]} />

      <ProjectCardLeft projectItems={projectItems[3]} />

    </Box>
  )
}

export default Projects
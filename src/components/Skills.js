// Animation
import Fade from 'react-reveal/Fade'

// Styling
import { sectionStyling, cardStyling } from './styles/styles'

// Logos
import { skillLogos } from './helpers/icons'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Skills = () => {

  return(
    <Box sx={{ ...sectionStyling, pt: 0 }}>
      <Typography variant="h6" sx={{ color: 'secondary.contrastText', mb: 1 }}>
          Skills & Technologies
      </Typography>
      
      <Fade>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', ...cardStyling }}>
          {skillLogos.map(logo => {
            return (  
              <Box
                key={logo.name}
                sx={{ position: 'relative', display: 'flex',
                justifyContent: 'center', alignItems: 'center',
                maxWidth: { xs: 75, md: 90 },
                borderRadius: 2, px: 2, py: 1, m: 1, bgcolor: 'rgba(265,265,265,0.30)' }}>
                <Box
                  component='img'
                  src={logo.src}
                  alt={`${logo.name} icon`}
                  sx={{ width: '100%' }} />
                <Typography
                  variant='caption'
                  sx={{ position: 'absolute',
                    fontSize: 0, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', borderRadius: 2,
                    ':hover': { 
                      textAlign: 'center',
                      display: 'flex',
                      fontSize: { xs: 12, md: 16 },
                      bgcolor: 'rgba(0,0,0,0.85)',
                      color: 'white',
                      } }}>
                  {logo.name}
                </Typography>
              </Box>
            )
          })}
        </Box>
      </Fade>
    </Box>
  )
}

export default Skills
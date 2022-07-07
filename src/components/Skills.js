// Styling
import { headlineStyling, sectionStyling } from './styles/styles'

// Logos
import { skillLogos } from './helpers/icons'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Skills = () => {

  return(
    <Box sx={{ ...sectionStyling, bgcolor: 'background.defaultDarker' }}>
      <Typography variant="h4"
          sx={ headlineStyling }>
          Skills
      </Typography>
        
      <Box sx={{ bgcolor: 'background.paper', boxShadow: 2, borderRadius: 3, p: 2, mx: { xs: 0, md: 3 }, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
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
    </Box>
  )
}

export default Skills
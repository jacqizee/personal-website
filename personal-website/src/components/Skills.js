import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { skillLogos } from './helpers/icons'

const Skills = () => {

  return(
    <>
      <Typography variant="h4"
          sx={{ bgcolor: 'primary.main',
            color: 'white',
            px: 3,
            py: 1,
            width: 'fit-content',
            borderRadius: 1,
            my: 3
        }}>
          Skills and Technologies
      </Typography>
      <Box sx={{ boxShadow: 2, borderRadius: 3, p: 2, mx: 3 }}>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {skillLogos.map(logo => {
            return (  
              <Box
                key={logo.name}
                sx={{ position: 'relative', display: 'flex',
                justifyContent: 'center', alignItems: 'center',
                maxWidth: { xs: 75, md: 90 },
                borderRadius: 2, px: 2, py: 1, m: 1 }}>
                <Box
                  component='img'
                  src={logo.src}
                  alt={`${logo.name} icon`}
                  sx={{ width: '100%' }} />
                <Typography
                  variant='caption'
                  sx={{ position: 'absolute',
                    fontSize: 0, alignItems: 'center', justifyContent: 'center',
                    width: '100%', height: '100%', borderRadius: 2, ':hover': { display: 'flex',
                      fontSize: { xs: 12, md: 17 },
                      bgcolor: 'rgba(0,0,0,0.85)',
                      color: 'white',
                      textShadow: '0 0 2px #000' } }}>
                  {logo.name}
                </Typography>
              </Box>
            )
          })}
        </Box>
      </Box>
    </>
  )
}

export default Skills
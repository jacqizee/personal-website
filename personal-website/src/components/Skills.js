import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { skillLogos } from './helpers/icons'

const Skills = () => {

  return(
    <Box sx={{ boxShadow: 5, borderRadius: 10, p: 5 }}>
      <Typography variant="h6" sx={{ textAlign: 'center', pb: 3 }}>
          Skills and Technologies
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {skillLogos.map(logo => {
          return (  
            <Box
              key={logo.name}
              sx={{ position: 'relative', display: 'flex',
              justifyContent: 'center', alignItems: 'center',
              maxWidth: { xs: 75, md: 100 },
              borderRadius: 2, px: 2, py: 1, m: 1 }}>
              <Box
                component='img'
                src={logo.src}
                alt={`${logo.name} icon`}
                sx={{ width: '100%' }} />
              <Typography
                variant='caption'
                className={'skills'}
                sx={{ position: 'absolute',
                  fontSize: 0, alignItems: 'center', justifyContent: 'center',
                  width: '100%', height: '100%', borderRadius: 2 }}>
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
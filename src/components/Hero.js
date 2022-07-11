import Links from './Links'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { flexCenterCol } from './styles/styles.js'

const Hero = () => {
  return(
    <Box id='hero' sx={{ ...flexCenterCol, height: '100vh', bgcolor: 'background.default', mb: 1 }}>
      <Typography variant="h2" component='h1' className="typed-out" color='primary.light' sx={{ fontWeight: 600, maxWidth: 'fit-content', fontSize: { xs: '2.8rem', sm: '3.8rem' } }}> 
        Jacqueline Zhou
      </Typography>
      <Typography variant="h4" component='h2' color='primary.main' sx={{ fontWeight: 300, fontSize: { xs: '2.1rem', sm: '2.6rem' } }}>
        Software Engineer
      </Typography>

      <Links />
    </Box>
  )
}

export default Hero
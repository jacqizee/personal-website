import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { flexCenterCol } from './styles/styles.js'

const Hero = () => {
  return(
    <Box id='hero' sx={{ ...flexCenterCol, height: '100vh' }}>
      <Typography variant="h2" className="h1-typed-out" color='secondary.light' sx={{ fontWeight: 600, maxWidth: 'fit-content' }}> 
        Jacqueline Zhou
      </Typography>
      <Typography variant="h4" color='secondary.dark' sx={{ fontWeight: 200 }}>
        Software Engineer
      </Typography>
    </Box>
  )
}

export default Hero
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { flexCenterCol } from './styles/styles.js'

const Hero = () => {
  return(
    <Box id='hero' sx={{ ...flexCenterCol, height: '100vh', bgcolor: 'background.default', mb: 1 }}>
      <Typography variant="h2" className="h1-typed-out" color='primary.light' sx={{ fontWeight: 600, maxWidth: 'fit-content' }}> 
        Jacqueline Zhou
      </Typography>
      <Typography variant="h4" color='primary.main' sx={{ fontWeight: 300 }}>
        Software Engineer
      </Typography>
    </Box>
  )
}

export default Hero
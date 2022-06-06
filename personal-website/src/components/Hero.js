import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Hero = () => {
  return(
    <Box id='hero' sx={{ display: 'flex', height: '100vh', textAlign: 'center', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="h2" className="h1-typed-out" color='primary'> 
        Jacqueline Zhou
      </Typography>
      <Typography variant="h4" color='primary.contrastText'>
        Software Engineer
      </Typography>
    </Box>
  )
}

export default Hero
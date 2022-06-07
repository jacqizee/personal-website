import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Hero = () => {
  return(
    <Box id='hero' sx={{ display: 'flex', height: '100vh', textAlign: 'center', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="h2" className="h1-typed-out" color='secondary.light' sx={{ fontWeight: 600 }}> 
        Jacqueline Zhou
      </Typography>
      <Typography variant="h4" color='secondary.contrastText' sx={{ fontWeight: 200 }}>
        Software Engineer
      </Typography>
    </Box>
  )
}

export default Hero
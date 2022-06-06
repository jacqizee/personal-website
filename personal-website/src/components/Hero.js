import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Hero = () => {
  return(
    <Box id='hero' className='centered' sx={{ height: '100vh' }}>
      <Typography variant="h2" className="typed-out" sx={{ fontFamily: 'Inconsolata, arial'}}> 
        Jacqueline Zhou
      </Typography>
      <Typography variant="h4" sx={{ color: 'white' }}>
        Software Engineer
      </Typography>
    </Box>
  )
}

export default Hero

// className="typed-out"
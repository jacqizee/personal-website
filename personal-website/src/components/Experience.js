import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Experience = () => {
  return(
    <Box id='experience' sx={{ width: '100%', minHeight: '100vh', backgroundColor: 'white' }}>
      <Box>
        <Paper sx={{ p: 10, m: 1 }}>
          <Typography>
            Experience
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}

export default Experience
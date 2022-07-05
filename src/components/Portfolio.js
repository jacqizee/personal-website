import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Portfolio = () => {
  return(
    <Box id='portfolio' sx={{ width: '100%', minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Box>
        <Paper sx={{ p: 10, m: 1 }}>
          <Typography>
            Portfolio
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}

export default Portfolio
// Styling
import { sectionStyling } from './styles/styles.js'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Footer = () => {
  return (
    <Box id="footer" sx={{ ...sectionStyling, pb: 2, color: 'primary.contrastText' }}>
      <Typography variant="caption">
        Designed and Built by Jacqueline Zhou
      </Typography>
    </Box>
  )
}

export default Footer
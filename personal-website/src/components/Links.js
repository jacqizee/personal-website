import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import { actionLogos } from './helpers/icons'

const Links = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'column' }, bottom: 1,
      position: 'fixed', zIndex: 'tooltip', ml: { xs: 1, sm: 3 }, mb: { xs: 1, sm: 3 } }}>
      {actionLogos.map((action) => (
        <IconButton
          size='small'
          component={Link}
          href={action.link}
          target="_blank"
          rel="noopener"
          key={action.name}
          sx={{ color: 'white', my: 1, mx: .5, border: '.5px inset primary.light', boxShadow: 3, bgcolor: 'primary.dark' }}
        >
          {action.icon}
        </IconButton>
      ))}
    </Box>
  )
}

export default Links
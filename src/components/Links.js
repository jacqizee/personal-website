import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import { actionLogos } from './helpers/icons'

const Links = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'column' }, bottom: 1,
      position: 'fixed', zIndex: 'tooltip', ml: { xs: .5, sm: 1 }, mb: { xs: .5, sm: 1.25 } }}>
      {actionLogos.map((action) => (
        <IconButton
          size='small'
          component={Link}
          href={action.link}
          target="_blank"
          rel="noopener"
          key={action.name}
          sx={{ color: 'white', my: .5, mx: .5, boxShadow: 3, bgcolor: 'primary.dark', '&:hover': { bgcolor: 'primary.main', boxShadow: 5 } }}
        >
          {action.icon}
        </IconButton>
      ))}
    </Box>
  )
}

export default Links
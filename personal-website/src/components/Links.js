import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import { actionLogos } from './helpers/icons'

const Links = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', bottom: 1,
      position: 'fixed', zIndex: 'tooltip', ml: 3, mb: 3 }}>
      {actionLogos.map((action) => (
        <IconButton
          size='small'
          component={Link}
          href={action.link}
          target="_blank"
          rel="noopener"
          key={action.name}
          sx={{ my: 1, color: 'grey', border: '.5px inset white', boxShadow: 3 }}
        >
          {action.icon}
        </IconButton>
      ))}
    </Box>
  )
}

export default Links
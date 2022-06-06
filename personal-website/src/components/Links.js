import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'

// Icons
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import PaletteIcon from '@mui/icons-material/Palette'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

const actions = [
  { icon: <GitHubIcon />, name: 'GitHub', link: 'https://github.com/jacqizee/' },
  { icon: <LinkedInIcon />, name: 'LinkedIn', link: 'https://www.linkedin.com/in/jacqueline-z/' },
  { icon: <InstagramIcon />, name: 'Instagram', link: 'https://www.instagram.com/jacqizee' },
  { icon: <PaletteIcon />, name: 'Art Instagram', link: 'https://www.instagram.com/jacqizart' },
  { icon: <EmailOutlinedIcon />, name: 'Email', link: 'mailto:jhjzhou@gmail.com' },
]

const Links = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', bottom: 1,
      position: 'fixed', zIndex: 'tooltip', ml: 3, mb: 3 }}>
      {actions.map((action) => (
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
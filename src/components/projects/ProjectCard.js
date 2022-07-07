// Icons
import GitHubIcon from '@mui/icons-material/GitHub'
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

export const ProjectCardRight = ({ projectItem }) => {
  return (
    <Grid container sx={{ display: 'flex', alignItems: 'center', my: { xs: 0, md: 2 } }}>
      <ProjectImage projectItem={projectItem} />
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', mt: { md: -3, lg: -10 }, pr: { xs: 3, md: 6 }, pl: { xs: 6, md: 3 } }}>
        <ProjectInfo projectItem={projectItem} />
      </Grid>
    </Grid>
  )
}

export const ProjectCardLeft = ({ projectItem }) => {
  return (
    <Grid container sx={{ display: 'flex', alignItems: 'center', my: { xs: 0, md: 2 } }}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', mt: { md: -3, lg: -10 }, pl: { xs: 6, md: 8 }, pr: { xs: 3, md: 0 } }}>
        <ProjectInfo projectItem={projectItem} />
      </Grid>
      <ProjectImage projectItem={projectItem} />
    </Grid>
  )
}

const ProjectImage = ({ projectItem }) => {
  return (
    <Grid item component={Link} href={projectItem.deployedLink} target="__blank__"
    md={6} sx={{ textAlign: 'center', display: { xs: 'none', md: 'inline' } }}>
      <Box component='img'
        src={projectItem.image}
        alt={`Preview of ${projectItem.name}`}
        sx={{ width: '85%', boxShadow: 2, borderRadius: 2 }} />
    </Grid>
  )
}

const ProjectInfo = ({ projectItem }) => {
  return (
    <>
      {/* Title */}
      <Typography variant='h6'
        sx={{ position: 'relative',
          top: 25,
          right: 25,
          bgcolor: 'primary.dark',
          width: 'fit-content',
          color: 'white',
          py: 1,
          px: 3 }}
      >
        {projectItem.name}
      </Typography>

      {/* Info */}
      <Box sx={{ display: 'flex' }}>

        {/* Description */}
        <Box sx={{ height: 'fit-content', pt: 1.5, border: '1px dotted', borderColor: 'primary.contrastText', color: 'primary.contrastText', borderRadius: 1, bgcolor: 'background.paper' }}>
          <Typography variant='body1' sx={{ py: 3, px: 5 }}>
            {projectItem.description}
          </Typography>
        </Box>

        {/* Links */}
        <Box>
          {/* Github Link */}
          <IconButton size='small'
            component={Link}
            target="_blank"
            rel="noopener"
            href={projectItem.gitLink}
            sx={ iconStyling }
          >
            <GitHubIcon />
          </IconButton>

          {/* Deployed Link */}
          <IconButton size='small'
            component={Link}
            target="_blank"
            rel="noopener"
            href={projectItem.deployedLink}
            sx={ iconStyling }
          >
            <InsertLinkRoundedIcon />
          </IconButton>

        </Box>
      </Box>

      {/* Skill Logos */}
      <Box sx={{ m: 1, mt: 1.5 }}>
        {projectItem.tech.map(logo => {
          return (
            <Tooltip title={logo.name} placement="bottom">
              <Box component='img' key={logo.name} src={logo.src} alt={logo.name} sx={{ height: '1.5rem', mx: .75 }} />
            </Tooltip>
          )
        })}
      </Box>
    </>
  )
}

const iconStyling = {
  bgcolor: 'primary.darker',
  color: 'white',
  borderRadius: '0 5px 5px 0',
  my: .25,
  '&:hover': { bgcolor: 'primary.dark' },
}
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

export const ProjectCardRight = ({ projectItems }) => {
  return (
    <Grid container sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(0,144,216,0.10)', py: 5, boxShadow: 1 }}>
      <ProjectImage projectItems={projectItems} />
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', mt: -2, pr: { xs: 3, md: 6 }, pl: { xs: 6, md: 3 } }}>
        <ProjectInfo projectItems={projectItems} />
      </Grid>
    </Grid>
  )
}

export const ProjectCardLeft = ({ projectItems }) => {
  return (
    <Grid container sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(0,144,216,0.30)', py: 5, boxShadow: 1 }}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', mt: -3, pl: { xs: 6, md: 8 }, pr: { xs: 3, md: 0 } }}>
        <ProjectInfo projectItems={projectItems} />
      </Grid>
      <ProjectImage projectItems={projectItems} />
    </Grid>
  )
}

const ProjectImage = ({ projectItems }) => {
  return (
    <Grid item component={Link} href={projectItems.deployedLink} target="__blank__"
    md={6} sx={{ textAlign: 'center', display: { xs: 'none', md: 'inline' } }}>
      <Box component='img'
        src={projectItems.image}
        alt={`Preview of ${projectItems.name}`}
        sx={{ width: '85%', boxShadow: 2, borderRadius: 2 }} />
    </Grid>
  )
}

const ProjectInfo = ({ projectItems }) => {
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
        {projectItems.name}
      </Typography>

      {/* Info */}
      <Box sx={{ display: 'flex' }}>

        {/* Description */}
        <Box sx={{ height: 'fit-content', pt: 1.5, border: '1px dotted', borderColor: 'primary.contrastText', color: 'primary.contrastText', borderRadius: 1, bgcolor: 'background.paper' }}>
          <Typography variant='body1' sx={{ py: 3, px: 5 }}>
            {projectItems.description}
          </Typography>
        </Box>

        {/* Links */}
        <Box>
          {/* Github Link */}
          <IconButton size='small'
            component={Link}
            target="_blank"
            rel="noopener"
            href={projectItems.gitLink}
            sx={ iconStyling }
          >
            <GitHubIcon />
          </IconButton>

          {/* Deployed Link */}
          <IconButton size='small'
            component={Link}
            target="_blank"
            rel="noopener"
            href={projectItems.deployedLink}
            sx={ iconStyling }
          >
            <InsertLinkRoundedIcon />
          </IconButton>

        </Box>
      </Box>

      {/* Skill Logos */}
      <Box sx={{ m: 1, mt: 1.5 }}>
        {projectItems.tech.map(logo => {
          return (
            <Tooltip title={logo.name} key={logo.name} placement="bottom">
              <Box component='img' src={logo.src} alt={logo.name} sx={{ height: '1.5rem', mx: .75 }} />
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
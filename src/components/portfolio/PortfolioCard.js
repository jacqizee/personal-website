// Icons
import GitHubIcon from '@mui/icons-material/GitHub'
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded'

// MUI
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'

const iconStyling = {
  bgcolor: 'primary.dark',
  color: 'white',
  borderRadius: '0 5px 5px 0',
  my: .25,
  '&:hover': { bgcolor: 'primary.main' }
}

export const PortfolioCardRight = ({ portfolioItem }) => {
  return (
    <Grid container sx={{ display: 'flex', alignItems: 'center', my: 3.5 }}>
      <Image portfolioItem={portfolioItem} />
      <PortfolioInfo portfolioItem={portfolioItem} />
    </Grid>
  )
}

export const PortfolioCardLeft = ({ portfolioItem }) => {
  return (
    <Grid container sx={{ display: 'flex', alignItems: 'center', my: 3.5 }}>
      <PortfolioInfo portfolioItem={portfolioItem} />
      <Image portfolioItem={portfolioItem} />
    </Grid>
  )
}

const Image = ({ portfolioItem }) => {
  return (
    <Grid item md={6} sx={{ textAlign: 'center', display: { xs: 'none', md: 'inline' } }}>
      <Box component='img'
        src={portfolioItem.image}
        alt={`Preview of ${portfolioItem.name}`}
        sx={{ width: '85%', boxShadow: 3, borderRadius: 2 }} />
    </Grid>
  )
}

const PortfolioInfo = ({ portfolioItem }) => {
  return (
    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', mt: { md: -3, lg: -10 } }}>

        {/* Title */}
        <Typography variant='h6'
          sx={{ position: 'relative',
            top: 25,
            left: 15,
            bgcolor: 'primary.dark',
            width: 'fit-content',
            color: 'white',
            py: 1,
            px: 3 }}
        >
          {portfolioItem.name}
        </Typography>

        {/* Description */}
        <Box sx={{ display: 'flex', mx: 5 }}>
          <Paper sx={{ height: 'fit-content', pt: 1.5 }}>
            <Typography variant='body1' sx={{ py: 3, px: 5 }}>
              {portfolioItem.description}
            </Typography>
          </Paper>
          <Box>
            <IconButton size='small'
              component={Link}
              target="_blank"
              rel="noopener"
              href={portfolioItem.gitLink}
              sx={ iconStyling }
            >
              <GitHubIcon />
            </IconButton>
            <IconButton size='small'
              component={Link}
              target="_blank"
              rel="noopener"
              href={portfolioItem.deployedLink}
              sx={ iconStyling }
            >
              <InsertLinkRoundedIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Skill Logos */}
        <Box sx={{ m: 1, mt: 1.5, ml: 5 }}>
          {portfolioItem.tech.map(logo => <Box component='img' key={logo.name} src={logo.src} alt={logo.name} sx={{ height: '2rem', mx: .5 }} />)}
        </Box>
      </Grid>
  )
}
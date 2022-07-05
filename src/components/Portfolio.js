
// Styling
import { flexCenterCol, headlineStyling } from './styles/styles'

// Images
import tetris from '../assets/portfolio/Lofi-Tetris.png'
import betterCred from '../assets/portfolio/BetterCred.gif'
import plantpedia from '../assets/portfolio/Plantpedia.gif'
import recipeFinder from '../assets/portfolio/RecipeFinder.gif'

// Icons
import GitHubIcon from '@mui/icons-material/GitHub'
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded'
import { skillLogos } from './styles/styles'

// MUI
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'

const iconStyling = {
  bgcolor: 'primary.dark',
  color: 'white',
  borderRadius: '0 5px 5px 0',
  my: .5,
  '&:hover': { bgcolor: 'primary.main' }
}

const Portfolio = () => {
  const portfolioItems = [
    {
      image: betterCred,
      gitLink: 'link',
      deployedLink: '',
      name: 'BetterCred',
      description: '',
      tech: [],
    },
    {
      image: plantpedia,
      gitLink: 'link',
      deployedLink: '',
      name: 'Plantpedia',
      description: '',
      tech: []
    },
    {
      image: recipeFinder,
      gitLink: 'link',
      deployedLink: '',
      name: 'Recipe Finder',
      description: '',
      tech: []
    },
    {
      image: tetris,
      gitLink: 'link',
      deployedLink: '',
      name: 'Lo-Fi Tetris',
      description: 'A Tetris clone with a lo-fi themed twist! Built over the course of one week. Features include sound effects, persistent high score, and speed incrementation as you level up.',
      tech: []
    },
  ]

  return(
    <Box id='portfolio' sx={{ ...flexCenterCol, backgroundColor: 'background.default' }}>
      {/* Headline */}
      <Typography variant="h4" sx={ headlineStyling }>
        Portfolio
      </Typography>

      {/* Tetris */}
      <Box sx={{ display: 'flex', m: 10 }}>
        <Box component='img' src={portfolioItems[3].image} alt={`Preview of ${portfolioItems[3].name}`} sx={{ width: '45%' }} />
        <Box>
          <IconButton size='small' component={Link} target="_blank" rel="noopener" href='jacqizee.me' sx={ iconStyling } >
            <GitHubIcon />
          </IconButton>
          <IconButton size='small' component={Link} target="_blank" rel="noopener" href='jacqizee.me' sx={ iconStyling } >
            <InsertLinkRoundedIcon />
          </IconButton>
        </Box>
        <Box sx={{ ml: 8 }}>
          <Typography variant='h6' sx={{ position: 'relative', top: 25, right: 25, bgcolor: 'primary.dark', width: 'fit-content', color: 'white', py: 1, px: 3 }}>
            {portfolioItems[3].name}
          </Typography>
          <Paper sx={{ height: 'fit-content', pt: 1.5 }}>
            <Typography variant='body1' sx={{ py: 3, px: 5 }}>
              {portfolioItems[3].description}
            </Typography>

          </Paper>
        </Box>
      </Box>
    </Box>
  )
}

export default Portfolio
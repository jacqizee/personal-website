// Images
import tetris from '../../assets/portfolio/Lofi-Tetris.png'
import betterCred from '../../assets/portfolio/BetterCred.png'
import plantpedia from '../../assets/portfolio/Plantpedia.png'
import recipeFinder from '../../assets/portfolio/RecipeFinder.png'

// Icons
import { skillLogos } from '../helpers/icons'

export const portfolioItems = [
  {
    image: betterCred,
    gitLink: 'https://github.com/jacqizee/BetterCred',
    deployedLink: 'https://bettercred.herokuapp.com/',
    name: 'BetterCred',
    description: 'Credit card directory that allow users to find and save credit cards that suit their lifestyle needs to a wallet',
    tech: [ skillLogos[0], skillLogos[10], skillLogos[2], skillLogos[1], skillLogos[12], skillLogos[4], skillLogos[6] ],
  },
  {
    image: plantpedia,
    gitLink: 'https://github.com/jacqizee/Plantpedia',
    deployedLink: 'https://plant-pedia.herokuapp.com/',
    name: 'Plantpedia',
    description: 'App designed specifically for plants, allowing users to find and add information about their favorite house plants',
    tech: []
  },
  {
    image: recipeFinder,
    gitLink: 'https://github.com/jacqizee/Recipe-Finder',
    deployedLink: 'https://find-din-recipes.netlify.app/',
    name: 'Recipe Finder',
    description: 'A web app that allows users to find new, exciting recipes by category and save them to their browser',
    tech: []
  },
  {
    image: tetris,
    gitLink: 'https://github.com/jacqizee/Lo-Fi-Tetris',
    deployedLink: 'https://jacqizee.github.io/Lo-Fi-Tetris/',
    name: 'Lo-Fi Tetris',
    description: 'A Tetris clone with a lo-fi themed twist! Built over the course of one week. Features include sound effects, persistent high score, and speed incrementation as you level up.',
    tech: [ skillLogos[1], skillLogos[4], skillLogos[5] ]
  },
]
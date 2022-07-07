// Images
import tetris from '../../assets/projects/Lofi-Tetris.png'
import betterCred from '../../assets/projects/BetterCred.png'
import plantpedia from '../../assets/projects/Plantpedia.png'
import recipeFinder from '../../assets/projects/RecipeFinder.png'

// Icons
import { skillLogos } from '../helpers/icons'

export const projectItems = [
  {
    image: betterCred,
    gitLink: 'https://github.com/jacqizee/BetterCred',
    deployedLink: 'https://bettercred.herokuapp.com/',
    name: 'BetterCred',
    description: 'Full-stack web application that allow users to find and save credit cards that suit their lifestyle needs to a digital wallet. Designed a PostgreSQL DB that is consumed by a RESTful API.',
    tech: [ skillLogos[0], skillLogos[10], skillLogos[2], skillLogos[1], skillLogos[12], skillLogos[4], skillLogos[6] ],
  },
  {
    image: plantpedia,
    gitLink: 'https://github.com/jacqizee/Plantpedia',
    deployedLink: 'https://plant-pedia.herokuapp.com/',
    name: 'Plantpedia',
    description: 'Working in a 3-person group to design and build an app for a plant directory of sorts, allowing users to find and add information about their favorite house plants. Created using the MERN stack, with a CRUD API that consumes a MongoDB database.',
    tech: [ skillLogos[7], skillLogos[3], skillLogos[2], skillLogos[1], skillLogos[12], skillLogos[4], skillLogos[5], skillLogos[6] ]
  },
  {
    image: recipeFinder,
    gitLink: 'https://github.com/jacqizee/Recipe-Finder',
    deployedLink: 'https://find-din-recipes.netlify.app/',
    name: 'Recipe Finder',
    description: 'A 2-person one day hackathon project in which we built a web app that consumes a public API (TheMealDB). Displayed the returned data in a way that allows users to search and find new, exciting recipes by either category or region, then save their favorites finds to their browser.',
    tech: [ skillLogos[2], skillLogos[1], skillLogos[4], skillLogos[5], skillLogos[6] ]
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
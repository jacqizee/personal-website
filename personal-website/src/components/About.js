import Skills from './Skills'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { flexCenterCol } from './styles/styles'

// 0 = Cards, 1 = Paragraphs
const aboutMeStyling = [
  {
    textAlign: 'left',
    width: { xs: '80%', md: '50%'},
    borderRadius: 3,
    boxShadow: 2,
    px: 2,
    py: 3,
    color: 'secondary.contrastText',
    bgcolor: 'background.paper'
  },
  {
    mb: 1,
    textIndent: '25px'
  }
]

const About = () => {
  return(
    <Box id="about" sx={{ width: '100%', backgroundColor: 'background.default', textAlign: 'center', ...flexCenterCol }}>
      {/* Headline */}
      <Typography variant="h4" sx={{ bgcolor: 'primary.main', color: 'white', px: 3, py: 1, width: 'fit-content', boxShadow: '5px 5px 0 black', my: 3 }}>
        About Me
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mb: 6 }}>

        {/* Greeting */}
        

        {/* About Me */}
        <Box sx={ aboutMeStyling[0] }>
          <Typography variant='h6' sx={{ mb: 1, color: 'secondary.contrastText', textAlign: 'center' }}>
            👋🏻 Hey There!
          </Typography>
          <Typography variant='body1' sx={ aboutMeStyling[1] }>
            I'm Jackie, a former digital marketer turned software engineer 👩🏻‍💻
          </Typography>
          <Typography variant='body1' sx={ aboutMeStyling[1] }>
            While I've enjoyed a few years in digital marketing, I've found myself drawn to software engineering 🖥 and the endless potential to learn and grow 🌱 in the field.
          </Typography>
          <Typography variant='body1' sx={ aboutMeStyling[1] }>
            After months of self-studying 📚 in my free hours before and after work, in 2022 I decided to take the leap and enroll full-time 🤓 in a Software Engineering bootcamp to further accelerate my learning (though I find the more I learn 🧠, the more I learn how much more there is I want to learn!).
          </Typography>
          <Typography variant='body1' sx={ aboutMeStyling[1] }>
            I love the creative 🎨 and rewarding nature of coding and am excited to challenge myself 💪🏻 to create and work on projects I can be proud of.
          </Typography>
        </Box>

        {/* Interests */}
        <Typography variant="h4" sx={{ bgcolor: 'primary.main', color: 'white', px: 3, py: 1, width: 'fit-content', boxShadow: '5px 5px 0 black', my: 3 }}>
        Interests
      </Typography>
        
        <Box sx={ aboutMeStyling }>
          <Typography variant='body1' sx={{ mb: 1 }}>
            When I'm away from the computer, I like to spend my time watercolor painting and graphite sketching 👩🏻‍🎨, with my favorite thing to draw at the moment being birds.
          </Typography>
          <Typography variant='body1' sx={{ mb: 1 }}>
            I also love to spend time in the kitchen baking breads 🍞 and cookies, and trying new recipes (have any favorites you'd like to share? 👀) inspired by the places I've travelled.
          </Typography>
        </Box>
      </Box>
      <Skills />
    </Box>
  )
}

export default About
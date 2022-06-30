import Skills from './Skills'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { flexCenterCol } from './styles/styles'

// Styling for elements: 0 = Cards, 1 = Paragraphs, 2 = Headlines
const aboutMeStyling = [
  // 0 - Cards
  {
    textAlign: 'left',
    width: { xs: '90%', md: '65%'},
    maxWidth: '1500px',
    borderRadius: 3,
    border: '1px dotted',
    borderColor: 'primary.contrastText',
    px: 2,
    py: 3,
    color: 'primary.contrastText',
    bgcolor: 'background.paper'
  },
  // 1 - Paragraphs
  {
    mb: 1,
    textIndent: '25px',
  },
  // 2 - Headlines
  {
    bgcolor: 'primary.main',
    color: 'white',
    px: 3,
    py: 1,
    width: 'fit-content',
    borderRadius: 1,
    my: 3
  }
]

const About = () => {
  return(
    <Box id="about" sx={{ width: '100%', backgroundColor: 'background.default', ...flexCenterCol }}>
      
      {/* About Me */}
      {/* Headline */}
      <Typography variant="h4" sx={ aboutMeStyling[2] }>
        About Me
      </Typography>

      {/* Body */}
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mb: 6 }}>

        {/* About Me */}
        <Box sx={ aboutMeStyling[0] }>
          <Typography variant='h6' sx={{ mb: 1, color: 'primary.contrastText', textAlign: 'center' }}>
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
        {/* Headline */}
        <Typography variant="h4" sx={ aboutMeStyling[2] }>
        Interests
        </Typography>
        
        {/* Body */}
        <Box sx={ aboutMeStyling[0] }>
          <Typography variant='body1' sx={ aboutMeStyling[1] }>
            When I'm away from the computer, I like to spend my time watercolor painting and graphite sketching 👩🏻‍🎨, with my favorite thing to draw at the moment being birds.
          </Typography>
          <Typography variant='body1' sx={ aboutMeStyling[1] }>
            I also love to spend time in the kitchen baking breads 🍞 and cookies, and trying new recipes (have any favorites you'd like to share? 👀) inspired by the places I've travelled.
          </Typography>
        </Box>
      </Box>

      {/* Skills */}
      <Skills />

    </Box>
  )
}

export default About
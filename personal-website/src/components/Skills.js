import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Skill Logos
import jsLogo from '../assets/skills/js.png'
import reactLogo from '../assets/skills/react.png'
import nodejsLogo from '../assets/skills/nodejs.png'
import html5Logo from '../assets/skills/html-5.png'
import css3Logo from '../assets/skills/css-3.png'
import sassLogo from '../assets/skills/sass.png'
import gitLogo from '../assets/skills/git.png'
import githubLogo from '../assets/skills/github.png'
import pythonLogo from '../assets/skills/python.png'
import mongodbLogo from '../assets/skills/mongodb.png'

const Skills = () => {

  const logos = [
    { src: pythonLogo, name: 'Python' },
    { src: jsLogo, name: 'JavaScript' },
    { src: reactLogo, name: 'React' },
    { src: nodejsLogo, name: 'NodeJS' },
    { src: html5Logo, name: 'HTML 5' },
    { src: css3Logo, name: 'CSS 3' },
    { src: sassLogo, name: 'SASS' },
    { src: mongodbLogo, name: 'MongoDB' },
    { src: gitLogo, name: 'Git' },
    { src: githubLogo, name: 'GitHub' },
  ]

  return(
    <Box sx={{ boxShadow: 5, borderRadius: 10, p: 5 }}>
      <Typography variant="h6" sx={{ textAlign: 'center', pb: 3 }}>
          Skills and Technologies
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {logos.map(logo => {
          return (  
            <Box 
              key={logo.name}
              sx={{ position: 'relative', display: 'flex',
              justifyContent: 'center', alignItems: 'center',
              maxWidth: { xs: 75, md: 100 },
              borderRadius: 2, px: 2, py: 1, m: 1 }}>
              <Box
                component='img'
                src={logo.src}
                alt={`${logo.name} icon`}
                sx={{ width: '100%' }} />
              <Typography
                variant='caption'
                className={'skills'}
                sx={{ opacity: '0%', position: 'absolute',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '100%', height: '100%', borderRadius: 2 }}>
                {logo.name}
              </Typography>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Skills
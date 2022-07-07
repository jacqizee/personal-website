import { useState } from 'react'
import { experienceItems } from './ExperienceItems'

// Styling
import { sectionStyling, headlineStyling, cardStyling } from '../styles/styles'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

const Experience = () => {

  const [ currentTab, setCurrentTab ] = useState(0)

  const handleTabChange = (e) => {
    setCurrentTab(parseInt(e.target.id))
  }

  const TabPanel = (props) => {
    const { children, value, index } = props
    return (
      <div hidden={ value !== index }>
        {value === index && (
          <Box sx={{ my: 1, mx: 3 }}>
            {children}
          </Box>
        )}
      </div>
    )
  }

  return(
    <Box id='experience' sx={{ ...sectionStyling }}>

      {/* Headline */}
      <Typography variant="h4" sx={ headlineStyling }>
        Experience
      </Typography>

      <Box color='primary' sx={{ ...cardStyling, display: 'flex', width: { xs: '90%', md: '80%' } }}>
        <Tabs
          orientation="vertical"
          value={currentTab}
          variant="scrollable"
          onClick={handleTabChange}
          sx={{ borderRight: 1, borderColor: 'divider', width: 'fit-content' }}
        >
          { experienceItems.map((item, index) => <Tab label={item.title} id={index} key={index} />)}
        </Tabs>
        <Box sx={{ width: '75%' }}>
          { experienceItems.map((item, index) => {
            return (
              <TabPanel value={currentTab} index={index} key={index}>
                <Typography variant='subtitle1' sx={{ color: 'primary.dark', display: 'inline' }}>{item.title}</Typography>
                <Typography variant='subtitle1' sx={{ display: 'inline', color: 'primary.light' }}> @ {item.company}</Typography>
                <Typography variant='subtitle2'>{item.dates}</Typography>
                {item.points.map((point, index) => (
                  <Box key={index} sx={{ mt: .5, ml: 2, display: 'flex' }}>
                    <Box sx={{ mr: 3 }}>▹</Box>
                    <Typography variant='body1'>{point}</Typography>
                  </Box>
                ))}
              </TabPanel>
            )
          })}
        </Box>
        
      </Box>

    </Box>
  )
}

export default Experience
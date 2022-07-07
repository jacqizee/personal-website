import { useState } from 'react'
import { experienceItems } from './ExperienceItems'

// Styling
import { sectionStyling, cardStyling } from '../styles/styles'

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
          <Box sx={{ my: { xs: 0, md: 1 }, ml: { xs: 2, md: 3} }}>
            {children}
          </Box>
        )}
      </div>
    )
  }

  return(
    <Box id='experience' sx={{ ...sectionStyling }}>

      {/* Headline */}
      <Box sx={{ ml: { xs: '15%', md: '25%'}, textAlign: 'left', width: '100%', mb: 1 }}>
        <Typography variant="h4" sx={{ color: 'primary.light', fontWeight: 'light' }}>
          Experience
        </Typography>
      </Box>

      <Box color='primary' sx={{ ...cardStyling, display: 'flex', width: { xs: '90%', md: '80%' } }}>

        {/* Tab Menu */}
        <Tabs
          orientation="vertical"
          value={currentTab}
          variant="scrollable"
          onClick={handleTabChange}
          textColor='secondary'
          sx={{ borderRight: 1, borderColor: 'divider', width: 'fit-content', color: 'primary.dark' }}
        >
          { experienceItems.map((item, index) => <Tab label={item.title} id={index} key={index} />)}
        </Tabs>

        {/* Tab Content */}
        <Box sx={{ width: { xs: '100%', md: '75%'} }}>
          { experienceItems.map((item, index) => {
            return (
              <TabPanel value={currentTab} index={index} key={index}>
                <Typography variant='subtitle1' sx={{ color: 'primary.main', display: 'inline', lineHeight: 1}}>{item.title} @ {item.company}</Typography>
                <Typography variant='subtitle2' sx={{ mt: .75 }}>{item.dates}</Typography>
                {item.points.map((point, index) => (
                  <Box key={index} sx={{ mt: .5, ml: { xs: 0, md: 2}, display: 'flex' }}>
                    <Box sx={{ mr: { xs: 1.5, md: 3}, mt: .25 }}>▹</Box>
                    <Typography variant='body1' sx={{ lineHeight: { xs: 1.35, md: 1.5 } }}>{point}</Typography>
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
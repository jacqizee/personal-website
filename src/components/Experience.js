import { useState } from 'react'

// Styling
import { sectionStyling, headlineStyling, cardStyling } from './styles/styles'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

const experienceItems = [
  {
    title: 'PPC Account Manager',
    company: 'Search Laboratory',
    dates: 'Apr 2021 -  Mar 2022',
    points: ''
  },
  {
    title: 'PPC Executive',
    company: 'Search Laboratory',
    dates: 'Oct 2019 - Apr 2021',
    points: ''
  },
  {
    title: 'Freelance Writer',
    company: 'Beauty News NYC',
    dates: 'Jun 2020 - Present',
    points: ''
  },
  {
    title: 'Laboratory Assistant',
    company: 'State University of NY at Geneseo',
    dates: 'Jan 2019 - May 2019',
    points: ''
  },
  {
    title: 'Research Assistant',
    company: 'State University of NY at Geneseo',
    dates: 'Aug 2018 - May 2019',
    points: ''
  },
]

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
          <Box sx={{ height: '100%', my: 1, mx: 3 }}>
            <Typography>
              {children}
            </Typography>
          </Box>
        )}
      </div>
    )
  }

  return(
    <Box id='experience' sx={{ ...sectionStyling, bgcolor: 'background.defaultDarker' }}>

      {/* Headline */}
      <Typography variant="h4" sx={ headlineStyling }>
        Experience
      </Typography>

      <Box color='primary' sx={{ ...cardStyling, display: 'flex', width: '75vw' }}>
        <Tabs
          orientation="vertical"
          value={currentTab}
          variant="scrollable"
          onClick={handleTabChange}
          sx={{ borderRight: 1, borderColor: 'divider', width: '25%' }}
        >
          <Tab label="PPC Account Manager" id='0' />
          <Tab label="PPC Executive" id='1' />
          <Tab label="Freelance Writer" id='2' />
          <Tab label="Laboratory Assistant" id='3' />
          <Tab label="Research Assistant" id='4' />
        </Tabs>
        <Box sx={{ flexGrow: 1 }}>
          { experienceItems.map((item, index) => {
            return (
              <TabPanel value={currentTab} index={index}>
                <Typography variant='h6'>{item.title}</Typography>
                <Typography variant='subtitle1'>{item.dates}</Typography>
                
              </TabPanel>
            )
          })}
        </Box>
        
      </Box>

    </Box>
  )
}

export default Experience
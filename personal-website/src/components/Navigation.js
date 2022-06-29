import { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import ListItemText from '@mui/material/ListItemText'
import Switch from '@mui/material/Switch'

// Icons
import MenuIcon from '@mui/icons-material/Menu'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'

const Navigation = ({ mode, setMode}) => {

  const menu = ['about', 'experience', 'portfolio', 'contact']
  const [ drawerOpen, setDrawerOpen ] = useState(false)
  const [ switchStatus, setSwitchStatus ] = useState(false)

  const toggleDrawer = (open) => (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return
    }
    setDrawerOpen(open)
  }

  useEffect(() => {
    if (window.localStorage.getItem('jacquelinezhou')) {
      setMode(window.localStorage.getItem('jacquelinezhou'))
    }
    const loadSwitch = () => {
      mode === 'light' ? setSwitchStatus(false) : setSwitchStatus(true)
    }
    loadSwitch()
  }, [mode, setMode])

  const handleModeChange = (e) => {
    let newMode
    e.target.value === 'light' ? newMode = 'dark' : newMode = 'light'

    setMode(newMode)
    window.localStorage.setItem('jacquelinezhou', newMode)

  }

  const trigger = useScrollTrigger()

  return (
    <Box sx={{ flexGrow: 1, maxHeight: '10vh' }}>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar color='transparent' sx={{ boxShadow: 0, bgcolor: 'secondary' }} >
          <Toolbar>
            {/* Logo/H1 */}
            <Typography variant='h6' component={HashLink} to={'#hero'} sx={{ flexGrow: 1 }}>
              JZ
            </Typography>

            {/* Row Menu on md or larger */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
              {menu.map(item => <HashLink smooth to={`#${item}`} key={item}><Button sx={{ textTransform: 'none' }}>{item}</Button></HashLink>)}

              {/* Light/Dark Mode */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Switch 
                  checked={switchStatus}
                  onChange={handleModeChange}
                  value={mode}
                  icon={<LightModeRoundedIcon sx={{ bgcolor: 'secondary.contrastText', borderRadius: 5, p: .5 }} />}
                  checkedIcon={<DarkModeRoundedIcon sx={{ bgcolor: 'secondary.contrastText', borderRadius: 5, p: .5 }} />}
                />
              </Box>
            </Box>  

            {/* Drawer Menu on XS screens */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }}}>

              {/* Hamburger Icon */}
              <Button onClick={toggleDrawer(true)}>
                <MenuIcon />
              </Button>
            
              {/* Drawer */}
              <Drawer
                anchor='right'
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box sx={{ width: 350 }}>
                  <List color='primary' sx={{ textDecoration: 'none' }}>
                    {menu.map(item => {
                      return (
                        <ListItem key={item}>
                          <HashLink smooth to={`#${item}`}>
                            <ListItemButton onClick={toggleDrawer(false)}>
                              <ListItemText primary={item}/>
                            </ListItemButton>
                          </HashLink>
                        </ListItem>
                      )
                    })}
                    <Switch 
                      checked={switchStatus}
                      onChange={handleModeChange}
                      value={mode}
                      icon={<LightModeRoundedIcon sx={{ bgcolor: 'secondary.contrastText', borderRadius: 5, p: .5 }} />}
                      checkedIcon={<DarkModeRoundedIcon sx={{ bgcolor: 'secondary.contrastText', borderRadius: 5, p: .5 }} />}
                      sx={{ ml: 2.5, mt: .85 }}
                    />
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>
    </Box>
  )
}

export default Navigation

import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'

const Navigation = (props) => {

  const menu = ['about', 'experience', 'portfolio', 'contact']
  const [ drawerOpen, setDrawerOpen ] = useState(false)

  const toggleDrawer = (open) => (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return
    }
    setDrawerOpen(open)
  }

  const trigger = useScrollTrigger()

  return (
    <Box sx={{ flexGrow: 1, maxHeight: '10vh' }}>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar color='transparent' sx={{ boxShadow: 1, backgroundColor: 'white' }} >
          <Toolbar>
            {/* Logo/H1 */}
            <Typography variant='h6' component={Link} href={'#hero'} sx={{ flexGrow: 1 }}>
              JZ
            </Typography>

            {/* Row Menu on md or larger */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
              {menu.map(item => <Button key={item} href={`#${item}`}>{item}</Button>)}
            </Box>  

            {/* Drawer Menu on XS screens */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }}}>

              {/* Hamburger Icon */}
              <Button onClick={toggleDrawer('right', true)}>
                <MenuIcon />
              </Button>
            
              {/* Drawer */}
              <Drawer
                anchor='right'
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box sx={{ width: 350 }}>
                  <List component={Link}>
                    {menu.map(item => {
                      return (
                        <ListItem key={item}>
                          <ListItemButton onClick={toggleDrawer(false)} href={`#${item}`}>
                            <ListItemText primary={item}/>
                          </ListItemButton>
                        </ListItem>
                      )
                    })}
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

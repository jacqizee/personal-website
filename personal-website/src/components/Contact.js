import { useState } from 'react'

import { flexCenterCol } from './styles/styles' 

// MUI
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import emailjs from '@emailjs/browser'

// Icons
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import MarkEmailReadRounded from '@mui/icons-material/MarkEmailReadRounded'

const Contact = () => {

  const [ contactForm, setContactForm ] = useState({})
  const [ emailSubmitted, setEmailSubmitted ] = useState(false)
  const [ emailError, setEmailError ] = useState(false)

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await emailjs.send('service_s6bp90d', 'contact_form', contactForm, 'FR1SXrNlcG1UxTD3g')
      setEmailSubmitted(true)

      setContactForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

    } catch (error) {
      console.log(error)
      setEmailError(true)
    }
  }


  return(
    <Box id="contact" sx={{ ...flexCenterCol, pb: 7, bgcolor: 'background.default' }}>
      <Box sx={{ position: 'relative', right: { md: '20%', lg: '25%' }, top: 55, display: 'flex' }}>
        <Box sx={{ bgcolor: 'primary.main', color: 'white', px: 5, py: 3 }}>
          <Typography variant={'h4'}>
            Get in Touch ✉️
          </Typography>
          <Typography variant="body1" sx={{ display: { xs: 'none', md: 'inline' }}} >
            Interested in chatting? My inbox is open for you!
          </Typography>
        </Box>
      </Box>
      
      <Paper component='form' onSubmit={handleSubmit} sx={{ width: '75%', m: 2, pt: 4, textAlign: 'center' }}>
        <Grid container spacing={1} sx={{ width: '100%', p: 5 }}>
          <Grid item xs={12}>
            <Typography variant='body1' sx={{ mb: 2 }}>
              Prefer to contact me directly? Reach me at jacqizee.dev@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id='name' label='Name' name="name" variant='outlined' value={contactForm.name} onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField type='email' id='email' label='Email' name="email" variant='outlined' value={contactForm.email} onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField id='subject' label='Subject' name='subject' variant='outlined' value={contactForm.subject} onChange={handleChange} required fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField id='message' label='Message' name='message' variant='outlined' value={contactForm.message} onChange={handleChange} required multiline rows={3} fullWidth />
          </Grid>
          <Grid item xs={12}>
            { !emailSubmitted ?
              <Button type='submit' sx={{ mt: 1, mb: -1 }}><SendRoundedIcon fontSize='small' sx={{ mr: .5 }} />Submit</Button> :
              ! emailError ? <Button type='submit' disabled><MarkEmailReadRounded fontSize='small' sx={{ mr: .5 }} />Sent!</Button> :
              <Button type='submit'><SendRoundedIcon fontSize='small' sx={{ mr: .5 }} />Error</Button>
            }
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default Contact
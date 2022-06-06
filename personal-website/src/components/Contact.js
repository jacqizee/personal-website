import { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import emailjs from '@emailjs/browser'

// Icons
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded'

const Contact = () => {

  const [ contactForm, setContactForm ] = useState({})

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(contactForm)

    try {
      const response = emailjs.send('service_s6bp90d', 'contact_form', contactForm, 'FR1SXrNlcG1UxTD3g')
      console.log('Email Sent!', response)

      setContactForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

    } catch (error) {
      console.log(error)
    }
  }


  return(
    <Box id="contact" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ position: 'relative', right: '35%', top: 45, display: 'flex' }}>
        <Box sx={{ backgroundColor: 'red', px: 5, py: 2 }}>
          <Typography variant="h5">
            Contact
          </Typography>
        </Box>
        <IconButton fontSize='small' variant='outlined' sx={{ height: '100%' }}><LocalPhoneRoundedIcon /></IconButton>
      </Box>
      
      <Paper component='form' onSubmit={handleSubmit} sx={{ width: '75%', m: 2, textAlign: 'center' }}>
        <Typography>Get in Touch</Typography>
        <Grid container spacing={1} sx={{ width: '100%', p: 5 }}>
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
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Button type='submit'><SendRoundedIcon />Send</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default Contact
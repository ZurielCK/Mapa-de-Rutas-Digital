import { Container, Box, ThemeProvider } from '@mui/material';
import { blue } from '@mui/material/colors';
import backgroundImage from '../../resources/images/kkdvk.png';
import React from 'react'

const LoginScreen = () => {

  return (
   <Container maxWidth='xl' disableGutters sx={{bgcolor:'red'}} >
      <Box sx={{
        width:"100%",
        height:"100vh",
        display: 'flex',
        flexDirection:'row', 
        justifyContent: 'center',
        alignContent: 'center',
        bgcolor: 'blue',
        color:'black'  
        }}>
          <Box sx={{
            width:'50%',  
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}>Imagen</Box>

          <Box sx={{
            width:'50%',
            bgcolor:'background.default'
          }}>Login</Box>

        </Box>



   </Container>
  )
}


export default LoginScreen; 
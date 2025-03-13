import { Container, Box, Typography, TextField, Button } from '@mui/material';
import backgroundImage from '../../resources/images/Logo1x1.jpg';
import React from 'react';
import { red } from '@mui/material/colors';

const LoginScreen = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '50%',
            height: '100vh', 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <Box
          sx={{
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '65%',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Typography variant="h4">
              Iniciar Sesión
            </Typography>
            <Typography variant='body1' color='primary' sx={{marginBottom: 4, marginTop: -1}}>
              Ingresar con tu cuenta Llave Mx
            </Typography>
            
            <TextField 
              
              variant="standard" 
              placeholder='Ingresa tu usuario'
              fullWidth
              sx={{
                bgcolor: "secondary.main",
                pt: 1,
                opacity: 0.6,
                borderRadius: 1,
              }}
              slotProps={{
                input: {
                  sx: { 
                    color: "#7C4A36",
                    pb: 1,
                    pl: 1
                  }, 
                },
              }}
            />
            <TextField 
              type="password" 
              variant="standard" 
              placeholder='Ingresa tu contraseña'
              fullWidth
              sx={{
                bgcolor: "secondary.main",
                pt: 1,
                opacity: 0.6,
                borderRadius: 1,
              }}
              slotProps={{
                input: {
                  sx: { 
                    color: "#7C4A36" ,
                    pb: 1,
                    pl: 1 
                  },
                  
                },
              }}
            />

            <Button variant="contained" color="primary" fullWidth>
              Iniciar Sesión
            </Button>

            <Typography variant="body2" color="secondary">
              ¿Olvidaste tu contraseña?
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginScreen;

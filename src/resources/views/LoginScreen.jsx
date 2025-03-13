import { Container, Box, Typography, TextField, Button } from '@mui/material';
import backgroundImage from '../../resources/images/kkdvk.png';
import React from 'react';

const LoginScreen = () => {
  return (
    <Container maxWidth="xl" disableGutters sx={{ bgcolor: 'red' }}>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'blue',
          color: 'black',
        }}
      >
        {/* Box con imagen de fondo */}
        <Box
          sx={{
            width: '50%',
            height: '100vh', // Ocupa toda la altura
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Box del formulario de login */}
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
              bgcolor: 'background.default',
              
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography variant="h4">
              Inicio de Sesión
            </Typography>

            {/* Campos del formulario */}
            <TextField 
              label="Correo Electrónico" 
              variant="outlined" 
              fullWidth 
            />
            <TextField 
              label="Contraseña" 
              type="password" 
              variant="outlined" 
              fullWidth 
            />

            {/* Botón de inicio de sesión */}
            <Button variant="contained" color="primary" fullWidth>
              Iniciar Sesión
            </Button>

            {/* Enlace para recuperar contraseña */}
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

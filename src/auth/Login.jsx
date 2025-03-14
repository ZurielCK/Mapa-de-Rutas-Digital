import { Container, Box, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = () => {
    console.log('Usuario:', credentials.username);
    console.log('Contraseña:', credentials.password);

    if (credentials.username) {
       navigate('/digitalMap') 
    }
  };

  return (
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
        <Typography variant="h4">Iniciar Sesión</Typography>
        <Typography variant="body1" color="primary" sx={{ marginBottom: 4, marginTop: -1 }}>
          Ingresar con tu cuenta Llave Mx
        </Typography>

        <TextField
          name="username"
          value={credentials.username}
          onChange={handleChange}
          required
          variant="standard"
          placeholder="Ingresa tu usuario"
          fullWidth
          sx={{
            bgcolor: "secondary.main",
            pt: 1,
            opacity: 0.6,
            borderRadius: 1,
          }}
          slotProps={{
            input: {
              sx: { color: "#7C4A36", pb: 1, pl: 1 },
            },
          }}
        />

        <TextField
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          required
          variant="standard"
          placeholder="Ingresa tu contraseña"
          fullWidth
          sx={{
            bgcolor: "secondary.main",
            pt: 1,
            opacity: 0.6,
            borderRadius: 1,
          }}
          slotProps={{
            input: {
              sx: { color: "#7C4A36", pb: 1, pl: 1 },
            },
          }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Iniciar Sesión
        </Button>

        <Typography
          variant="body2"
          color="secondary"
          sx={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => navigate('/recuperar-contraseña')}
        >
          ¿Olvidaste tu contraseña?
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;

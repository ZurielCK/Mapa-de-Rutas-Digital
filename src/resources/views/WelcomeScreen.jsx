import { Box, Typography, Button, Container } from "@mui/material";
import React from "react";
import Navbar from '../../components/Navbar.jsx'
import { Link } from "react-router-dom";
import logo from "../../resources/images/Logo.jpg"; // Asegúrate de tener la ruta correcta

const WelcomeScreen = () => {
  return (
    <Container maxWidth='xl' disableGutters>
      <Box>
        <Navbar></Navbar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "86vh",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 4,
              pl: 10,
            }}
          >
            <Typography variant="h1">MAPA DE RUTAS</Typography>
            <Typography variant="h6">
              Inserte texto aquí de lo que va a tratar la app de mapas
            </Typography>
          </Box>

          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <Box
              sx={{
                width: "60%",
                height: '60%',
                display:'flex',
                justifyContent: 'center',
                alignItems:'end',
                borderRadius:3,
                backgroundImage: `url(${logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backgroundBlendMode: "overlay", 
              }}
            >
              
            <Button
              component={Link}
              to="/login"
              variant="contained"
              color="primary"
              sx={{
                width: "50%",
                borderRadius:3,
                mb: 5,
                fontSize: "1rem",
              }}
            >
              Iniciar Sesión
            </Button>
            </Box>

          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default WelcomeScreen;

import {
  Box,
  InputAdornment,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = () => {
    console.log("Usuario:", credentials.username);
    console.log("Contraseña:", credentials.password);

    if (credentials.username) {
      navigate("/digitalMap");
    }
  };

  return (
    <Box
      sx={{
        width: {lg:"50%", md: '50%', sm: '50%', xs:'100%'},
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      
      }}
    >
      <Box
        sx={{
          width: {lg:"65%"},
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2
        }}
      >
        <Typography variant="h4" mb={7}>
          Iniciar Sesión
        </Typography>

        <Typography
          fontWeight={"bold"}
          sx={{
            mb: -2,
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
            color: "#773357",
            alignSelf: "start",
          }}
        >
          USUARIO
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

        <Typography
          fontWeight={"bold"}
          sx={{
            mb: -2,
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
            color: "#773357",
            alignSelf: "start",
          }}
        >
          CONTRASEÑA
        </Typography>
        <TextField
          name="password"
          type={showPassword ? "text" : "password"}
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
              sx: { color: "#7C4A36", pb: 1, pl: 1, pr: 2 },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge="end"
                    sx={{ color: "#7C4A36", opacity: 1 }}
                  >
                    {showPassword ? (
                      <VisibilityOffOutlined />
                    ) : (
                      <VisibilityOutlined />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Iniciar Sesión
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: 'center',
            flexDirection: {lg:'row', md:'row', sm:'column', xs:'column'},
            gap: {lg:8, xs: 2},
          }}
        >
          <Typography variant="body2" color="secondary">
            <Link
              to="/welcome"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </Typography>
          <Typography variant="body2" color="secondary">
            <Link
              to="/welcome"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              ¿No tienes cuenta?
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

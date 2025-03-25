import { Box, Typography, Divider, Button, Collapse } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import OptionWays from "./OptionWays.jsx";
import React, { useState } from "react";
import CustomTextField from "./CustomTextField.jsx";

const Seeker = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [origin, setOrigin] = useState({ name: '', lat: null, lon: null });
  const [destination, setDestination] = useState({ name: '', lat: null, lon: null });


  const handleAccept = () => {
    console.log("Origen:", origin);
    console.log("Destino:", destination);

    if (origin.lat && destination.lat) {
      setShowOptions(true);
    } else {
      alert("Por favor selecciona una ubicación válida para origen y destino.");
    }
  };

  return (
    <Box
      sx={{
        left: "1%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: 0,
        width: { xs: "98%", sm: "50%", md: "40%", lg:'25%' },
        position: "relative",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "secondary.second",
          height: showOptions ? "6vh" : "auto",
          borderRadius: 2,
          gap: 1.5,
          p: 2,
          transition: "height 0.5s ease-in-out",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            alignSelf: "center",
            mt: 1,
            fontWeight: "bold",
            fontSize: { xs: ".8rem", md: "1.2rem" },
          }}
        >
          ¿A dónde quieres ir hoy?
        </Typography>

        <Divider
          orientation="horizontal"
          variant="middle"
          sx={{
            borderBottomWidth: "2px",
            borderColor: "primary.main",
            opacity: 0.8,
          }}
        />

        <CustomTextField
          label="¿En dónde te encuentras?"
          name="origin"
          onSelectPosition={(coords, name) => {
            setOrigin({ name, lat: coords[0], lon: coords[1] });
          }}
        />
        <CustomTextField
          label="¿A dónde quieres llegar?"
          name="destination"
          onSelectPosition={(coords, name) => {
            setDestination({ name, lat: coords[0], lon: coords[1] });
          }}
        />

        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "end",
            justifyContent: "flex-end",
            
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "45%", fontSize: { xs: ".8rem", md: ".9rem" } }}
            onClick={handleAccept}
          >
            Buscar
          </Button>
        </Box>
      </Box>

      <Collapse in={showOptions} timeout={500}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={() => setShowOptions(false)}
            sx={{
              mt: 1,
              fontSize: 20,
              bgcolor: "primary.main",
              color: "white",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "secondary.second",
            height: "60vh",
            borderRadius: 2,
            mt: 1,
            p: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              pt: 2,
              mb: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: ".8rem", md: "1.2rem" },
              }}
            >
              Rutas Disponibles
            </Typography>
          </Box>

          <Divider
            orientation="horizontal"
            variant="middle"
            sx={{
              width: "90%",
              borderBottomWidth: "2px",
              borderColor: "primary.main",
              opacity: 0.8,
              mb: 2,
            }}
          />

          <Box sx={{ width: "90%" }}>
            <OptionWays />
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Seeker;

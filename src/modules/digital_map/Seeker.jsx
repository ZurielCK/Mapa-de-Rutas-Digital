import {
  Box,
  Typography,
  Divider,
  Button,
  Collapse,
} from "@mui/material";
import OptionWays from "./OptionWays.jsx";
import React, { useState } from "react";
import CustomTextField from "./CustomTextField.jsx";



const Seeker = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleAccept = () => {
    setShowOptions(true);
  };

  return (
    <Box
      sx={{
        bottom: "2%",
        left: "1%",
        display: "flex",
        flexDirection: "column",
        justifyContent:'start',
        gap: 1,
        width: { xs: "100%,", md: "33%" },
        height: '85%',
        position: "absolute",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "secondary.second",
          height: showOptions ? "8vh" : "32vh",
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

        <CustomTextField label="¿En dónde te encuentras?" name="origin" />
        <CustomTextField label="¿A dónde quieres llegar?" name="destination" />

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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "secondary.second",
            height: "60vh",
            borderRadius: 2,
            mt: 2,
            p: 2,
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

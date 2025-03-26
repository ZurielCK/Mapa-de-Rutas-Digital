import { Container, Box } from "@mui/material";
import MapView from "../../modules/digital_map/MapView";
import Seeker from "../../modules/digital_map/Seeker";
import Navbar from "../../components/Navbar";
import { MapProvider } from "../../context/MapContext"; 
import React from "react";

const DigitalMapScreen = () => {
  return (
    <MapProvider>
      <Container maxWidth="xl" disableGutters>
        <Box sx={{ position: "relative", width: "100%", height: "100vh" }}>
          <MapView />
          <Navbar />
          <Seeker />
        </Box>
      </Container>
    </MapProvider>
  );
};

export default DigitalMapScreen;

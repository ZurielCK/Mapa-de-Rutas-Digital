import { Container, Box } from "@mui/material";
import Seeker from "../../modules/digital_map/Seeker";
import MapView from "../../modules/digital_map/MapView";
import Navbar from "../../components/Navbar";
import React from "react";

const DigitalMapScreen = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          position: "relative", 
          width: "100%",
          height: "100vh", 
        }}
      >      
        <MapView />
        <Navbar/>
        <Seeker /> 
      </Box>
    </Container>
  );
};

export default DigitalMapScreen;
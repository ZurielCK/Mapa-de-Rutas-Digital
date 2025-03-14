import { Box } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const position = [18.9186, -99.2343];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* Mapa */}
      <MapContainer
        center={position}
        zoom={17}
        style={{ height: "100%", width: "100%" }}
        className="leaflet-map"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Ubicación seleccionada: <br /> Ciudad de México.
          </Popup>
        </Marker>
      </MapContainer>

      <Box
        sx={{
          position: "absolute",
          bottom: "10%", 
          left: "1%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            bgcolor: "red",
            width: "60vh",
            height: "30vh",
          }}
        ></Box>

        <Box
          sx={{
            bgcolor: "blue",
            width: "60vh",
            height: "30vh",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default MapView;
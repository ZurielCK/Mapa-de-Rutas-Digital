import { Box } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const position = [18.9186, -99.2343];

  return (
    <Box
      sx={{
        position: "absolute", 
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
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
    </Box>
  );
};

export default MapView;
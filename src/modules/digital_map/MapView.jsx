import { Box, iconButtonClasses } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import React from "react";
import L from 'leaflet'
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const position = [18.9186, -99.2343];
  const markerIcon = new L.Icon({
    iconUrl: require('../../resources/images/destination.png'),
    iconSize: [40,40],
  })
  
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
        zoomControl={false} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker icon={markerIcon} position={position}>
          <Popup>
            Ubicación seleccionada: <br /> Ciudad de México.
          </Popup>
        </Marker>

        <ZoomControl position="bottomright" />
      </MapContainer>
    </Box>
  );
};

export default MapView;

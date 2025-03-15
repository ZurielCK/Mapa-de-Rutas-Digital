import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React from "react";

const CustomTextField = ({ label, name }) => (
  <Box 
    sx={{ 
      display: "flex", 
      alignItems: "center", 
      width: "100%", 
      alignSelf: "end",
    }}
  >
    <LocationOnOutlinedIcon sx={{ color: "primary.main", mr: 1, fontSize: 28 }} />
    <TextField
      label={label}
      name={name}
      required
      variant="outlined"
      fullWidth
      sx={{
        bgcolor: "secondary.main",
        opacity: 0.6,
        mt:1,
        borderRadius: 1,
        "& .MuiInputBase-root": { height: "40px" },
      }}
      slotProps={{
        input: { sx: { color: "#7C4A36", pl: 1 } },
        inputLabel: { sx: { fontSize: "0.875rem", mt: -0.5, pl: 1 } },
      }}
    />
  </Box>
);

const Seeker = () => {
  return (
    <Box sx={{ bottom: "5%", left: "1%", display: "flex", flexDirection: "column", gap: 1, position: "absolute", zIndex: 1000 }}>
      <Box sx={{ display: "flex", flexDirection: "column", bgcolor: "secondary.second",  height: "35vh", borderRadius: 2, gap: 1.5, p: 2 }}>
        <Typography variant="h6" sx={{ alignSelf: "center", mt: 1, fontWeight: "bold" }}>
          ¿A dónde quieres ir hoy?
        </Typography>

        <Divider orientation="horizontal" variant="middle" sx={{ borderBottomWidth: "2px", borderColor: "primary.main", opacity: 0.8 }} />

        <CustomTextField label="¿En dónde te encuentras?" name="origin" />
        <CustomTextField label="¿A dónde quieres llegar?" name="destination" />

        <Button variant="contained" color="primary" sx={{ width: "40%", alignSelf: "end",}}>
          Aceptar
        </Button>
      </Box>

      <Box sx={{ bgcolor: "secondary.second", width: "70vh", height: "45vh", borderRadius: 2 }} />
    </Box>
  );
};

export default Seeker;

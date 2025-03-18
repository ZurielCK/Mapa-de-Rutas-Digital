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
    <LocationOnOutlinedIcon
      sx={{ color: "primary.main", mr: 1, fontSize: 28 }}
    />
    <TextField
      label={label}
      name={name}
      required
      variant="outlined"
      fullWidth
      sx={{
        bgcolor: "secondary.main",
        opacity: 0.6,
        mt: 1,
        borderRadius: 1,
        "& .MuiInputBase-root": { height: "40px" },
      }}
      slotProps={{
        input: { sx: { color: "#7C4A36", pl: 1 } },
        inputLabel: { sx: {fontSize:{xs:'.7rem', md: '.8rem'}, mt: -0.5, pl: 1 } },
      }}
    />
  </Box>
);

const Seeker = () => {
  return (
    <Box
      sx={{
        bottom: "2%",
        left: "1%",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width: {xs:'100%,', md:'33%'},
        position: "absolute",
        bgcolor: 'red',
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "secondary.second",
          height: "36vh",
          borderRadius: 2,
          gap: 1.5,
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ alignSelf: "center", mt: 1, fontWeight: "bold", fontSize:{xs:'.8rem', md:'1.2rem'} }}
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

        <Box sx={{ width: "100%", height:'100%',
          display:'flex', alignItems:'end', justifyContent:'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{width:'45%', fontSize:{xs:'.8rem', md:'.9rem'}}}
          
        >
          Aceptar
        </Button>
        </Box>
      
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection:'colum',
          bgcolor: "secondary.second",
          height: "45vh",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ alignSelf: "center", mt: 1, fontWeight: "bold", fontSize:{xs:'.8rem', md:'1.2rem'} }}
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
      </Box>
      
    </Box>
  );
};

export default Seeker;

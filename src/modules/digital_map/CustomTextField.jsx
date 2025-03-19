import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box, TextField } from "@mui/material";


const CustomTextField = ({ label, name }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      width: "100%",
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
        inputLabel: {
          sx: { fontSize: { xs: ".7rem", md: ".8rem" }, mt: -0.5, pl: 1 },
        },
      }}
    />
  </Box>
);

export default CustomTextField;
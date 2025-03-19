import { Box, Divider, Typography } from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import React from "react";

const OptionWays = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        bgcolor: "secondary.main",
        opacity: 0.8,
        borderRadius: 1,
        p: 1,
        mt: 3,
      }}
    >
      <DirectionsBusIcon sx={{ fontSize: 50, mr:1 }} />

      <Divider
        orientation="vertical"
        flexItem
        variant="middle"
        sx={{
          borderRightWidth: "2px",
          borderColor: "primary.main",
          opacity: 0.8,
        }}
      />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Texto</Typography>
      </Box>
    </Box>
  );
};

export default OptionWays;

import { Box } from "@mui/material";
import React from "react";

const Seeker = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: '100%',
        height: '100vh',
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "start",
      }}
    >
      <Box
        sx={{
          bgcolor: "red",
          width: "30vh",
          height: "30vh",
        }}
      ></Box>
      <Box
        sx={{
          bgcolor: "blue",
          width: "30vh",
          height: "30vh",
        }}
      >
      </Box>
    </Box>
  );
};

export default Seeker;

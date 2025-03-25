import {
  Box,
  Divider,
  Typography,
  Collapse,
  IconButton,
} from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import React, { useState } from "react";

const OptionWays = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "secondary.light",
        opacity: 0.8,
        borderRadius: 1,
        p: 1,
        mt: 1,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <DirectionsBusIcon sx={{ fontSize: 40, mr: 1 }} />

        <Divider
          orientation="vertical"
          flexItem
          variant="middle"
          sx={{
            borderRightWidth: "2px",
            borderColor: "primary.main",
            opacity: 0.8,
            mr: 1,
          }}
        />

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Texto</Typography>
        </Box>

        <IconButton
          sx={{
            color: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
              color: "white",
            },
          }}
          onClick={() => setOpen(!open)}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>

      <Collapse in={open} timeout={300}>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          
          <Box sx={{
                p:1,
               }}>

                
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: 'center',
                bgcolor: "secondary.dark",
                borderTop: "2px solid ",  
                borderBottom: "2px solid ",
                borderColor: 'primary.main', 
                height: '50px',
                width: "100%", 
              }}
            >
              
            <IconButton sx={{
              mr: 2,
            }}>
              <VisibilityOffOutlinedIcon sx={{fontSize:'large',}}/>
            </IconButton>
              <Typography>Opción 1</Typography>
            </Box>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default OptionWays;

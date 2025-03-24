import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box, TextField, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";

const CustomTextField = ({ label, name, onSelectPosition }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }
  
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${query}&countrycodes=mx&viewbox=-99.5,19.2,-98.5,18.3&bounded=1`
        );
        if (!response.ok) throw new Error("Error en la petición");
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]); 
      }
    };
  
    fetchSuggestions();
  }, [query]);
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
      }}
    >
      <LocationOnOutlinedIcon
        sx={{ color: "primary.main", mr: 1, fontSize: 28 }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%", mt:1,}}>
        <TextField
          label={label}
          name={name}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          variant="outlined"
          fullWidth
          sx={{
            bgcolor: "secondary.main",
            opacity: 0.6,
            borderRadius: 1,
            "& .MuiInputBase-root": { height: "40px" },
          }}
          slotProps={{
            input: {
              sx: {
                fontSize: { xs: ".7rem", md: ".8rem" },
                color: "#7C4A36",
                pl: 1,
              },
            },
            inputLabel: {
              sx: { fontSize: { xs: ".7rem", md: ".8rem" }, mt: -0.5, pl: 1 },
            },
          }}
        />
        <List sx={{ maxHeight: 100, overflowY: "auto" }}>
          {suggestions.map((place) => (
            <ListItem
              button
              key={place.place_id}
              onClick={() => {
                onSelectPosition([
                  parseFloat(place.lat),
                  parseFloat(place.lon),
                ]);
                setQuery(place.display_name);
                setSuggestions([]);
              }}
            >
              <ListItemText
                primary={place.display_name}
                slotProps={{
                  primary: {
                    sx: {
                      fontSize: { xs: ".7rem", md: ".75rem" },
                      color: "#2E3B2B",
                    },
                  },
                }}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default CustomTextField;

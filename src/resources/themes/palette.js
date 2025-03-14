import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: { main: '#2E3B2B' },
        secondary: { main: '#CBCABE' },
        background: { default: '#CBCABE' }
    },
    typography: {
        fontFamily: "sans-serif", // Puedes cambiarla por otra fuente
        h1: {
            color: '#2E3B2B', // Títulos grandes
            fontWeight: 700,
        },
        h2: {
            color: '#2E3B2B',
            fontWeight: 600,
        },
        h3: {
            color: '#7C4A36',
            fontWeight: "bold",
        },
        h4: {
            color: '#7C4A36', 
            fontWeight: 530,
        },
        h5: {
            color: '#773357',
            fontWeight: 400,
        },
        h6: {
            color: '#773357',
            fontWeight: 400,
        },
        body1: {
            color: '#2E3B2B', // Texto principal
            fontSize: "1rem",
        },
        body2: {
            color: '#7C4A36',
            fontSize: "0.875rem",
        },
        subtitle1: {
            color: '#773357', // Para resaltar subtítulos
            fontSize: "1rem",
        },
        subtitle2: {
            color: '#773357',
            fontSize: "0.875rem",
        },
        button: {
            textTransform: "none", // Evita que los botones estén en mayúsculas
            fontWeight: "bold",
            color: "#773357"
        }
    }
});

export default theme;

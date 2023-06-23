
import "./App.css";
import Layout from "./Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  overrides: {
    // Style sheet name
    MuiTouchRipple: {
      // Name of the rule
      child: {
        // Some CSS
        backgroundColor: "#673AB7",
        '&:hover': {
          backgroundColor: '#AB47BC',
        },
      }
    }
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#673AB7',
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#673AB7",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;

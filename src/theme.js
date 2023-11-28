import { createTheme } from '@mui/material/styles';


// A custom theme for this app
const theme = createTheme(
  
//Paste values from ThemeCustomizer themeObject property here
{
  "palette": {
      "mode": "light",
      "primary": {
          "main": "#1976d2",
          "light": "#42a5f5",
          "dark": "#1565c0",
          "contrastText": "#ffffff"
      },
      "secondary": {
          "main": "#9c27b0",
          "light": "#ba68c8",
          "dark": "#7b1fa2",
          "contrastText": "#ffffff"
      }
  },
  "typography": {
      "fontFamily": "Roboto, Helvetica, Arial, sans-serif"
  },
  "shape": {
      "borderRadius": 4
  },
  "components": {
      "MuiCssBaseline": {
          "styleOverrides": {
              "body": {
                  "fontSize": 14,
                  "color": "inherit"
              }
          }
      },
      "MuiButton": {
          "styleOverrides": {
              "root": {
                  "fontSize": ""
              }
          }
      }
  }
}

//End theme
);

export default theme;
import { createTheme } from '@mui/material/styles';


// A custom theme for this app
const theme = createTheme(
  
//Paste values from ThemeCustomizer themeObject property here

{ palette: { mode: 'light', primary: { main: '#68518f', light: '#9575cd', dark: '#1565c0', contrastText: '#f3f3f3' }, secondary: { main: '#b26e59', light: '#ff9e80', dark: '#7b1fa2', contrastText: '#ffffff' } }, typography: { fontSize: 14, fontFamily: 'Noto Sans, Helvetica, Arial, sans-serif' }, shape: { borderRadius: 8 }, components: { muiButton: { styleOverrides: { root: { fontSize: '' } } } } }

//End theme
);

export default theme;

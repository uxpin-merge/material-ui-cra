import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';

//MUI Icon font import
let icons = document.createElement("link");
icons.setAttribute(
  "href",
  "https://fonts.googleapis.com/icon?family=Material+Icons"
);
icons.setAttribute("rel", "stylesheet");
document.head.appendChild(icons);


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
);

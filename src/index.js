import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { amber } from '@material-ui/core/colors';
import { MuiThemeProvider } from "@material-ui/core";


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: amber["400"],
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
  , rootElement);

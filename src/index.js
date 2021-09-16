import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#2B2E4A"
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

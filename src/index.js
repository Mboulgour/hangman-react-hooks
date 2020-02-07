import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/globalStyles';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
, document.getElementById('root'));

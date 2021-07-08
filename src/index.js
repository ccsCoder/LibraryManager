import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import DashboardContainer from './containers/DashboardContainer';
import ShelvesContainer from './containers/ShelvesContainer';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DashboardContainer />
      <ShelvesContainer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

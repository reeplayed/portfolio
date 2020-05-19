import React, { Component } from 'react';

import './App.css';
import GlobalStyles from './GlobalStyle';
import styled, {ThemeProvider} from 'styled-components'
import theme from './theme';
import Main from './Main';


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>

          <Main/>
        <GlobalStyles/>
      </ThemeProvider>
    );
  }
}

export default App;

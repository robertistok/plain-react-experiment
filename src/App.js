import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import Router from "./context/Router";
import Handler from "./Handler";

const theme = {
  primary: "#0b0c10",
  textColor: "#66FCF1"
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }

  html, body, #root {
    height: 100%;
  }

  * {
    color: ${({ theme }) => theme.textColor};
    font-family: Courier;
  }

  button {
    {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
}
  }
`;

const App = ({ pathname }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Root>
          <Router>
            <Handler />
          </Router>
        </Root>
      </>
    </ThemeProvider>
  );
};

const Root = styled.div`
  height: 100%;
  background-color: #0b0c10;
  padding: 0px 10px;
`;

export default App;

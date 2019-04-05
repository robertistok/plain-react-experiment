import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Router from "./components/Router";
import Handler from "./Handler";
import NavBar from "./components/Navbar";

import { theme, GlobalStyle } from "./utils/styles";

const App = ({ pathname }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Root>
          <Router>
            <NavBar pathname={pathname} />

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

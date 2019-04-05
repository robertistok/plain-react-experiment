import { createGlobalStyle } from "styled-components";

export const theme = {
  primary: "#0b0c10",
  textColor: "#66FCF1"
};

export const GlobalStyle = createGlobalStyle`
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
`;

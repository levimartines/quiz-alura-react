import {createGlobalStyle, DefaultTheme, ThemeProvider} from 'styled-components'
import React from "react";
import db from '../db.json';
import App from "./app";

interface ITheme extends DefaultTheme {
  colors: IThemeColors;
  borderRadius: string;
}

interface IThemeColors {
  primary: string;
  secondary: string;
  mainBg: string;
  contrastText: string;
  wrong: string;
  success: string;
}

const {theme} = db;
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${props => (props.theme as ITheme).colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <App/>
      </ThemeProvider>
    </>
  );
}

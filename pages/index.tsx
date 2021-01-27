import {createGlobalStyle, DefaultTheme, ThemeProvider} from 'styled-components'
import React from "react";
import db from '../db.json';
import QuizContainer from "../src/components/QuizContainer";
import QuizBackground from "../src/components/QuizBackground";
import Widget from "../src/components/Widget";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";

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
        <QuizBackground backgroundImagem={db.bg}>
          <QuizContainer>
            <Widget>
              <Widget.Header>
                <h1>{db.title}</h1>
              </Widget.Header>
              <Widget.Content>
                <p>{db.description}</p>
              </Widget.Content>
            </Widget>

            <Widget>
              <Widget.Content>
                <h1>{db.questions[0].title}</h1>
                <p>{db.questions[0].description}</p>
              </Widget.Content>
            </Widget>
            <Footer/>
          </QuizContainer>
          <GitHubCorner projectUrl='https://github.com/levimartines'/>
        </QuizBackground>
      </ThemeProvider>
    </>
  );
}

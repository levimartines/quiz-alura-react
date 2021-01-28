import {createGlobalStyle, DefaultTheme, ThemeProvider} from 'styled-components'
import React, {FormEvent, useState} from "react";
import db from '../db.json';
import QuizContainer from "../src/components/QuizContainer";
import QuizBackground from "../src/components/QuizBackground";
import QuizLogo from "../src/components/QuizLogo";
import Widget from "../src/components/Widget";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import HeadQuiz from "../src/components/Head";
import {useRouter} from "next/router";
import Button from "../src/components/Button";
import Input from "../src/components/Input";

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
  const router = useRouter();
  const [name, setName] = useState('')

  return (
      <>
        <HeadQuiz/>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <QuizBackground backgroundImagem={db.bg}>
            <QuizContainer>
              <QuizLogo/>
              <Widget>
                <Widget.Header>
                  <h1>{db.title}</h1>
                </Widget.Header>
                <Widget.Content>
                  <form onSubmit={(event: FormEvent) => {
                    event.preventDefault();
                    router.push(`/quiz?name=${name}`).then();
                  }}>
                    <Input name='name' placeholder='Seu nome'
                           onChange={event => setName(event.target.value)} value={name}/>
                    <Button type='submit' disabled={name.length === 0}>
                      Jogar
                    </Button>
                  </form>
                </Widget.Content>
              </Widget>

              <Widget>
                <Widget.Content>
                  <h1>Quizes da galera</h1>
                  <p>lista de quizes:</p>
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

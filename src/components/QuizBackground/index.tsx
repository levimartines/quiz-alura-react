import styled from "styled-components";

const QuizBackground = styled.div<{backgroundImagem: string}>`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.backgroundImagem});
  background-color: ${props => props.theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      background-image:
        linear-gradient(transparent, ${({theme}) => theme.colors.mainBg}),
        url(${props => props.backgroundImagem});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;

import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    overflow-x: hidden;
  }

  body{
    width: 100vw;
    background: ${props => props.theme.mainBackground};
    color: ${props => props.theme.mainColor};
    text-align: center;
  }

  a{
    text-decoration: none;
    color: inherit;
    &:hover{
      cursor: pointer;
      opacity: 0.8;
    }
  }

  li{
    list-style-type: none;
  }
`

export const theme = {
  mainBackground: '#05060F',
  mainColor: '#3CA4F7',
  mainDarkBlue: '#270DF0',
  mainPurple: '#A4A4FB',
}
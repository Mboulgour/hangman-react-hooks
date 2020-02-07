import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: 90px;
  background: -webkit-linear-gradient(-0.15turn,${props => props.theme.mainColor}, ${props => props.theme.mainPurple});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
import styled from 'styled-components';

export const Subtitle = styled.h2`
  margin: 30px 0 15px 0;
  font-size: 40px;
  background: -webkit-linear-gradient(-0.15turn,${props => props.theme.mainColor}, ${props => props.theme.mainPurple});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

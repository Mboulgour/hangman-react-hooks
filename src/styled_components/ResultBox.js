import styled from 'styled-components';

export const ResultBox = styled.div`
  border: 5px solid;
  border-image-source: linear-gradient(-0.15turn,${props => props.theme.mainColor}, ${props => props.theme.mainPurple});
  border-image-slice: 1;
  padding: 15px;
  font-size: 50px;
`
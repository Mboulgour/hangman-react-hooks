import styled from 'styled-components';

export const ResetButton = styled.button`
  background: linear-gradient(-0.15turn,${props => props.theme.mainColor}, ${props => props.theme.mainPurple});
  padding: 15px 20px;
  color: ${props => props.theme.mainBackground};
  border: none;
  border-radius: 3px;

  &:hover{
    cursor: pointer;
  }
`
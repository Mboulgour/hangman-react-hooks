import styled from 'styled-components';

export const KeyboardBtn = styled.button`
  border: none;
  background: linear-gradient(-0.15turn,${props => props.theme.mainColor}, ${props => props.theme.mainPurple});
  border-radius: 3px;
  padding: 15px;
  color: ${props => props.theme.mainBackground};
  margin: 5px;
  position: relative;
  width: 55px;
  height: 55px;
  text-transform: uppercase;
  font-size: 20px;

  &:disabled{
    filter: grayscale(80%);
    opacity: 0.5;
    &::before{
      content:"";
      position: absolute;
      background: ${props => props.theme.mainBackground};
      height: 100%;
      width: 2px;
      top: 0;
      transform: rotate(35deg);
      left: 48%;
    }
  }

  &:hover{
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width: 35px;
    height: 35px;
    padding: 0;
  }
`
import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  width: 100%;
`
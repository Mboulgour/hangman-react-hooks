import styled from 'styled-components';

export const KeyboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 500px;
  height: 400px;
  padding: 30px 40px;
  margin: 50px 0;

  @media (max-width: 600px) {
    padding: 0;
    height: 225px;
    display: block;
  }
`
import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

  body {
    background: #312E38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  background: red;
  z-index: 11;
  width: 100%;
  max-width: 1300px;
  margin: auto;
  padding: 0 50px 0 50px;

  @media screen and (max-width: 991px) {
    padding: 0 30px 0 30px;
  }
`;
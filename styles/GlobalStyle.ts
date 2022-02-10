import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
  }

  button {
    background-color: unset;
  }

  ol,
  li {
    text-decoration: none;
  }
`;
export default GlobalStyle;

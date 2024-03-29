import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 60px;
    
    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
    font-size: inherit;
  }
  
  .btn-default {
    background-color: transparent;
    border: none;
    padding: 0;
  }
`;

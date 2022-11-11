import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    button, input, textarea{
      outline: none;
    }
  }
  body{
    background-color: #111;
    color: white;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }
`;
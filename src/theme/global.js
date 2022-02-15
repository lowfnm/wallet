import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Abel', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 5px;

  }

  ::-webkit-scrollbar-track {
    background: transparent;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #6f78ec;
    border-radius: 7px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  p {
    margin: 0;
  }

  ul,
  p {
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    padding: 0;
    border: none;
    color: inherit;
    background-color: transparent;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;

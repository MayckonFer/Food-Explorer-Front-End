import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.cyan_dark};
    border-radius: 8px;
  }

  body {
    background: ${({ theme }) => theme.dark_100};
    color: ${({ theme }) => theme.light_100};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  select,
  textarea,
  button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 100%;
    max-width: max-content;
    height: auto;
  }
`;

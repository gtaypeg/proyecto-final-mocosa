import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    line-height: 1;
  }

  button {
    cursor: pointer;
    font-family: ${props => props.theme.fonts.main};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
`;

export default GlobalStyle; 
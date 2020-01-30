import styled, { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');

  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #E0E0E0;
    color: #212121;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.832rem;
  }

  h3 {
    font-size: 1.666rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.322rem;
  }

  h6 {
    font-size: 1.116rem;
  }
`;

export const CenterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: center;
`;

export default GlobalStyle;

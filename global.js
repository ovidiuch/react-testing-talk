import { injectGlobal } from 'styled-components';

injectGlobal`
  html, body, ul, ol, li, p, h1, h2, input, button, select {
    margin: 0;
    padding: 0;
  }

  html, body {
    background: rgb(245, 247, 249);
    color: #20232a;
    font-family: -apple-system, BlinkMacSystemFont, Ubuntu, 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 20px;
  }

  input, button, select {
    font-family: -apple-system, BlinkMacSystemFont, Ubuntu, 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 20px;
  }

  #root {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
  }
`;

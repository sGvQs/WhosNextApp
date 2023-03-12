import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body #root {
    width: 100vw;
    height: 100vh;
    background: #000;
  }

  body {
    background: #f0f0f0;
  }

  #canvas-container {
  height: 100%;
  width: 100%;
}

  a {
    position: absolute;
    top: 77%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    border: none;
    background: #fff;
    cursor: pointer;
    transition: all 0.2s;
    padding: 10px 20px;
  }

  a:hover {
    color: #fff;
    background: #000;
  }
`;

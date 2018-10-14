import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    font-size: 62.5%;
  }
  body {
      margin: 0;
  }
`;

const Background = styled.div`
    display: block;
    width: 100%;
    height: 100vh;
    background: linear-gradient(180.15deg, #a6c1ee 49.88%, #fbc2eb 122.63%);
    overflow: hidden;
    transform-style: preserve-3d;
    perspective: 350px;
`;

export default Background;

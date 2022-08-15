import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
  font-family: 'Source Sans Pro';
  box-sizing:border-box;
}

  body {
    margin: 0;
    padding: 0;
  }
  
  footer{
    position:absolute;
  }
`;

export default GlobalStyle;

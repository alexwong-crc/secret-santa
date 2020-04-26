import { createGlobalStyle } from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${Colour.getHex('primary')};
    height: 100%;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    background-color: ${Colour.getHex('primary')};
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;

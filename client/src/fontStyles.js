import { createGlobalStyle } from 'styled-components';
import Montserrat from './assets/fonts/Montserrat-Regular.otf';
import OpenSans from './assets/fonts/open-sans-v34-latin-regular.woff';
import OpenSans2 from './assets/fonts/open-sans-v34-latin-regular.woff2';
import OpenSansSvg from './assets/fonts/open-sans-v34-latin-regular.svg';

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Montserrat';
  src: url(${Montserrat}) format('otf'),
}
@font-face {
    font-family: 'Open Sans';
    src: url(${OpenSans}) format('woff'),
    url(${OpenSans2}) format('woff2'),
    url(${OpenSansSvg}) format('svg')
  }
`;

export default FontStyles;

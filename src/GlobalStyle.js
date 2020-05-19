import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  &:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
 
  body{
    // background-color: ${({theme: {colors}})=>colors.background};
    
    background: linear-gradient(-90deg, rgb(30, 49, 98), rgb(22, 36, 71));
    font-family: ${({theme: {fontFamily}})=>fontFamily.main};
  }
  

`
export default GlobalStyles;
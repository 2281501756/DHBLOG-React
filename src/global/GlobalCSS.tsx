import { createGlobalStyle } from 'styled-components'

const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    /* overflow: hidden; */
  }
`

export default GlobalCSS
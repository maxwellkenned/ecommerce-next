import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --background: #F3F3F4;
    --green-200: #77D400;
    --green-400: #1BBB16;
    --pink-800:#B41C8B;
    --orange-800: #FF5959;
    --gray-100: #ececec;
    --gray-200: #E0E0E0;
    --gray-300: #939393;
    --gray-400: #898989;
    --gray-500: #818181;
    --gray-600: #3f3f3f;
    --gray-800: #333;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 15px
    }
  }

  html, body {
    overflow: hidden;
  }

  html, body, #__next {
    min-width: 100%;
    min-height: 100vh;
  }

  body {
    background-color: var(--background);
    font-family: Quicksand, sans-serif;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyles

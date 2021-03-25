import { createGlobalStyle, css } from 'styled-components'

import { theme } from 'styles'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    outline: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  ${() => css`
    html {
      font-size: 62.5%;
      min-width: 320px;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.lightBackground};
      scroll-behavior: smooth;
      line-height: 1.2;
      scroll-behavior: smooth;
    }

    html,
    body,
    #__next {
      height: 100%;
      min-height: 100vh;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }
  `};
`

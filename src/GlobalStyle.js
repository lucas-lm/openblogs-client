import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
  margin:0;
  padding:0;
  outline:0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, button, input {
  font-family: 'Quicksand', sans-serif;
}

html, body, #root {
  min-height: 100vh;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  all: unset;
  cursor: pointer;
}
`

import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
html {
  font-family: "Poppins", sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  position: ${({ open }) => (open ? "fixed" : "static")};
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

.wrap {
  max-width: 1400px;
  margin: 0 auto;
}
`

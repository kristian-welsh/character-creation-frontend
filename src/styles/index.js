import { createGlobalStyle } from "styled-components";

export const colors = {
  mediumGreenP2: "#0d2c15",
  mediumGreenP1: "#174d25",
  mediumGreen: "#226F36",
  mediumGreenM1: "387d4a",
  mediumGreenM2: "#4e8b5e",
  lightGreenP2: "#287739",
  lightGreenP1: "#359f4c",
  lightGreen: "#43C75F",
  lightGreenM1: "#55cc6f",
  lightGreenM2: "#68d27e",
  beigeP2: "#c1bd81",
  beigeP1: "#d9d591",
  beige: "#F2EDA2",
  beigeM1: "#f4f0b4",
  beigeM2: "#f7f4c7",
  brownP2: "#27140c",
  brownP1: "#371c10",
  brown: "#4F2818",
  brownM1: "#603d2f",
  brownM2: "#725246",
  orangeBrown: "#bc742e",
  redP2: "#d30e0e",
  redP1: "#bc0c0c",
  red: "#eb1010",
  redM1: "#ed2727",
  redM2: "#ef3f3f",
  white: "#FFFFFF",
  grey: "#2c2c2c",
  black: "#000000",
};

export const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}

body {
  font-family: Quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${colors.beigeP1};
  color: ${colors.black};
  margin: 0 auto;
  width: 100%;
  height: 100%;
}


* {
  box-sizing: border-box;
}

a:link { text-decoration: none; }

a:visited { text-decoration: none; }

a:hover { text-decoration: none; }

a:active { text-decoration: none; }

@font-face {
  font-family: 'Lora';
  src: url('./../assets/fonts/Lora-Regular.ttf');
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'LoraSemiBold';
  src: url('./../assets/fonts/Lora-SemiBold.ttf');
  font-style: normal;
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: 'LoraBold';
  src: url('./../assets/fonts/Lora-Bold.ttf');
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: 'Quicksand';
  src: url('./../assets/fonts/Quicksand-Regular.ttf');
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'QuicksandSemiBold';
  src: url('./../assets/fonts/Quicksand-SemiBold.ttf');
  font-style: normal;
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: 'QuicksandBold';
  src: url('./../assets/fonts/Quicksand-Bold.ttf');
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}


h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-family: Lora;
}

p {
  margin: 0;
  font-family: Quicksand;
}
`;

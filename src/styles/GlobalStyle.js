import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{margin: 0;
padding: 0;
box-sizing: border-box;
scroll-behavior: smooth;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.container{
    padding: 10px 10%;
    max-width: 1600px;
    margin: 0 auto;
}
`;

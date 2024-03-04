import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{margin: 0;
padding: 0;
box-sizing: border-box;
scroll-behavior: smooth;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

&::-webkit-scrollbar{
    display: none;
}

.container{
    padding: 10px 10%;
    max-width: 1600px;
    margin: 0 auto;
}
.ant-select .ant-select-arrow {
      transition: all 0.5s ease 0s;
      color: #001829;
      width: 28;
    height: 28;
    fill: none;
    }
    .ant-select.ant-select-open .ant-select-arrow {
      transform: rotate(-180deg);
      transition: all 0.5s ease 0s;
    }
`;

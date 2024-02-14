import React from "react";
import { GlobalStyles } from "./styles/GlobalStyle";
import { Navbar } from "./components/navbar/Navbar";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
    </>
  );
};

import React from "react";
import { GlobalStyles } from "./styles/GlobalStyle";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Mobils } from "./components/home/Mobils";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Home />
      <Mobils />
    </>
  );
};

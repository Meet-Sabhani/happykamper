import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Discover } from "./components/discover/Discover";
import { Activity } from "./components/activity/Activity";
import { Safety } from "./components/safety/Safety";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Questions } from "./components/questions/Questions";
import { Contact } from "./components/contact/Contact";
import { Adventure } from "./components/adventure/Advanture";
import { Footers } from "./components/footer/Footer";
import { BannerLayers } from "./components/home/BannerLayers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalStyles } from "./GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Home />
      <BannerLayers />
      <Discover />
      <Activity />
      <Safety />
      <Testimonials />
      <Questions />
      <Contact />
      <Adventure />
      <Footers />
    </>
  );
};

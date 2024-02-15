import React from "react";
import img2 from "../../images/mobile4.webp";
import img5 from "../../images/mobile4.webp";
import logo from "../../images/HeaderLogo.webp";
import { SliderStyle } from "../../styles/SliderStyle";

export const Slider = () => {
  const slidersArray = [
    {
      id: 1,
      class: "slider-dPink",
      image1: img2,
      image2: img5,
      divText: "- PERSONALIZATION -",
      h1Text: "Personalized recommendations based on your kids interests",
      pText:
        " Easily input their details, interests, and specific needs, enabling tailored recommendations for a curated and engaging journey within the app.",
      mLogo: logo,
    },
    {
      id: 2,
      class: "slider-dPink",
      image1: img2,
      image2: img5,
      divText: "- INTUITIVE -",
      h1Text:
        "Discover the perfect activities through our intuitive search feature.",
      pText:
        "Explore nearby activities tailored to your children's interests, making it easy to find and engage in activities they love.",
      mLogo: logo,
    },
  ];

  return (
    <SliderStyle>
      <div className="sliderWrapper">
        {slidersArray.map((e) => (
          <div className={e.class} key={e.id}>
            <div className="slider-left">
              <img src={e.image1} alt="" />
              <img src={e.image2} alt="" />
            </div>
            <div className="slider-right">
              <div>{e.divText}</div>
              <h1>{e.h1Text}</h1>
              <p>{e.pText}</p>
              <img src={e.mLogo} alt="" />
            </div>
          </div>
        ))}
      </div>
    </SliderStyle>
  );
};

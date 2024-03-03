import React from "react";
import { DownloadNow } from "../download/DownloadNow";
import logo from "../../images/LogoWhite.webp";
import { slides } from "./slidesArray";
import Slider from "react-slick";
import { Carousel } from "antd";
import { SliderStyle } from "./SliderStyle";

export const Carousels = () => {
  var settings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel dots={false}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <SliderStyle key={index}>
            <div
              className="slider-dPink"
              style={{ backgroundColor: slide.backgroundColor }}
            >
              <div className="slider-left">
                {slide.images.map((image, imgIndex) => (
                  <img key={imgIndex} src={image} alt="" />
                ))}
              </div>
              <div className="slider-right">
                <div>{`- - ${slide.title} - -`}</div>
                <h1>{slide.mainTitle}</h1>
                <p>{slide.description}</p>
                <img src={logo} alt="" />
                <DownloadNow>
                  <a href="ddddd">ujdwgbujhbjhbj</a>
                </DownloadNow>
              </div>
            </div>
          </SliderStyle>
        ))}
      </Slider>
    </Carousel>
  );
};

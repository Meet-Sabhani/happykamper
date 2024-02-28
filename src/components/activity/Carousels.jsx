import React from "react";
import { Carousel } from "antd";
import { SliderStyle } from "../../styles/SliderStyle";
import img2 from "../../images/mobile4.webp";
import img5 from "../../images/mobile4.webp";
import logo from "../../images/HeaderLogo.webp";
import { DownloadNow } from "../download/DownloadNow";

export const Carousels = () => {
  return (
    <>
      <Carousel
        //  autoplay
        autoplaySpeed={1500}
      >
        <SliderStyle>
          <div className="slider-dPink">
            <div className="slider-left">
              <img src={img5} alt="" />
              <img src={img2} alt="" />
            </div>
            <div className="slider-right">
              <div className="carousel-title"> - PERSONALIZATION -</div>
              <h1>Personalized recommendations based on your kids interests</h1>
              <p>
                Explore nearby activities tailored to your children's interests,
                making it easy to find and engage in activities they love
              </p>
              <img src={logo} alt="" />
              <DownloadNow>
                <a href="ddddd">ujdwgbujhbjhbj</a>
              </DownloadNow>
            </div>
          </div>
        </SliderStyle>
        <SliderStyle>
          <div className="slider-dPink">
            <div className="slider-left">
              <img src={img2} alt="" />
              <img src={img5} alt="" />
            </div>
            <div className="slider-right">
              <div> - - INTUITIVE - -</div>
              <h1>
                {" "}
                Discover the perfect activities through our intuitive search
                feature.{" "}
              </h1>
              <p>
                {" "}
                Easily input their details, interests, and specific needs,
                enabling tailored recommendations for a curated and engaging
                journey within the app.{" "}
              </p>
              <img src={logo} alt="" />
            </div>
          </div>
        </SliderStyle>
        <SliderStyle>
          <div className="slider-dPink">
            <div className="slider-left">
              <img src={img5} alt="" />
              <img src={img2} alt="" />
            </div>
            <div className="slider-right">
              <div> - PERSONALIZATION -</div>
              <h1>
                {" "}
                Personalized recommendations based on your kids interests{" "}
              </h1>
              <p>
                Explore nearby activities tailored to your children's interests,
                making it easy to find and engage in activities they love
              </p>
              <img src={logo} alt="" />
            </div>
          </div>
        </SliderStyle>
        <SliderStyle>
          <div className="slider-dPink">
            <div className="slider-left">
              <img src={img5} alt="" />
              <img src={img2} alt="" />
            </div>
            <div className="slider-right">
              <div> - PERSONALIZATION -</div>
              <h1>
                {" "}
                Personalized recommendations based on your kids interests{" "}
              </h1>
              <p>
                Explore nearby activities tailored to your children's interests,
                making it easy to find and engage in activities they love
              </p>
              <img src={logo} alt="" />
            </div>
          </div>
        </SliderStyle>
      </Carousel>
    </>
  );
};

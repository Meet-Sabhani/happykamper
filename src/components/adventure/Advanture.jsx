import React from "react";
import s1 from "../../images/S1.webp";
import s2 from "../../images/S2.svg";
import s3 from "../../images/S3.webp";
import s4 from "../../images/S4.webp";
import s5 from "../../images/S5.svg";
import { AdventureStyle } from "../../styles/AdventureStyle";
import { DownloadNow } from "../download/DownloadNow";
import Slider from "react-slick";

export const Adventure = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 4000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true,
  };
  var settings1 = {
    infinite: true,
    slidesToShow: 3,
    speed: 4000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    ltr: true,
  };
  return (
    <AdventureStyle>
      <div className="firstSliderWrap">
        <Slider {...settings}>
          <img src={s1} alt="" />
          <img src={s2} alt="" />
          <img src={s3} alt="" />
          <img src={s4} alt="" />
          <img src={s5} alt="" />
        </Slider>
      </div>

      <div className="secondSliderWrap">
        <Slider {...settings1}>
          <img src={s1} alt="" />
          <img src={s2} alt="" />
          <img src={s3} alt="" />
          <img src={s4} alt="" />
          <img src={s5} alt="" />
        </Slider>
      </div>

      <div className="adventureBox">
        <div className="text-div">
          <h1>Join the adventure now!</h1>
          <p>Explore activities tailored for your children.</p>
        </div>
        <DownloadNow>Download Happy kamper now</DownloadNow>
      </div>
    </AdventureStyle>
  );
};

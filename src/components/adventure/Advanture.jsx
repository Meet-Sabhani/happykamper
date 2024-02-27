import React from "react";
import s1 from "../../images/S1.webp";
import s2 from "../../images/S2.svg";
import s3 from "../../images/S3.webp";
import s4 from "../../images/S4.webp";
import s5 from "../../images/S5.svg";
import { AdventureStyle } from "../../styles/AdventureStyle";
import { DownloadNow } from "../download/DownloadNow";

export const Adventure = () => {
  return (
    <AdventureStyle>
      <div className="sliders-container">
        <div className="fSlider-container">
          <div className="fSlider">
            <img src={s1} alt="" />
            <img src={s2} alt="" />
            <img src={s3} alt="" />
            <img src={s4} alt="" />
            <img src={s5} alt="" />
          </div>
          <div className="fSlider">
            <img src={s1} alt="" />
            <img src={s2} alt="" />
            <img src={s3} alt="" />
            <img src={s4} alt="" />
            <img src={s5} alt="" />
          </div>
        </div>
        <div className="SecSlider-container">
          <div className="SecSlider">
            <img src={s3} alt="" />
            <img src={s2} alt="" />
            <img src={s4} alt="" />
            <img src={s5} alt="" />
            <img src={s1} alt="" />
          </div>
          <div className="SecSlider">
            <img src={s3} alt="" />
            <img src={s2} alt="" />
            <img src={s4} alt="" />
            <img src={s5} alt="" />
            <img src={s1} alt="" />
          </div>
        </div>
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

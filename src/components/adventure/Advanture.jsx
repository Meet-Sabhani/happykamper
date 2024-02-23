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
      <marquee>
        <div className="fSlider">
          <img src={s1} alt="" />
          <img src={s2} alt="" />
          <img src={s3} alt="" />
          <img src={s4} alt="" />
          <img src={s5} alt="" />
        </div>
      </marquee>
      <marquee direction="right">
        <div className="fSlider">
          <img src={s3} alt="" />
          <img src={s4} alt="" />
          <img src={s5} alt="" />
          <img src={s2} alt="" />
          <img src={s1} alt="" />
        </div>
      </marquee>

      <div className="adventureBox">
        <h1>Join the adventure now!</h1>
        <p>Explore activities tailored for your children.</p>
        <DownloadNow>Download Happy kamper now</DownloadNow>
      </div>
    </AdventureStyle>
  );
};

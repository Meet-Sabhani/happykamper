import React from "react";
import layarLogo from "../../images/layesr-logo.webp";
import mickyLogo from "../../images/micky-mouse.webp";
import { BannerStyle } from "../../styles/BannerStyle";

export const BannerLayers = () => {
  return (
    <BannerStyle>
      <h2>OUR LEADING ORGANIZATIONS PARTNERS</h2>
      <div className="logos">
        <img src={layarLogo} alt="" />
        <img src={mickyLogo} alt="" />
      </div>
    </BannerStyle>
  );
};

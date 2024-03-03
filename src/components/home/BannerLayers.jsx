import React from "react";
import layerLogo from "../../images/layesr-logo.webp";
import { BannerStyle } from "./BannerStyle";

export const BannerLayers = () => {
  return (
    <BannerStyle>
      <h2>OUR LEADING ORGANIZATIONS PARTNERS</h2>
      <div className="logos">
        <img src={layerLogo} alt="" />
      </div>
    </BannerStyle>
  );
};

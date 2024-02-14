import React from "react";
import mobile1 from "../../images/mobile1.webp";
import mobile2 from "../../images/mobile2.webp";
import mobile3 from "../../images/mobile3.webp";
import mobile4 from "../../images/mobile4.webp";
import mobile5 from "../../images/mobile5.webp";
import mobile6 from "../../images/mobile6.webp";
import mobile7 from "../../images/mobile7.webp";
import { MobileStyle } from "../../styles/MobileStyle";

export const Mobils = () => {
  return (
    <MobileStyle>
      <div className="mobile-container">
        <img src={mobile1} alt="" />
        <img src={mobile2} alt="" />
        <img src={mobile3} alt="" />
        <img src={mobile4} alt="" />
        <img src={mobile5} alt="" />
        <img src={mobile6} alt="" />
        <img src={mobile7} alt="" />
      </div>
    </MobileStyle>
  );
};

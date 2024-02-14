import React from "react";
import logoRes from "../../images/LogoRes.webp";
import DownloadQR from "../../images/downloadQR.png";
import mobile1 from "../../images/mobile1.webp";
import mobile2 from "../../images/mobile2.webp";
import mobile3 from "../../images/mobile3.webp";
import mobile4 from "../../images/mobile4.webp";
import mobile5 from "../../images/mobile5.webp";
import mobile6 from "../../images/mobile6.webp";
import mobile7 from "../../images/mobile7.webp";
import { MobileStyle } from "../../styles/MobileStyle";

import { HomeStyle } from "../../styles/HomeStyle";
import { BannerLayers } from "./BannerLayers";

export const Home = () => {
  return (
    <HomeStyle>
      <div className="logo">
        <img src={logoRes} alt="" />
      </div>
      <div className="center">
        <h1>
          Discover Endless Adventures for <br /> Your Child with Happy Kamper!
        </h1>
        <p>Empower Your Child's Learning Journey Beyond the Classroom.</p>
      </div>
      <div className="circal">
      <div className="downloadQR">
        <img src={DownloadQR} alt="" />
        <span>
          Scan to download <br /> Happy Kamper App!
        </span>
      </div>
      <MobileStyle>
        <img src={mobile1} alt="" />
        <img src={mobile2} alt="" />
        <img src={mobile3} alt="" />
        <img src={mobile4} alt="" />
        <img src={mobile5} alt="" />
        <img src={mobile6} alt="" />
        <img src={mobile7} alt="" />
      </MobileStyle></div>
      <BannerLayers />
    </HomeStyle>
  );
};

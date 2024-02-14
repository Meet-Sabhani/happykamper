import React from "react";
import logoRes from "../../images/LogoRes.webp";
import DownloadQR from "../../images/downloadQR.png";

import { HomeStyle } from "../../styles/HomeStyle";

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
      <div className="downloadQR">
        <img src={DownloadQR} alt="" />
        <span>
          Scan to download <br /> Happy Kamper App!
        </span>
      </div>
    </HomeStyle>
  );
};

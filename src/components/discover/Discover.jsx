import React from "react";
import img5 from "../../images/mobile5.webp";
import img2 from "../../images/mobile4.webp";
import art1 from "../../images/Art.svg";
import famailt from "../../images/Family.svg";
import { DiscoverStyle } from "../../styles/DiscoverStyle";

export const Discover = () => {
  return (
    <DiscoverStyle>
      <div className="mobile-circal">
        <img src={img2} alt="" />
        <img src={img5} alt="" />
      </div>
      <div className="mini-art-list">
        <div className="art">
          <img src={art1} alt="" />
          <h4>art</h4>
        </div>
        <div className="art">
          <img src={famailt} alt="" />
          <h4>art</h4>
        </div>
        <div className="art">
          <img src={art1} alt="" />
          <h4>art</h4>
        </div>
        <div className="art">
          <img src={art1} alt="" />
          <h4>art</h4>
        </div>
        <div className="art">
          <img src={art1} alt="" />
          <h4>art</h4>
        </div>
        <div className="art">
          <img src={art1} alt="" />
          <h4>art</h4>
        </div>
        <div className="art">
          <img src={art1} alt="" />
          <h4>art</h4>
        </div>
        <div className="art">
          <img src={art1} alt="" />
          <h4>art</h4>
        </div>
      </div>

      <div className="text-container">
        <h1>
          Discover new activities for your children to{" "}
          <span> learn, socialize and have fun </span>
        </h1>
        <p>
          Find engaging activities tailored to your children’s interests. Allow
          them to discover new talents, learn new things, make new friends and
          have a ton of fun along the way!
        </p>
      </div>
    </DiscoverStyle>
  );
};

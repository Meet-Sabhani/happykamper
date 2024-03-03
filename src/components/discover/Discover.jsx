import React from "react";
import img5 from "../../images/mobile5.webp";
import img2 from "../../images/mobile4.webp";
import art1 from "../../images/Art.svg";
import perfomance from "../../images/Performance.svg";
import sport from "../../images/Sports.svg";
import cooking from "../../images/Cooking.svg";
import Playlands from "../../images/Cooking.svg";
import Education from "../../images/Education.svg";
import Outdoor from "../../images/Outdoor.svg";
import Family from "../../images/Family.svg";
import { DiscoverStyle } from "./DiscoverStyle";

export const Discover = () => {
  return (
    <DiscoverStyle>
      <div className="mobile-circal">
        <img src={img2} alt="" />
        <img src={img5} alt="" />
      </div>
      <div className="mini-art-list">
        <div className="art">
          <div className="img-wrap">
            <img src={art1} alt="" />
          </div>
          <h4>art</h4>
        </div>
        <div className="art">
          <div className="img-wrap">
            <img src={perfomance} alt="" />
          </div>
          <h4>Performance</h4>
        </div>
        <div className="art">
          <div className="img-wrap">
            <img src={sport} alt="" />
          </div>
          <h4>art</h4>
        </div>
        <div className="art">
          <div className="img-wrap">
            <img src={cooking} alt="" />
          </div>
          <h4>cooking</h4>
        </div>
        <div className="art">
          <div className="img-wrap">
            <img src={Playlands} alt="" />
          </div>
          <h4>Playlands</h4>
        </div>
        <div className="art">
          <div className="img-wrap">
            <img src={Education} alt="" />
          </div>
          <h4>Education</h4>
        </div>
        <div className="art">
          <div className="img-wrap">
            <img src={Outdoor} alt="" />
          </div>
          <h4>Outdoor</h4>
        </div>
        <div className="art">
          <div className="img-wrap">
            <img src={Family} alt="" />
          </div>
          <h4>family</h4>
        </div>
      </div>

      <div className="text-container">
        <h1>
          Discover new activities for your children to
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

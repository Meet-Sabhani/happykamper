import React from "react";
import { ProffionalStyle } from "./ProffionalStyle";
import validation1 from "../../images/validation1.webp";
import solidarity2 from "../../images/solidarity1.webp";
export const Proffional = () => {
  return (
    <ProffionalStyle>
      <div className="proffional">
        <div className="proffionalTop">
          <img src={validation1} alt="" />
          <h1>Proffional Instructor</h1>
        </div>
        <p>
          Our team of professional instructors is dedicated to nurturing your
          child's talents and skills. With diverse backgrounds and a wealth of
          experience, they bring unparalleled guidance and expertise to every
          class, enriching your child's learning journey.
        </p>
      </div>
      <div className="proffional" style={{ background: "#3AD6C1" }}>
        <div className="proffionalTop">
          <img src={solidarity2} alt="" />
          <h1>Community Enggement</h1>
        </div>
        <p>
          Beyond activities, we foster a vibrant community where children build
          friendships, share experiences, and learn from one another. Our
          platform isn't just about classes—it's a space where kids connect,
          collaborate, and grow together!
        </p>
      </div>
    </ProffionalStyle>
  );
};

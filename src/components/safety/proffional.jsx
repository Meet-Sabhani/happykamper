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
          <h1>proffional instructor</h1>
        </div>
        <p>
          Our team of professional instructors is dedicated to nurturing your
          child's talents and skills. With diverse backgrounds and a wealth of
          experience, they bring unparalleled guidance and expertise to every
          class, enriching your child's learning journey.
        </p>
      </div>
      <div className="proffional">
        <div className="proffionalTop">
          <img src={solidarity2} alt="" />
          <h1>proffional instructor</h1>
        </div>
        <p>
          Our team of professional instructors is dedicated to nurturing your
          child's talents and skills. With diverse backgrounds and a wealth of
          experience, they bring unparalleled guidance and expertise to every
          class, enriching your child's learning journey.
        </p>
      </div>
    </ProffionalStyle>
  );
};

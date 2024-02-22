import React from "react";
import { ActivityStyle } from "../../styles/ActivityStyle";
import { Slider } from "./Slider";
import { Carousels } from "./Carousels";

export const Activity = () => {
  return (
    <ActivityStyle>
      <div className="activity-parents">
        <div className="parent">
          <h2>Parent</h2>
          <p>Find the perfect activity for your children</p>
        </div>
        <div className="provider">
          <h2>Provider</h2>
          <p>Increase exposure and additional drive bookings</p>
        </div>
      </div>
      {/* <Slider /> */}
      <Carousels />
    </ActivityStyle>
  );
};

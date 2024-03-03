import React from "react";
import { Carousels } from "./Carousels";
import { ActivityStyle } from "./ActivityStyle";

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
      <Carousels />
    </ActivityStyle>
  );
};

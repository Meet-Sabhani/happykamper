import React from "react";
import avtar from "../../images/Avatar.webp";

export const Testimonials = () => {
  return (
    <div>
      <h1>Let’s hear what they say about us</h1>
      <div className="review">
        <h1>
          "Happy Kamper revolutionized how I find great activities for my child.
          Brilliant!"
        </h1>
        <img src={avtar} alt="" />
        <h2>Margareth</h2>
        <p>
          Yoga Teacher & a Full-Time Mom
          <span>Mampang Prapatan, Jakarta Selatan</span>
        </p>
      </div>
    </div>
  );
};

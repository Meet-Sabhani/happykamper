import React from "react";
import avtar from "../../images/Avatar.webp";
import { DownloadNow } from "../download/DownloadNow";
import { TestimonialsStyle } from "./TestimonialsStyle";

export const Testimonials = () => {
  const avatars = [];

  for (let index = 0; index <= 26; index++) {
    avatars.push(<img src={avtar} key={index} alt="" />);
  }
  return (
    <TestimonialsStyle>
      <div className="title">
        <h1>Let’s hear what they say about us</h1>
      </div>
      <div className="review">
        <h1>
          "Happy Kamper revolutionized how I find great activities for my child.
          Brilliant!"
        </h1>
        <img src={avtar} alt="" />
        <h2>Margareth</h2>
        <p>
          Yoga Teacher & a Full-Time Mom
          <div>Mampang Prapatan, Jakarta Selatan</div>
        </p>
      </div>
      <h2>- Join our happy customers -</h2>
      <div className="TestimonialBottom">
        <div className="avatarsWrap">{avatars}</div>
        <DownloadNow> Download Happykamper now</DownloadNow>
      </div>
    </TestimonialsStyle>
  );
};

import React from "react";
import avtar from "../../images/Avatar.webp";
import { TestimonialsStyle } from "../../styles/TestimonialsStyle";
import { DownloadNow } from "../download/DownloadNow";

export const Testimonials = () => {
  const avatars = [];

  for (let index = 0; index <= 24; index++) {
    avatars.push(<img src={avtar} key={index} alt="" />);
  }
  return (
    <TestimonialsStyle>
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
          <div>Mampang Prapatan, Jakarta Selatan</div>
        </p>
      </div>
      <div className="TestimonialBottom">
        <h2>- Join our happy customers -</h2>
        <div className="avatarsWrap">{avatars}</div>
        <DownloadNow> Download Happykamper now</DownloadNow>
      </div>
    </TestimonialsStyle>
  );
};

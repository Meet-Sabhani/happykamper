import React from "react";
import Header from "../../images/logo.svg";
import { FooterStyle } from "../../styles/FooterStyle";
import { Col, Divider, Flex, Row } from "antd";
import gPay from "../../images/googleplay.webp";
import apple from "../../images/applestore.webp";

export const Footers = () => {
  return (
    <FooterStyle>
      <div className="footer-top-container">
        <div className="footer-left">
          <img src={Header} alt="" />
          <p>
            <a href="">support@happykamper.io</a>
            <a href="">+1 310-361-7923</a>
          </p>
        </div>
        <div className="footer-right-container">
          <div className="footer-right-part">
            <h2>Support</h2>
            <div className="Help">
              <p>Help Center</p>
              <p>FAQs</p>
            </div>
          </div>

          <div className="footer-right-part">
            <h2>Follow Us</h2> 
            <div className="icons">
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>

          <div className="footer-right-part">
            <h2>Download</h2>
            <div className="stores">
              <img src={gPay} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Divider style={{ background: "#505D8A" }} />
      <div className="footer-bottom-container">
        <p>Copyright © PT. Happy Kamper Indonesia</p>
        <Divider
          type="vertical"
          style={{
            background: "#505D8A",
            height: "1.9em",
          }}
        />

        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </FooterStyle>
  );
};

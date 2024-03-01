import React from "react";
import Header from "../../images/logo.svg";
import { FooterStyle } from "../../styles/FooterStyle";
import { Divider, Space } from "antd";
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
              <div className="icon-wrap">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="icon-wrap">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="icon-wrap">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="icon-wrap">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
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
        <Space>
          <Divider type="vertical" />
        </Space>
        <div className="bottom-right">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </FooterStyle>
  );
};

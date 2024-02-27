import React, { useState } from "react";
import { NavbarStyle } from "../../styles/NavbarStyle";
import logoImg from "../../images/HeaderLogo.webp";
import LogoRes from "../../images/LogoRes.webp";
import { Form, Select } from "antd";
import { Option } from "antd/es/mentions";

export const Navbar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  const menuStyles = {
    height: isMenuVisible ? "300px" : "auto",
    overflow: "hidden",
    transition: "height 0.3s ease",
  };
  return (
    <NavbarStyle>
      <div className="reslogo">
        <a>
          <img src={LogoRes} alt="" />
        </a>
      </div>
      <div className={`nav-left ${isMenuVisible ? "showMenu" : ""}`}>
        <ul style={menuStyles}>
          <li>
            <a href="/">
              <img src={logoImg} alt="" />
            </a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Parent</a>
          </li>
          <li>
            <a href="/">Provider</a>
          </li>
          <li>
            <a href="#safety">Why Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <Select defaultValue={"english"} style={{ border: "unset" }}>
          <Option value="english">English</Option>
          <Option value="Gujarati">Gujarati</Option>
        </Select>

        <a href="#">Download App</a>
        <div
          className={`menu ${isMenuVisible ? "openMenu" : ""}`}
          onClick={toggleMenu}
        >
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
      </div>
    </NavbarStyle>
  );
};

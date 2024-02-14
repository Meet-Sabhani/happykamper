import React from "react";
import { NavbarStyle } from "../../styles/NavbarStyle";
import logoImg from "../../images/HeaderLogo.webp";

export const Navbar = () => {
  return (
    <NavbarStyle>
      <div className="nav-left">
        <ul>
          <li>
            <a href="">
              {" "}
              <img src={logoImg} alt="" />
            </a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Parent</a>
          </li>
          <li>
            <a href="">Provider</a>
          </li>
          <li>
            <a href="">Why Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <select name="" id="">
          <option value="ENGLISH">ENGLISH</option>
          <option value="GUJARATI">GUJARATI</option>
        </select>
        <a>Download App</a>
      </div>
    </NavbarStyle>
  );
};

import React from "react";
import { NavbarStyle } from "../../styles/NavbarStyle";
import logoImg from "../../images/HeaderLogo.webp";

export const Navbar = () => {
  return (
    <NavbarStyle>
      <div className="nav-left">
        <div className="logo">
          <img src={logoImg} alt="" />
        </div>
        <ul>
          <li>
            <a href="">home</a>
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
        <a href="">Download App</a>
      </div>
    </NavbarStyle>
  );
};

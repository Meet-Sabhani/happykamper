import React, { useState } from "react";
import logoImg from "../../images/HeaderLogo.webp";
import LogoRes from "../../images/LogoRes.webp";
import { Drawer, Select } from "antd";
import { Option } from "antd/es/mentions";
import styled from "styled-components";
import { NavbarStyle } from "./NavbarStyle";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("top");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <NavbarStyle>
      <div className="reslogo">
        <a>
          <img src={LogoRes} alt="" />
        </a>
      </div>
      <div className="nav-left">
        <ul>
          <li>
            <a href="/">
              <img src={logoImg} alt="" />
            </a>
          </li>
          <li className="close">
            <i className="fas fa-times"></i>
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
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        height={235}
        styles={{ header: { display: "none" } }}
      >
        <DrawerWrapper>
          <li className="closeDrawer" onClick={onClose}>
            <i className="fas fa-times"></i>
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
        </DrawerWrapper>
      </Drawer>
      <div className="nav-right">
        <Select
          defaultValue={"english"}
          style={{ border: "unset", zIndex: 99 }}
        >
          <Option value="english">English</Option>
          <Option value="Gujarati">Gujarati</Option>
        </Select>

        <a href="#">Download App</a>
        <div className="menu" onClick={showDrawer}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
      </div>
    </NavbarStyle>
  );
};

const DrawerWrapper = styled.ul`
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .closeDrawer {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 30px;
    color: #000;
    cursor: pointer;
  }
  li {
    a {
      color: #84868c;
      font-size: 20px;
      line-height: 28px;
      text-decoration: none;
      padding: 7px 12px;
    }
  }
`;

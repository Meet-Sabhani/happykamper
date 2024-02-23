import React from "react";
import Header from "../../images/logo.svg";
import { FooterStyle } from "../../styles/FooterStyle";
import { Col, Divider, Flex, Row } from "antd";

export const Footers = () => {
  return (
    <FooterStyle>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{ marginLeft: "unset", marginRight: "unset" }}
      >
        <Col xs={{ span: 24 }} md={{ span: 10 }}>
          <img src={Header} alt="" />
          <p>
            <a href="">support@happykamper.io</a>
          </p>
          <p>
            <a href="">+1 310-361-7923</a>
          </p>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 10 }}>
          <Row>
            <Col xs={{ span: 24 }} sm={{ span: 8 }}>
              <h2>Support</h2>
              <p>Help Center</p>
              <p>FAQs</p>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 8 }}>
              <h2>Follow</h2>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 8 }}>
              <h2>Download</h2>
            </Col>
          </Row>
        </Col>
      </Row>

      <Divider style={{ background: "#505D8A" }} />
      <Row>
        <Col>Copyright © PT. Happy Kamper Indonesia</Col>
        <Divider type="vertical" style={{ background: "#505D8A" }} />
        <Col>
          <Flex wrap="wrap" gap={7}>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </Flex>
        </Col>
      </Row>
    </FooterStyle>
  );
};

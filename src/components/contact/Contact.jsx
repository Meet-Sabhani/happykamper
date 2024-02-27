import React from "react";
import { Button, Col, Flex, Form, Input, Row, Select } from "antd";
import { Option } from "antd/es/mentions";
import contactImg from "../../images/contect.webp";
import { ContactStyle } from "../../styles/ContactStyle";

const { TextArea } = Input;

export const Contact = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        defaultValue={"+91"}
        style={{
          width: 70,
        }}
      >
        <Option value="+91">+91</Option>
        <Option value="+63">+63</Option>
      </Select>
    </Form.Item>
  );

  return (
    <ContactStyle id="contact">
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col xs={{ span: 24 }} md={{ span: 14 }}>
          <div className="Contact-left">
            <img src={contactImg} alt="" />
            <h1>Love to hear from you. Let’s get in touch!</h1>
          </div>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 10 }}>
          <div className="Contact-right">
            <Form
              name="basic"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item label="Name" name="Name">
                <Input placeholder="Enter Your Full Name" />
              </Form.Item>

              <Form.Item name="email" label="E-mail">
                <Input placeholder="Examplw@gmail.com" />
              </Form.Item>

              <Form.Item name="phone" label="Phone Number">
                <Input
                  addonBefore={prefixSelector}
                  placeholder="87687687687"
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item label="Tell us more">
                <TextArea rows={2} placeholder="Describe more Detail" />
              </Form.Item>

              <Form.Item>
                <Flex justify="center">
                  <Button type="primary" htmlType="submit">
                    Submit Message
                  </Button>
                </Flex>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </ContactStyle>
  );
};

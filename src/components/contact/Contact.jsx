import React from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
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
        style={{
          width: 70,
        }}
      >
        <Option value="86">+91</Option>
        <Option value="87">+63</Option>
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
                span: 8,
              }}
              wrapperCol={{
                span: 16,
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
              <Form.Item
                label="Name"
                name="Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item label="TextArea">
                <TextArea rows={4} />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit Message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </ContactStyle>
  );
};

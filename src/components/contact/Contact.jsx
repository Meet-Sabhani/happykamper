import React from "react";
import { Button, Col, Flex, Form, Input, Row, Select, Space } from "antd";
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

  return (
    <ContactStyle id="contact">
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
          <div className="Contact-left">
            <img src={contactImg} alt="" />
            <h1>Love to hear from you. Let’s get in touch!</h1>
          </div>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
          <div className="Contact-right">
            <Form
              name="basic"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item label="Name" name="Name">
                <Input
                  placeholder="Enter Your Full Name"
                  rootClassName="inputStyle"
                />
              </Form.Item>

              <Form.Item name="phone" label="Phone Number">
                <div className="PhoneNum">
                  <Form.Item noStyle={true}>
                    <Select defaultValue={"+91"} rootClassName="phoneSelect">
                      <Option value="+91">+91</Option>
                      <Option value="+63">+63</Option>
                    </Select>
                  </Form.Item>
                  <Input
                    placeholder="Enter your phone number"
                    style={{
                      width: "100%",
                    }}
                    rootClassName="phoneI"
                  />
                </div>
              </Form.Item>

              <Form.Item name="email" label="Email Address">
                <Input
                  placeholder="Examplw@gmail.com"
                  rootClassName="inputStyle"
                />
              </Form.Item>

              <Form.Item name="select" label="How can we help?">
                <Select
                  placeholder="Select Topic"
                  rootClassName="selectOption"
                  allowClear
                >
                  <Option value="english">Business already Climed</Option>
                  <Option value="Login">Login issue</Option>
                  <Option value="Class">Class Registration</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Tell us more">
                <TextArea
                  rows={2}
                  placeholder="Describe more Detail"
                  rootClassName="inputStyle"
                />
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit">Submit Message</Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </ContactStyle>
  );
};

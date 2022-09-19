import React from "react";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// import _ from "lodash";
import { getTokens } from "../../modules/common/utils";

import "./Login.scss";
const Login = (props) => {
  const history = useHistory();

  // console.log(!_.isNil(getUserId()));

  const { accessToken } = getTokens();
  if (accessToken) {
    history.push("/dashboard");
  }

  const onFinish = (values) => {
    console.log("Success:", values);
    props.login(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div id="login">
      <Row noGutters>
        <Col md={6}>
          <Image
            src="/images/tree.png"
            alt="tree image"
            className="tree-image"
          />
        </Col>
        <Col md={4} className="pl-md-5 px-2">
          <Image
            src="/images/logo.png"
            alt="logo image"
            className="logo"
            width="178px"
            height="125px"
          />
          <h1 className="mt-3 title">Backend title</h1>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="email"
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
              <Input className="custom-input" placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button
                loading={props.loading}
                type="primary"
                block
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default Login;

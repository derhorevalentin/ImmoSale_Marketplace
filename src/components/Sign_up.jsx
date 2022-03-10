import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

const Sign_up = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerRequest = () => {
    fetch("http://127.0.0.1:3000/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res.headers.get("Authorization"));
          localStorage.setItem("token", res.headers.get("Authorization"));
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .then((json) => console.dir(json))
      .catch((err) => console.error(err));
  };
  return (
    <div className="login-contairer">
      <div className="login-signUp">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          action="post"
        >
          <div className="form-title">
            <h1>Inscription</h1>
          </div>
          <Form.Item
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => registerRequest()}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Sign_up;

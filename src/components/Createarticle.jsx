import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useSelector } from "react-redux";

function Createarticle() {
  const auth = useSelector((state) => state);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const articleRequest = () => {
    fetch("http://127.0.0.1:3000/articles", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        article: {
          titre: title,
          price: price,
          description: description,
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
  console.log(auth);
  return (
    <div className="form-contairer">
      <div className="form-create">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
        >
          <div className="form-title">
            <h1>Créer Article</h1>
          </div>

          <Form.Item
            label="Title"
            type="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            rules={[
              {
                required: true,
                message: "Please input your title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            type="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            rules={[
              {
                required: true,
                message: "Please input your price!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            type="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
            <Input.TextArea />
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
              onClick={() => articleRequest()}
            >
              Créer
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Createarticle;

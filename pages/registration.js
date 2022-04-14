import { Layout, Form, Input, Button, Checkbox, message } from "antd";
import React, { useState, useEffect } from "react";
import HeaderMain from "../components/HeaderMain";
import Link from "next/link";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import Router from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../actions/user";

export default function Registration() {
  const { Content } = Layout;
  const [captcha, setCaptcha] = useState(false);
  const recaptchaRef = React.createRef();

  const checkCaptcha = (value) => {
    setCaptcha(true);
  };

  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);

  if (isAuth) Router.push("/profile");

  async function registrationUser(values) {
    if (captcha) {
      await axios
        .post("http://localhost:5000/api/auth/registration", {
          username: values.email,
          password: values.password,
        })
        .then(function (response) {
          message.success(response.data.message);
          Router.push("/login");
        })
        .catch(function (error) {
          message.error(error.response.data.message);
        });
    } else {
      message.error("Пройдите капчу");
    }
  }

  return (
    <>
      <div className="header__dark">
        <HeaderMain page="inside" />
      </div>
      <Layout className="catalog">
        <Content
          style={{
            padding: 15,
          }}
        >
          <Form
            name="normal_login"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
            className="login-form"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            onFinish={registrationUser}
          >
            <h2 style={{ textAlign: "center" }}>Регистрация</h2>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "Не верный E-mail!",
                },
                {
                  required: true,
                  message: "Пожалуйста введите E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Пароль"
              rules={[
                {
                  min: 6,
                  message: "Пароль должен быть длинее 6 символов!",
                },
                {
                  required: true,
                  message: "Пожалуйста введите пароль!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Подтвердите пароль"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Подтвердите пароль!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error("Введеные пароли не совпадают!!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 6,
              }}
            >
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LclVvweAAAAAO20-w1HgwEpTO-uVeqwliVrYGCl"
                onChange={checkCaptcha}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 6,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                disabled={!captcha}
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </>
  );
}

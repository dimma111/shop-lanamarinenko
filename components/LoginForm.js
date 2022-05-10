import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import {
  loginPending,
  loginSuccess,
  loginFail,
} from "../features/login/loginSlice";
import axios from "axios";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function LoginForm() {
  const dispatch = useDispatch();
  const { isLoading, isAuth, error } = useSelector((state) => state.login);

  const loginUser = async (values) => {
    dispatch(loginPending());

    try {
      await axios
        .post("http://localhost:5000/api/auth/login", {
          username: values.username,
          password: values.password,
        })
        .then(function (response) {
          message.success(response.data.message);
          console.log(response.data);
          dispatch(loginSuccess(response.data.user));
          localStorage.setItem("token", response.data.token);
          cookies.set("token", response.data.token);
          Router.push("/profile");
        })
        .catch(function (error) {
          message.error(error.response.data.message);
          dispatch(loginFail(error.response.data.message));
        });
    } catch (e) {
      message.error(e);
      dispatch(loginFail(e.message));
    }
  };

  return (
    <Form name="normal_login" className="login-form" onFinish={loginUser}>
      <h2 style={{ textAlign: "center" }}>Вход на сайт</h2>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Пожалуйста введите логин!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Логин"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Пожалуйста введите пароль!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Забыли пароль?
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          loading={isLoading}
        >
          Войти
        </Button>
        Или{" "}
        <Link href="/registration">
          <a>зарегистрироваться!</a>
        </Link>
      </Form.Item>
    </Form>
  );
}

import { Layout, Form, Input, Button, Checkbox } from "antd";
import React, { useState } from "react";
import HeaderMain from "../components/HeaderMain";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const { Content } = Layout;
  return (
    <>
      <div className="header__dark">
        <HeaderMain page="inside" />
      </div>
      <Layout className="catalog login">
        <Content
          style={{
            padding: 15,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoginForm />
        </Content>
      </Layout>
    </>
  );
}

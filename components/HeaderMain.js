import React from "react";
import { Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";

import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const { Header } = Layout;

export default function HeaderMain(props) {
  const isAuth = useSelector((state) => state.login.isAuth);

  return (
    <Header
      className={props.page != "inside" ? "header" : "header header__inside"}
      style={
        props.page != "inside"
          ? {
              maxWidth: 1190,
              margin: "20px auto 0",
              position: "relative",
              width: "100%",
              padding: "0 90px 0 20px",
            }
          : {
              padding: "15px 90px 15px 20px",
              height: 70,
            }
      }
    >
      <div className="header__logo">
        <a href="/">
          <Image
            src="/logo.png"
            alt="logo Lana Marinenko"
            layout="fill"
            objectFit="contain"
          />
        </a>
      </div>
      <Menu
        className="header__menu"
        theme="dark"
        mode="horizontal"
        style={{
          color: "#fff",
          background: "none",
          fontSize: 16,
          letterSpacing: "0.4px",
          fontFamily: "Roboto, sans-serif",
          color: "#fff",
          fontWeight: 400,
        }}
      >
        <Menu.Item key="1">
          <Link href="/">
            <a>Главная</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/catalog">
            <a>Каталог</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">О нас</Menu.Item>
        <Menu.Item key="4">Контакты</Menu.Item>
      </Menu>
      <div className="header__icons">
        <a href="#" className="header__icons__item">
          <ShoppingCartOutlined />
        </a>
        <Link href={isAuth ? "/profile" : "/login"}>
          <a className="header__icons__item">
            <UserOutlined />
          </a>
        </Link>
      </div>
    </Header>
  );
}

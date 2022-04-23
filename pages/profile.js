import { Layout, Tabs, Breadcrumb, Input, Form, Button, message } from "antd";
import React, { useState } from "react";
import HeaderMain from "../components/HeaderMain";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/login/loginSlice";
import Router from "next/router";

const { TabPane } = Tabs;

export default function Profile({ isAdmin }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.login);

  console.log(profile);
  const { Content } = Layout;
  return (
    <>
      <div className="header__dark">
        <HeaderMain page="inside" />
      </div>
      <Layout className="profile-page">
        <Content style={{ padding: 15 }}>
          <Breadcrumb style={{ marginBottom: 15 }}>
            <Breadcrumb.Item>
              <Link href="/">
                <a>Главная</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Профиль</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <h1>Ваш профиль</h1>
            <Tabs defaultActiveKey="1" tabPosition="left">
              <TabPane tab={`Личные данные`} key="1">
                <Form
                  labelCol={{ span: 4 }}
                  wrapperCol={{ span: 14 }}
                  layout="horizontal"
                >
                  <Form.Item label="Ваше имя" name="firstName">
                    <Input defaultValue={profile.firstName} maxLength={100} />
                  </Form.Item>
                  <Form.Item label="Ваша фамилия" name="lastName">
                    <Input defaultValue={profile.lastName} maxLength={100} />
                  </Form.Item>
                  <Form.Item label="Ваш email" name="email">
                    <Input
                      defaultValue={profile.email}
                      maxLength={100}
                      disabled={true}
                    />
                  </Form.Item>
                  <Form.Item label="Ваш номер телефона" name="phone">
                    <Input defaultValue={profile.phone} maxLength={26} />
                  </Form.Item>
                  <Form.Item label="Ваша страна" name="country">
                    <Input defaultValue={profile.country} maxLength={100} />
                  </Form.Item>
                  <Form.Item label="Ваш город" name="city">
                    <Input defaultValue={profile.city} maxLength={100} />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 4,
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ marginRight: 15 }}
                    >
                      Сохранить
                    </Button>
                    <Button
                      type="primary"
                      danger
                      onClick={() => {
                        dispatch(logout());
                        localStorage.removeItem("token");
                        Router.push("/login");
                        message.success("Вы успешно вышли");
                      }}
                    >
                      Выйти
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
              <TabPane tab={`Заказы`} key="2">
                Ваши заказы будут здесь
              </TabPane>
            </Tabs>
          </div>
        </Content>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const isAdmin = true;

  // Pass data to the page via props
  return { props: { isAdmin } };
}

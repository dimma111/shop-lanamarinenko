import { Layout, Card, Col, Row, Breadcrumb, Image, Radio } from "antd";
import React, { useState } from "react";
import HeaderMain from "../components/HeaderMain";
import Link from "next/link";
import ProductItem from "../components/catalog/ProductItem";

export default function Catalog() {
  const { Sider, Content } = Layout;
  return (
    <>
      <div className="header__dark">
        <HeaderMain page="inside" />
      </div>
      <Layout className="catalog">
        <Content style={{ padding: 15 }}>
          <Breadcrumb style={{ marginBottom: 15 }}>
            <Breadcrumb.Item>
              <Link href="/">
                <a>Главная</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Каталог</Breadcrumb.Item>
          </Breadcrumb>
          <div className="catalog__collections">
            <h2>Коллекции</h2>
            <Radio.Group defaultValue="a" size="large">
              <Radio.Button value="a">Все</Radio.Button>
              <Radio.Button value="b">Princesses</Radio.Button>
              <Radio.Button value="c">White crystal</Radio.Button>
              <Radio.Button value="d">Bloom</Radio.Button>
              <Radio.Button value="e">Lady in white</Radio.Button>
              <Radio.Button value="f">Eurochic</Radio.Button>
              <Radio.Button value="g">Crystal</Radio.Button>
              <Radio.Button value="h">Lanabohochic</Radio.Button>
              <Radio.Button value="i">Nicole</Radio.Button>
            </Radio.Group>
          </div>
          <Row gutter={[16, 16]}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </Row>
        </Content>
      </Layout>
    </>
  );
}

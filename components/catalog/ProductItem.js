import { Card, Col, Image, Button } from "antd";
import React, { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default function ProductItem() {
  const [visible, setVisible] = useState(false);

  return (
    <Col span={6}>
      <Card title="Платье из коллекции Crystal" bordered={false}>
        <Image
          preview={{ visible: false }}
          width={"100%"}
          src="https://lanamarinenko.com/upload/iblock/686/686878707e6d0a1c5662a8331b1e52ed.jpg"
          onClick={() => setVisible(true)}
        />
        <div className="product__data">
          <div className="product__price">
            <span>60 000 ₽</span>
            <div className="product__sizes">Доступные размеры: s, xl</div>
          </div>
          <Button
            type="primary"
            size="large"
            icon={<ShoppingCartOutlined style={{ fontSize: "20px" }} />}
          >
            В корзину
          </Button>
        </div>
        <div style={{ display: "none" }}>
          <Image.PreviewGroup
            preview={{
              visible,
              onVisibleChange: (vis) => setVisible(vis),
            }}
          >
            <Image src="https://lanamarinenko.com/upload/iblock/686/686878707e6d0a1c5662a8331b1e52ed.jpg" />
            <Image src="https://lanamarinenko.com/upload/iblock/ef3/ef3709277feccd903e1adb761c1cb1d4.jpg" />
          </Image.PreviewGroup>
        </div>
      </Card>
    </Col>
  );
}

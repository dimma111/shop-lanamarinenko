import { Card, Col, Image, Button, message } from "antd";
import React, { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../../features/cart/cartSlice";

export default function ProductItem(props) {
  const [visible, setVisible] = useState(false);
  const { price, name } = props.data;
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (product) => {
    setIsAdded(!isAdded);
    if (isAdded) {
      dispatch(deleteFromCart(product));
      message.success("Товар успешно удален");
    } else {
      dispatch(addToCart(product));
      message.success("Товар успешно добавлен");
    }
  };

  return (
    <Col lg={6} md={8} sm={12}>
      <Card title={name} bordered={false}>
        <Image
          preview={{ visible: false }}
          width={"100%"}
          src="https://lanamarinenko.com/upload/iblock/686/686878707e6d0a1c5662a8331b1e52ed.jpg"
          onClick={() => setVisible(true)}
        />
        <div className="product__data">
          <div className="product__price" style={{ paddingRight: 10 }}>
            <span>{price.toLocaleString()} ₽</span>
            <div className="product__sizes">Доступные размеры: s, xl</div>
          </div>
          <Button
            type="primary"
            size="large"
            icon={<ShoppingCartOutlined style={{ fontSize: "20px" }} />}
            onClick={() => handleAddToCart(props.data)}
          >
            {isAdded ? "Добавлено" : "В корзину"}
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

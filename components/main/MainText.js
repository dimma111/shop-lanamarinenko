import React from "react";
import { Button } from "antd";

export default function MainText() {
  return (
    <div>
      <h1 className="main__title">Онлайн магазин Свадебных платьев</h1>
      <div className="main__description">
        Приобретайте платья дизайнера Lana Marinenko онлайн в нашем
        интернет-магазине по самым выгодным ценам!
      </div>
      <Button
        type="default"
        shape="round"
        size="large"
        style={{ marginTop: 20 }}
      >
        Начать покупки!
      </Button>
    </div>
  );
}

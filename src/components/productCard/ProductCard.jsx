import React from "react";
import "./ProductCard.css";

export default function ProductCard(props) {
  return (
    <div className="productCardContainer" onClick={props.onClick}>
      <div
        className="productCardImg"
        style={{
          backgroundImage: `url(https://pyxis.nymag.com/v1/imgs/a98/d0a/ad37aae9d281b562d1afe26fdc8a28cbd6.rsquare.w600.jpg)`,
        }}
      ></div>
      <div className="productInfo">
        <h3 className="productName">Fila Disruptor</h3>
        <h3 className="productPrice">Rp 1.500.000</h3>
      </div>
    </div>
  );
}

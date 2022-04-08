import React from "react";
import "./ProductCard.css";

export default function ProductCard(props) {
  return (
    <div className="productCardContainer" onClick={props.onClick}>
      <div
        className="productCardImg"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      ></div>
      <div className="productInfo">
        <h3 className="productName">{props.title}</h3>
        <h3 className="productPrice">Rp {`${props.price}`}</h3>
      </div>
    </div>
  );
}

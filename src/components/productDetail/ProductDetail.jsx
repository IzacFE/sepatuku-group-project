import React from "react";

import "./ProductDetail.css";

export default function ProductDetail(props) {
  return (
    <div className="detailContainer">
      <section className="leftSectionDetail">
        <div
          className="detailImg"
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        ></div>
      </section>
      <section className="rightSectionDetail">
        <div className="detailContent">{props.children}</div>
      </section>
    </div>
  );
}

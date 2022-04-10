import React from "react";
import "./ProdukProfile.css";

import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function ProdukProfile(props) {
  return (
    <>
      <div className="produkUserContainer">
        <div
          className="produkUserImg"
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        />
        <div className="productUserInfo">
          <OverlayTrigger
            key={"left"}
            placement={"left"}
            overlay={
              <Tooltip id={"left"}>
                <strong>Klik</strong> untuk informasi lebih
              </Tooltip>
            }
          >
            <div className="productProfileEllipContain">
              <i
                className="fa-solid fa-ellipsis productProfileEllipsis"
                onClick={props.onClick}
              />
            </div>
          </OverlayTrigger>
          <h2>
            {props.name}
            <br />
            {props.price}
          </h2>
        </div>
      </div>
    </>
  );
}

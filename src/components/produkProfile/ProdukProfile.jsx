import React from "react";
import "./ProdukProfile.css";

export default function ProdukProfile(props) {
  return (
    <>
      <div className="produkUserContainer">
        <div
          className="produkUserImg"
          style={{
            backgroundImage: `url(https://pyxis.nymag.com/v1/imgs/a98/d0a/ad37aae9d281b562d1afe26fdc8a28cbd6.rsquare.w600.jpg)`,
          }}
        />
        <div className="productUserInfo">
          <div className="productProfileEllipContain">
            <i className="fa-solid fa-ellipsis productProfileEllipsis" />
          </div>
          <h2>
            Fila Gladiator
            <br />
            Rp 1.500.000
          </h2>
        </div>
      </div>
    </>
  );
}

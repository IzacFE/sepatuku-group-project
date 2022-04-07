import React from "react";
import "./ProdukProfile.css";
import LongButton from "../longButton/LongButton";

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
        <div className="produkUserDetail">
          <h2>
            Fila Gladiator
            <br />
            Rp 1.500.000
          </h2>
        </div>
        <div className="produkUserButtons">
          <LongButton text={"Detail"} onCLick={props.onClick} />
          <LongButton text={"Edit"} onCLick={props.clickEdit} />
          <div className="profileRemoveProduct">
            <i className="fa-regular fa-circle-xmark" />
            <br />
            Hapus
          </div>
        </div>
      </div>
    </>
  );
}

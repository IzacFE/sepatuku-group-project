import React from "react";
import LongButton from "../../components/longButton/LongButton";
import "./Detail.css";

export default function Detail() {
  return (
    <>
      <div className="detailContainer">
        <section className="leftSectionDetail">
          <div
            className="detailImg"
            style={{
              backgroundImage: `url(https://pyxis.nymag.com/v1/imgs/a98/d0a/ad37aae9d281b562d1afe26fdc8a28cbd6.rsquare.w600.jpg)`,
            }}
          ></div>
        </section>
        <section className="rightSectionDetail">
          <div className="detailContent">
            <h1 className="detailProductName">Fila Disruptor</h1>
            <h1 className="detailProductPrice">Rp 1.500.000</h1>
            <h2 className="detailStock">Stok Produk : 20</h2>
            <p>
              Deskripsi Produk:
              <br /> Colorway : Core Black Article : (FX8384) Brand New in Box
              (BNIB) / Tag (BNWT) Online. On The Streets. Always Moving. These
              Adidas Running Shoes Keep Pace With It All. A Breathable Mesh
              Upper Sheds Heat On Warm Days While Bounce Cushioning Provides
              Comfort And Flexibility. This Pair Of Shoes Features An
              Algae-based Eva Foam.
            </p>
          </div>
          <LongButton text={"Tambah ke Keranjang"} />
        </section>
      </div>
    </>
  );
}

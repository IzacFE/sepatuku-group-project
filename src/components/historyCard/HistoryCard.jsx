import React from "react";
import "./HistoryCard.css";

export default function HistoryCard() {
  return (
    <div>
      <div className="historyCard">
        <div
          className="historyImg"
          style={{
            backgroundImage: `url(https://pyxis.nymag.com/v1/imgs/a98/d0a/ad37aae9d281b562d1afe26fdc8a28cbd6.rsquare.w600.jpg)`,
          }}
        />

        <div className="historyFlexCtrl">
          <div className="historyDetail">
            <section>
              <h2>Fila Disruptor</h2>
              <h2>Jumlah Barang : 2</h2>
              <h2>
                Total Harga :
                <span className="historyMobile">
                  <br />
                </span>{" "}
                Rp 3.000.000
              </h2>
            </section>
          </div>

          <div className="cancelContainer">
            <p>
              <i className="fa-regular fa-circle-xmark" />
              <br />
              Batalkan Pesanan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

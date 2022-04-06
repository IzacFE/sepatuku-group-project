import React from "react";
import "./Cart.css";

export default function Cart() {
  return (
    <>
      <div className="cartPageContainer">
        <h1>KERANJANG</h1>
        <div className="cartContainer">
          <div className="cartHeaderTable">
            <p className="headerProduct">Produk</p>
            <p className="headerQuantity">Jumlah</p>
            <p className="headerSubTotal">Sub-total</p>
          </div>

          <div className="cartListContainer">
            <div className="cartProductContainer">
              <div className="cartProduct">
                <div
                  className="cartImg"
                  style={{
                    backgroundImage: `url(https://pyxis.nymag.com/v1/imgs/a98/d0a/ad37aae9d281b562d1afe26fdc8a28cbd6.rsquare.w600.jpg)`,
                  }}
                />

                <div className="cartDescription">
                  <h3 className="cartName">Fila Disruptor</h3>
                  <p className="cartItemPrice">Per Potong : Rp 1.500.000</p>
                </div>
              </div>

              <div className="cartRightSide">
                <div className="cartQuantity">
                  <span className="cartMobile">
                    Jumlah
                    <br />
                  </span>
                  2
                </div>
                <div className="cartTotalProduct">
                  <span className="cartMobile">
                    Sub-Total
                    <br />
                  </span>
                  Rp 3.000.000
                </div>
                <div className="cartRemoveProduct">
                  <i class="fa-regular fa-circle-xmark" />
                  <br />
                  Hapus
                </div>
              </div>
            </div>

            <div className="cartProductContainer">
              <div className="cartProduct">
                <div
                  className="cartImg"
                  style={{
                    backgroundImage: `url(https://pyxis.nymag.com/v1/imgs/a98/d0a/ad37aae9d281b562d1afe26fdc8a28cbd6.rsquare.w600.jpg)`,
                  }}
                />

                <div className="cartDescription">
                  <h3 className="cartName">Fila Disruptor</h3>
                  <p className="cartItemPrice">Per Potong : Rp 1.500.000</p>
                </div>
              </div>

              <div className="cartRightSide">
                <div className="cartQuantity">
                  <span className="cartMobile">
                    Jumlah
                    <br />
                  </span>
                  2
                </div>
                <div className="cartTotalProduct">
                  <span className="cartMobile">
                    Sub-Total
                    <br />
                  </span>
                  Rp 3.000.000
                </div>
                <div className="cartRemoveProduct">
                  <i class="fa-regular fa-circle-xmark" />
                  <br />
                  Hapus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

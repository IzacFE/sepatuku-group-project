import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";

import LongButton from "../../components/longButton/LongButton";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [isReady, setIsReady] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`/carts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        //  setMovies(response.data.results.slice(0, 8));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsReady(true));
  };

  // const updateData = async () => {
  //   await axios
  //     .put(`/carts/${"id"}`)
  //     .then((response) => {
  //       console.log(response);
  //       //  setMovies(response.data.results.slice(0, 8));
  //     })
  //     .catch((err) => {
  //       console.log("error");
  //     })
  //     .finally(() => setIsReady(true));
  // };

  // const deleteData = async () => {
  //   await axios
  //     .delete(`/carts/${"id"}`)
  //     .then((response) => {
  //       console.log(response);
  //       //  setMovies(response.data.results.slice(0, 8));
  //     })
  //     .catch((err) => {
  //       console.log("error");
  //     })
  //     .finally(() => setIsReady(true));
  // };

  // // MASIH SALAH
  // const createOrder = async () => {
  //   await axios
  //     .post(`52.87.250.27:8080/api/v1/carts/${"id"}`)
  //     .then((response) => {
  //       console.log(response);
  //       //  setMovies(response.data.results.slice(0, 8));
  //     })
  //     .catch((err) => {
  //       console.log("error");
  //     })
  //     .finally(() => setIsReady(true));
  // };

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
                  <i className="fa-regular fa-circle-xmark" />
                  <br />
                  Hapus
                </div>
              </div>
            </div>
          </div>

          <section className="cartTotalContainer">
            <div className="cartTotalBox">
              <div className="cartTotalText">
                <h2>Jumlah Barang :</h2>
                <h2>2</h2>
              </div>
              <div className="cartTotalText">
                <h2>Ongkos Kirim :</h2>
                <h2>Gratis</h2>
              </div>
              <div className="cartTotalText">
                <h2>Total Harga :</h2>
                <h2>Rp 3.000.000</h2>
              </div>

              <div className="cartBuyButton">
                <LongButton
                  text={"Pesan Sekarang"}
                  onClick={() => {
                    navigate("/order");
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

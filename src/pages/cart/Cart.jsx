import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";

import LongButton from "../../components/longButton/LongButton";
import { useNavigate } from "react-router-dom";
import LoadSpin from "../../components/loadSpin/LoadSpin";

export default function Cart() {
  const [isReady, setIsReady] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  // let totalQty = 0

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
        setCartData(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsReady(true));
  };

  const deleteProduct = async (id) => {
    setIsReady(false);
    await axios
      .delete(`/carts/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("error");
      });
    fetchData();
  };

  const handleDecrement = (card_id, qty, card_price) => {
    setCartData((cartData) =>
      cartData.map((item) =>
        card_id === item.ID
          ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) }
          : item
      )
    );
    if (qty > 1) {
      setTotalQuantity(totalQuantity - 1);
      setTotalPrice(totalPrice - card_price);
    }
  };

  const handleIncrement = (card_id, card_price) => {
    setCartData((cartData) =>
      cartData.map((item) =>
        card_id === item.ID ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setTotalQuantity(totalQuantity + 1);
    setTotalPrice(totalPrice + card_price);
  };

  let result;
  if (isReady) {
    result = (
      <div className="cartPageContainer">
        <h1>KERANJANG</h1>
        <div className="cartContainer">
          <div className="cartHeaderTable">
            <p className="headerProduct">Produk</p>
            <p className="headerQuantity">Jumlah</p>
            <p className="headerSubTotal">Sub-total</p>
          </div>

          <div className="cartListContainer">
            {cartData.map((item, index) => {
              return (
                <div key={item.ID} className="cartProductContainer">
                  <div className="cartProduct">
                    <div
                      className="cartImg"
                      style={{
                        backgroundImage: `url(${item.Product.image})`,
                      }}
                    />

                    <div className="cartDescription">
                      <h3 className="cartName">{item.Product.name_product}</h3>
                      <p className="cartItemPrice">
                        Per Potong : Rp {item.Product.price}
                      </p>
                    </div>
                  </div>

                  <div className="cartRightSide">
                    <div className="cartQuantity">
                      <span className="cartMobile">
                        Jumlah
                        <br />
                      </span>
                      <div className="quantityButton">
                        <i
                          className="fa-solid fa-minus"
                          onClick={() => {
                            handleDecrement(
                              item.ID,
                              item.quantity,
                              item.Product.price
                            );
                          }}
                        />
                        <p className="itemQuantity">{item.quantity}</p>

                        <i
                          className="fa-solid fa-plus"
                          onClick={() => {
                            handleIncrement(item.ID, item.Product.price);
                          }}
                        />
                      </div>
                    </div>
                    <div className="cartTotalProduct">
                      <span className="cartMobile">
                        Sub-Total
                        <br />
                      </span>
                      Rp {item.Product.price * item.quantity}
                    </div>
                    <div
                      className="cartRemoveProduct"
                      onClick={() => {
                        deleteProduct(item.ID);
                      }}
                    >
                      <i className="fa-regular fa-circle-xmark" />
                      <br />
                      Hapus
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <section className="cartTotalContainer">
            <div className="cartTotalBox">
              <div className="cartTotalText">
                <h2>Jumlah Barang :</h2>
                <h2>{totalQuantity}</h2>
              </div>
              <div className="cartTotalText">
                <h2>Ongkos Kirim :</h2>
                <h2>Gratis</h2>
              </div>
              <div className="cartTotalText">
                <h2>Total Harga :</h2>
                <h2>Rp {totalPrice}</h2>
              </div>

              <div className="cartBuyButton">
                <LongButton
                  text={"Pesan Sekarang"}
                  onClick={() => {
                    navigate("/order", {
                      state: { quantity: totalQuantity, price: totalPrice },
                    });
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  } else {
    result = <LoadSpin />;
  }

  return <>{result}</>;
}

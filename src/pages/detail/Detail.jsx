import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

import LongButton from "../../components/longButton/LongButton";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import "./Detail.css";

export default function Detail() {
  let navigate = useNavigate();
  let params = useParams();

  const [isReady, setIsReady] = useState(false);
  const [dataProductId, setDataProductId] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`/products/${params.id}`)
      .then((response) => {
        setDataProductId(response.data.data);
        console.log(response.data.data);
        setToken(localStorage.getItem("token"));
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  const createToCart = async () => {
    await axios
      .post(
        `/carts`,
        { user_id: dataProductId.user_id, product_id: dataProductId.ID },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert("berhasil");
      })
      .catch((err) => {
        console.log(err);
        alert("gagal");
      })
      .finally(() => setIsReady(true));
  };

  const addCart = () => {
    if (token) {
      createToCart();
    } else {
      navigate("/signin");
    }
  };

  let result;
  if (isReady) {
    result = (
      <>
        <div className="detailContainer">
          <section className="leftSectionDetail">
            <div
              className="detailImg"
              style={{
                backgroundImage: `url(${dataProductId.image})`,
              }}
            ></div>
          </section>
          <section className="rightSectionDetail">
            <div className="detailContent">
              <h1 className="detailProductName">
                {dataProductId.name_product}
              </h1>
              <h1 className="detailProductPrice">Rp {dataProductId.price}</h1>
              <h2 className="detailStock">
                Stok Produk : {dataProductId.stock}
              </h2>
              <p>
                Deskripsi Produk:
                <br />
                {dataProductId.description}
              </p>
            </div>
            <LongButton
              onClick={() => {
                addCart();
              }}
              text={"Tambah ke Keranjang"}
            />
          </section>
        </div>
      </>
    );
  } else {
    result = <LoadSpin />;
  }

  return <>{result}</>;
}

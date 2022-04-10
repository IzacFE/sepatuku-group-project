import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

import LongButton from "../../components/longButton/LongButton";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import "./Detail.css";
import ProductDetail from "../../components/productDetail/ProductDetail";

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
        { product_id: dataProductId.ID, status: "available" },
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
        <div className="detailPageContainer">
          <ProductDetail image={dataProductId.image}>
            <h1 className="detailProductName">{dataProductId.name_product}</h1>
            <h1 className="detailProductPrice">Rp {dataProductId.price}</h1>
            <p>
              Terakhir dirubah : {dataProductId.CreatedAt.slice(0, 10)}
              <br />
              <br />
              Deskripsi Produk:
              <br />
              {dataProductId.description}
            </p>
            <LongButton
              onClick={() => {
                addCart();
              }}
              text={"Tambah ke Keranjang"}
            />
          </ProductDetail>
        </div>
      </>
    );
  } else {
    result = <LoadSpin />;
  }

  return <>{result}</>;
}

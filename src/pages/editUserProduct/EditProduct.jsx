import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

import LoadSpin from "../../components/loadSpin/LoadSpin";
import ProductDetail from "../../components/productDetail/ProductDetail";
import ProductForm from "../../components/newProductForm/ProductForm";
import "./EditProduct.css";

export default function EditProduct() {
  let params = useParams();
  const navigate = useNavigate();

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
        alert("gagal fetching");
      })
      .finally(() => setIsReady(true));
  };

  const EditProduct = async (
    nameProduct,
    description,
    price,
    stock,
    picture
  ) => {
    let priceInt = +price;
    let stockInt = +stock;
    console.log(params.id);
    setIsReady(false);

    await axios
      .put(
        `/products/${params.id}`,
        {
          name_product: nameProduct,
          description,
          price: priceInt,
          image: picture,
          stock: stockInt,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    fetchData();
  };

  const deleteProduct = async () => {
    await axios
      .delete(`/products/${params.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setDataProductId(response.data.data);
        console.log(response.data.data);
        setToken(localStorage.getItem("token"));
      })
      .catch((err) => {
        console.log(err);
        alert("gagal fetching");
      })
      .finally(() => setIsReady(true));
  };

  let result;
  if (isReady) {
    result = (
      <>
        <div className="editUserProductLayout">
          <div className="editProductDetailContainer">
            <ProductDetail image={dataProductId.image}>
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
              <div
                className="buttonDeleteProduct"
                onClick={() => {
                  deleteProduct();
                  navigate("/user-product");
                }}
              >
                <p>
                  <i className="fa-solid fa-trash-can" />
                  {"  "}Hapus Produk
                </p>
              </div>
            </ProductDetail>
          </div>

          <div className="editProductForm">
            <h2>Rubah Detail Produk</h2>
            <ProductForm
              onSubmit={(nameProduct, description, price, stock, picture) => {
                EditProduct(nameProduct, description, price, stock, picture);
              }}
            />
          </div>
        </div>
      </>
    );
  } else {
    result = <LoadSpin />;
  }

  return <>{result}</>;
}

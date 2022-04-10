import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserProduct.css";

import ProductForm from "../../components/newProductForm/ProductForm";
import ProdukProfile from "../../components/produkProfile/ProdukProfile";
import LoadSpin from "../../components/loadSpin/LoadSpin";

export default function UserProduct() {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const [productData, setProductData] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`/users/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setProductData(response.data.data_product);
        setDataUser(response.data.data_user);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsReady(true));
  };

  const addProduct = async (
    nameProduct,
    description,
    price,
    stock,
    picture
  ) => {
    let priceInt = +price;
    let stockInt = +stock;

    setIsReady(true);
    await axios
      .post(
        `/products`,
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
        // {name_products:}
      )
      .then(alert("success"))
      .catch((error) => console.log(error));
    fetchData();
  };

  // const updateData = async () => {
  //   await axios
  //     .put(`/products/${"id"}`,{username:"",email,password})
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
  //     .delete(`52.87.250.27:8080/api/v1/products/${"id"}`)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log("error");
  //     })
  //     .finally(() => setIsReady(true));
  // };

  // const createData = async () => {
  //   await axios
  //     .post(`52.87.250.27:8080/api/v1/products/`)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log("error");
  //     })
  //     .finally(() => setIsReady(true));
  // };
  let result;
  if (isReady) {
    result = (
      <>
        <div className="userProductLayout">
          <div className="newProductContainer">
            <h2 className="profileProductHeader">Tambah Produk Dagangan</h2>
            <ProductForm
              onSubmit={(nameProduct, description, price, stock, picture) => {
                addProduct(nameProduct, description, price, stock, picture);
              }}
            />
          </div>
          <h2 className="profileProductHeader">Produk Dagangan</h2>
          <div className="profileProdukDagangan">
            {productData.map((item) => {
              return (
                <ProdukProfile
                  image={item.image}
                  name={item.name_product}
                  price={item.price}
                  onClick={() => {
                    navigate(`/user-product/${item.ID}`);
                    console.log("clicked");
                  }}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    result = <LoadSpin />;
  }

  return <>{result}</>;
}

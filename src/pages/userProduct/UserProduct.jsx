import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserProduct.css";

import NewProductForm from "../../components/newProductForm/NewProductForm";
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
    console.log(nameProduct);
    console.log(description);
    console.log(price);
    console.log(stock);
    console.log(picture);
    // await axios
    //   .post(
    //     `/products`
    //     // {name_products:}
    //   )
    //   .then(alert("success"))
    //   .catch((error) => console.log(error));
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
            <NewProductForm
              onSubmit={(nameProduct, description, price, stock, picture) => {
                addProduct(nameProduct, description, price, stock, picture);
              }}
            />
          </div>
          <h2 className="profileProductHeader">Produk Dagangan</h2>
          <div className="profileProdukDagangan">
            <ProdukProfile
              onClick={() => {
                navigate("/");
              }}
              // clickEdit={() => {
              //   navigate("/edit");
              // }}
            />
            <ProdukProfile
              onClick={() => {
                navigate("/detail");
              }}
              // clickEdit={() => {
              //   navigate("/edit");
              // }}
            />
            <ProdukProfile
              onClick={() => {
                navigate("/detail");
              }}
              // clickEdit={() => {
              //   navigate("/edit");
              // }}
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

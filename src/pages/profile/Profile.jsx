import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

import ProfileCard from "../../components/profileCard/ProfileCard";
import ProdukProfile from "../../components/produkProfile/ProdukProfile";
import NewProductForm from "../../components/newProductForm/NewProductForm";

export default function Profile() {
  const navigate = useNavigate();
  // const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   await axios
  //     .get(`/products/${"id"}`)
  //     .then((response) => {
  //       console.log(response);
  //       //  setMovies(response.data.results.slice(0, 8));
  //     })
  //     .catch((err) => {
  //       console.log("error");
  //     })
  //     .finally(() => setIsReady(true));
  // };

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

  return (
    <div className="profileContainer">
      <div className="profileBio">
        <ProfileCard />
      </div>

      <h2 className="profileProductHeader">Tambah Produk Dagangan</h2>
      <div className="newProductContainer">
        <NewProductForm />
      </div>

      <h2 className="profileProductHeader">Produk Dagangan</h2>
      <div className="profileProdukDagangan">
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
  );
}

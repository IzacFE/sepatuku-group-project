import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

import ProfileCard from "../../components/profileCard/ProfileCard";
import ProdukProfile from "../../components/produkProfile/ProdukProfile";
import NewProductForm from "../../components/newProductForm/NewProductForm";

export default function Profile() {
  const navigate = useNavigate();

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

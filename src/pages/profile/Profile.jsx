import React from "react";
import "./Profile.css";

import ProfileCard from "../../components/profileCard/ProfileCard";
import ProdukProfile from "../../components/produkProfile/ProdukProfile";
import NewProductForm from "../../components/newProductForm/NewProductForm";

export default function Profile() {
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
        <ProdukProfile />
        <ProdukProfile />
        <ProdukProfile />
      </div>
    </div>
  );
}

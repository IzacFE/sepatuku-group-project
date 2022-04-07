import React from "react";
import "./Home.css";

import ProductCard from "../../components/productCard/ProductCard";
import HomePagin from "../../components/pagination/HomePagin";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="homeContainer">
        <div className="homeSearch">
          <div className="searchFormContainer">
            <form>
              <input className="searchForm" type="text" placeholder="Cari..." />
              <i className="fa-solid fa-magnifying-glass" />
            </form>
          </div>
        </div>
        <div className="homeProductContainer">
          <ProductCard
            onClick={() => {
              navigate("/detail");
            }}
          />
          <ProductCard
            onClick={() => {
              navigate("/detail");
            }}
          />
          <ProductCard
            onClick={() => {
              navigate("/detail");
            }}
          />
          <ProductCard
            onClick={() => {
              navigate("/detail");
            }}
          />
          <ProductCard
            onClick={() => {
              navigate("/detail");
            }}
          />
          <ProductCard
            onClick={() => {
              navigate("/detail");
            }}
          />
          <ProductCard
            onClick={() => {
              navigate("/detail");
            }}
          />
          <ProductCard
            onClick={() => {
              navigate("/detail");
            }}
          />
        </div>
        <HomePagin />
      </div>
    </>
  );
}

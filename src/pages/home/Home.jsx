import React from "react";
import "./Home.css";

import ProductCard from "../../components/productCard/ProductCard";
import HomePagin from "../../components/pagination/HomePagin";

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="homeSearch"></div>
        <div className="homeProductContainer">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <HomePagin />
      </div>
    </>
  );
}

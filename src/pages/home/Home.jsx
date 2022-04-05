import React from "react";
import "./Home.css";

import Layout from "../../components/layout/Layout";
import ProductCard from "../../components/productCard/ProductCard";
import HomePagin from "../../components/pagination/HomePagin";

export default function Home() {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}

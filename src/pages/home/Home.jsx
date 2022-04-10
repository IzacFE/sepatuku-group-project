import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

import ProductCard from "../../components/productCard/ProductCard";
import LoadSpin from "../../components/loadSpin/LoadSpin";
import HomePagin from "../../components/pagination/HomePagin";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const [dataProduct, setDataProduct] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [sliceValue, setSliceValue] = useState(16);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`/products`)
      .then((response) => {
        setDataProduct(response.data.data);
        setDisplayedData(response.data.data.slice(0, 8));
      })
      .catch((err) => {
        console.log("error");
      })
      .finally(() => setIsReady(true));
  };

  const escapeRegExp = (value) => {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };

  const requestSearch = (searchValue) => {
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredData = dataProduct.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field] ? row[field] : null);
      });
    });
    setDisplayedData(filteredData);
  };

  let result;
  if (isReady) {
    result = (
      <>
        <div className="homeSearch">
          <div className="searchFormContainer">
            <form>
              <input
                className="searchForm"
                type="text"
                placeholder="Cari..."
                onChange={(e) => requestSearch(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass" />
            </form>
          </div>
        </div>
        <div className="homeProductContainer">
          {displayedData.map((item, index) => {
            return (
              <ProductCard
                key={index}
                image={
                  item.image
                    ? item.image
                    : `https://via.placeholder.com/400x400?text=Image+Not+available`
                }
                title={item.name_product}
                price={item.price}
                onClick={() => {
                  navigate(`/detail/${item.ID}`);
                }}
              />
            );
          })}
        </div>
        <div
          className="longButtonContainer viewMoreHome"
          onClick={async () => {
            await setSliceValue(sliceValue + 8);
            setDisplayedData(dataProduct.slice(0, sliceValue));
          }}
        >
          <p>Perlihatkan Lebih</p>
        </div>
      </>
    );
  } else {
    result = <LoadSpin />;
  }

  return (
    <>
      <div className="homeContainer">{result}</div>
    </>
  );
}

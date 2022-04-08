import React, { useEffect, useState } from "react";
import axios from "axios";

import HistoryCard from "../../components/historyCard/HistoryCard";
import "./History.css";

export default function History() {
  const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   await axios
  //     .get(`52.87.250.27:8080/api/v1/orders`)
  //     .then((response) => {
  //       console.log(response);
  //       //  setMovies(response.data.results.slice(0, 8));
  //     })
  //     .catch((err) => {
  //       console.log("error");
  //     })
  //     .finally(() => setIsReady(true));
  // };

  return (
    <>
      <div className="historyContainer">
        <h1 className="historyHeader">Riwayat Pembelian</h1>
        <div className="historyCardContainer">
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </div>
      </div>
    </>
  );
}

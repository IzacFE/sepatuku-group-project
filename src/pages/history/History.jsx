import React from "react";
import HistoryCard from "../../components/historyCard/HistoryCard";
import "./History.css";

export default function History() {
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

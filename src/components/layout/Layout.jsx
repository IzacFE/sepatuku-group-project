import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./Layout.css";

export default function Layout(props) {
  return (
    <>
      <div className="layoutContainer">
        <Navbar />
        <section className="layoutSection">{props.children}</section>
      </div>
      <Footer />
    </>
  );
}

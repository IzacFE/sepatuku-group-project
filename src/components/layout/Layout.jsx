import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./Layout.css";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <div className="layoutContainer">{props.children}</div>;
      <Footer />
    </>
  );
}

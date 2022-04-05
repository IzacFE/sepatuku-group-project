import React from "react";
import "./Layout.css";

export default function Layout(props) {
  return <div className="layoutContainer">{props.children}</div>;
}

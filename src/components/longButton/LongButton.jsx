import React from "react";
import "./LongButton.css";

export default function LongButton(props) {
  return (
    <div className="longButtonContainer">
      <p>{props.text}</p>
    </div>
  );
}

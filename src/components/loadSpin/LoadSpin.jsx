import React from "react";
import "./LoadSpin.css";

export default function LoadSpin() {
  return (
    <div className="spinnerScreen">
      <div className="spinnerContainer">
        <div className="spinner">
          <div className="innerSpinner">Loading</div>
        </div>
      </div>
    </div>
  );
}

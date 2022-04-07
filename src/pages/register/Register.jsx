import React from "react";
import "./Register.css"

import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="signupWrapper">
      <div className="signupBox">
        <div className="signupContent">
          <h2>Masuk</h2>
          <p>Masuk untuk berbelanja</p>
          <form>
            <input type="text" placeholder="Username Anda" />
            <input type="text" placeholder="Kata Sandi Anda" />
            <button onClick={() => navigate("/")}>Masuk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

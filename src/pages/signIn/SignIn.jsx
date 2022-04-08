import React from "react";
import "./SignIn.css"

import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="signinWrapper">
      <div className="signinBox">
        <div className="signinContent">
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

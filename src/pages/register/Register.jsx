import React, { useState, useEffect } from "react";
import "./Register.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    await axios
      .post("users/", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signupWrapper">
      <div className="signupBox">
        <div className="signupContent">
          <h2>Daftar</h2>
          <p>Buat akun anda</p>
          <form>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username Anda"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Anda"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Kata Sandi Anda"
            />
            <button
              type="button"
              onClick={() => {
                handleSignUp();
                navigate("/signin");
              }}
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

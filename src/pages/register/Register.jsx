import React, { useState } from "react";
import "./Register.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignUp = async (e) => {
    await axios
      .post("users/", {
        username: username,
        email: email,
        password: password,
        address: address,
        phone: phone,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/signin");
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
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Alamat Anda"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Nomor Hp Anda"
            />
            <button
              type="button"
              onClick={(e) => handleSignUp(e)}
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

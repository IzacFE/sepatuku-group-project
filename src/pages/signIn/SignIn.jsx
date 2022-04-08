import React, { useState } from "react";
import "./SignIn.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    await axios
      .post("/auth", {
        username: "username",
        email: "email",
        password: "password",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signinWrapper">
      <div className="signinBox">
        <div className="signinContent">
          <h2>Masuk</h2>
          <p>Masuk untuk berbelanja</p>
          <form onSubmit={(e) => handleSignUp(e)}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username Anda"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Kata Sandi Anda"
            />
            <button>Masuk</button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* 
pertama post username dan email ke api, nanti responsenya kalau berhasil maka akan mendapatkan sekumpulan data dalam objek, kamu ambil token terus masukan ke local storage

  localStorage.setItem(
                    "detail",
                    JSON.stringify(response.data.token)
                  );

 */

import React, { useState, useEffect } from "react";
import "./SignIn.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() =>{
    if(localStorage.getItem('token')) {
      
      navigate("/")
    }
  }, [])

  const handleSignIn = async (e) => {
    e.preventDefault();
    await axios
      .post(`/auth`, {
        identifier: username,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        window.location.reload(false);
        alert("login sukses");
        navigate("/");
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
          <form>
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
            <button onClick={(e) => handleSignIn(e)}>Masuk</button>
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

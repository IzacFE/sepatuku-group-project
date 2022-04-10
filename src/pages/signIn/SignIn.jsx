import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./SignIn.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertError, setAlertError] = useState();

  useEffect(() =>{
    if(localStorage.getItem("token")){
      setTimeout(() => {
        navigate("/");
      }, 2300);
    }
  }, [navigate])

  const handleSignIn = async (e) => {
    e.preventDefault();
    await axios
      .post(`/auth`, {
        identifier: username,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        if(response) {
          if(response.data){
            setUsername("");
            setPassword("");
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1500
            })
            window.location.reload();
          }
        }
      })
      .catch((error) => {
        setUsername("");
        setPassword("");
        setAlertError(error.response.data.message);
        setTimeout(() => {
          setAlertError("")
        },1500)
      });
  };

  return (
    <div className="signinWrapper">
      <div className="signinBox">
        <div className="signinContent">
          <h2>Masuk</h2>
          <p>Masuk untuk berbelanja</p>
          {
            alertError && (
              <div className="signinAlert">
            <p>{alertError}</p>
          </div>
            )
          }
          <form>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username Anda" required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Kata Sandi Anda" required
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

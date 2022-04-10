import React, { useState } from "react";
import "./Register.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [alertError, setAlertError] = useState();

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
        // console.log(response.data);
        // navigate("/signin");
        if(response){
          if(response.data){
            setUsername("");
            setEmail("");
            setPassword("");
            setAddress("");
            setPhone("");
            Swal.fire({
              icon: 'success',
              title: response.data.message,
              confirmButtonText: 'OK',
            }).then((result) => {
              if(result.isConfirmed){
               navigate("/signin")
              }
            })
          }
        }
      })
      .catch((err) => {
        setAlertError(err.response.data.message);
        setTimeout(() => {
          setAlertError("")
        },1500)
      });
  };

  return (
    <div className="signupWrapper">
      <div className="signupBox">
        <div className="signupContent">
          <h2>Daftar</h2>
          <p>Buat akun anda</p>
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

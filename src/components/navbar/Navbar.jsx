import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const navButton = () => {
    if (token) {
      return (
        <>
          <li
            className="navCartButton"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <h3 className="navMobileText">
              <i className="fa-solid fa-cart-shopping" />
              <span> Keranjang</span>
            </h3>
          </li>
          <li
            className="navUserButton"
            onClick={() => {
              navigate("/profile");
            }}
          >
            <h3 className="navMobileText">
              <i className="fa-regular fa-circle-user" />
              <span> Profil</span>
            </h3>
          </li>

          <li
            onClick={() => {
              logOut();
              alert("berhasil keluar");
              refreshPage();
              navigate("/");
            }}
          >
            <div className="navSignIn">Keluar</div>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li
            onClick={() => {
              navigate("/signin");
            }}
          >
            <div className="navSignIn">Masuk</div>
          </li>
          <li
            onClick={() => {
              navigate("/register");
            }}
          >
            <div className="navRegister">Daftar</div>
          </li>
        </>
      );
    }
  };

  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <div
        className="navbarLogo"
        onClick={() => {
          navigate("/");
        }}
      >
        <div className="navLogoImg" />
        <h1 className="navLogoText">SEPATUKU</h1>
      </div>

      <ul className="ulNavbar">{navButton()}</ul>
    </nav>
  );
}

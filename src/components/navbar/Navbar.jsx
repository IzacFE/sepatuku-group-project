import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <div className="navbarLogo">
        <div className="navLogoImg" />
        <h1 className="navLogoText">SEPATUKU</h1>
      </div>

      <ul className="ulNavbar">
        <li>
          <h3 className="navHomeButton">Home</h3>
        </li>
        <li className="navCartButton">
          <h3 className="navMobileText">
            <i class="fa-solid fa-cart-shopping" />
            <span> Keranjang</span>
          </h3>
        </li>
        <li className="navUserButton">
          <h3 className="navMobileText">
            <i class="fa-regular fa-circle-user" />
            <span> Profil</span>
          </h3>
        </li>
        <li>
          <div className="navSignIn">Masuk</div>
        </li>
        <li>
          <div className="navRegister">Daftar</div>
        </li>
      </ul>
    </nav>
  );
}

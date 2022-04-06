import React from "react";
import "./ProfileCard.css";

import LongButton from "../longButton/LongButton";
import { useNavigate } from "react-router-dom";

export default function ProfileCard() {
  const navigate = useNavigate();

  return (
    <div className="profileDetail">
      <div
        className="profileAvatar"
        style={{
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png)`,
        }}
      />
      <div className="profileDescription">
        <div>
          <h2 className="profileName">Username</h2>
          <h2 className="profileEmail">Email@gmail.com</h2>
          <h2 className="profileContact">081226666668</h2>
          <h2 className="profileContact">
            Jalan Soedirman no 12345 Provinsi Nusakambangan RT/RW null/undefined
          </h2>
          <LongButton
            text={"Riwayat Pesanan"}
            onClick={() => {
              navigate("/history");
            }}
          />
        </div>
      </div>
    </div>
  );
}

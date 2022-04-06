import React from "react";
import "./ProfileCard.css";

export default function ProfileCard() {
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
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./ProfileCard.css";

export default function ProfileCard(props) {
  return (
    <div className="profileDetail">
      <section
        className="profileAvatar"
        style={{
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png)`,
        }}
      />

      <section className="profileDescription">
        <div>
          <h2 className="profileName">{props.name}</h2>
          <h2 className="profileEmail">{props.email}</h2>
          <h2 className="profileContact">{props.contactNumber}</h2>
          <h2 className="profileContact">{props.address}</h2>
        </div>
      </section>

      <section className="profileHistoryButton">{props.children}</section>
    </div>
  );
}

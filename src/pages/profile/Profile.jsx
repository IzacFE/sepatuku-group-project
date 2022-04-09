import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

import ProfileCard from "../../components/profileCard/ProfileCard";
import LongButton from "../../components/longButton/LongButton";
import LoadSpin from "../../components/loadSpin/LoadSpin";

export default function Profile() {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const [profileData, setProfileData] = useState([]);

  const [image, setImage] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`/users/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setProfileData(response.data.data_user);
        console.log(response.data.data_user);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsReady(true));
  };

  const editSubmit = (e) => {
    console.log(image);
  };

  let result;
  if (isReady) {
    result = (
      <div className="profileContainer">
        <div className="profileBio">
          <ProfileCard
            name={profileData.username}
            email={profileData.email}
            contactNumber={profileData.phone}
            address={profileData.address}
          >
            <LongButton
              text={"Riwayat Pembelian"}
              onClick={() => {
                navigate("/history");
              }}
            />
            <LongButton
              text={"Produk Dagangan"}
              onClick={() => {
                navigate("/user-product");
              }}
            />
          </ProfileCard>
        </div>

        <div className="profileEdit">
          <h2>Edit Profile</h2>
          <form action="" className="profileEditForm">
            <input
              type="text"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
              placeholder={`Gambar Profile`}
            />
            <input
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder={`Username`}
            />
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder={`Email`}
            />
            <input
              type="text"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
              placeholder={`Nomor Kontak`}
            />
            <input
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              placeholder={`Alamat`}
            />
            <LongButton
              text="Rubah"
              onClick={(e) => {
                editSubmit(e);
              }}
            />
          </form>
        </div>
      </div>
    );
  } else {
    result = (
      <>
        <LoadSpin />
      </>
    );
  }

  return result;
}

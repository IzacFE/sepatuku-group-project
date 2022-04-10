import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

import ProfileCard from "../../components/profileCard/ProfileCard";
import LongButton from "../../components/longButton/LongButton";
import LoadSpin from "../../components/loadSpin/LoadSpin";

export default function Profile() {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const [profileData, setProfileData] = useState([]);

  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (e) => {
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

  const editSubmit = async () => {
    setIsReady(false);
    await axios
      .put(
        `/users/`,
        {
          username,
          email,
          password,
          address,
          phone: contact,
          avatar: image,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        alert("berhasil");
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
    // .finally(() => setIsReady(true));
    await fetchData();
  };

  let result;
  if (isReady) {
    result = (
      <div className="profileContainer">
        <div className="profileBio">
          <ProfileCard
            image={profileData.avatar}
            name={profileData.username}
            email={profileData.email}
            contactNumber={profileData.phone}
            address={profileData.address}
          >
            <LongButton
              text={"Produk Dagangan"}
              onClick={() => {
                navigate("/user-product");
              }}
            />
            <LongButton
              text={"Riwayat Pembelian"}
              onClick={() => {
                navigate("/history");
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
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
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
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder={`password`}
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

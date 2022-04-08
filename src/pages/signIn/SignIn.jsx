import React, {useState} from "react";
import "./SignIn.css"

import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    await axios
    .post("http://52.87.250.27:8080/api/v1/auth/",
    {
        username: 'username',
        password: 'password',
      })
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
    };
  
  return (
    <div className="signinWrapper">
      <div className="signinBox">
        <div className="signinContent">
          <h2>Masuk</h2>
          <p>Masuk untuk berbelanja</p>
          <form onSubmit={(e) =>handleSignUp(e)}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username Anda" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Kata Sandi Anda" />
            <button>Masuk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from "react";
import { toast } from "react-toastify";
import "./login.css";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // toast.success("Hello");
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back</h2>
        <form action="" onSubmit={handleLogin}>
          <input type="text" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button>Sign In</button>
        </form>
      </div>

      <div className="separator"></div>

      <div className="item">
        <h2>Create an account</h2>
        <form action="">
          <label htmlFor="profilePic">
            <img src={avatar.url || "./avatar.png"} alt="" /> <br />
            <span>Upload an image</span>
          </label>
          <input
            type="file"
            name="profilePic"
            id="profilePic"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input
            type="text"
            name="email"
            id="registerEmail"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            id="registerPassword"
            placeholder="Password"
          />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

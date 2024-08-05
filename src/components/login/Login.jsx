import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../lib/firebase";
import "./login.css";
import upload from "../../lib/upload";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const { username, registerEmail, registerPassword } =
      Object.fromEntries(formData);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      const imgUrl = await upload(avatar.file);

      await setDoc(doc(db, "users", response.user.uid), {
        username,
        avatar: imgUrl,
        email: registerEmail,
        id: response.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", response.user.uid), {
        chats: [],
      });

      toast.success("Account created! You can login now");
    } catch (error) {
      toast.error(error.message);
      throw new Error("Error registering user");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    await signInWithEmailAndPassword(auth, email, password);
    toast.success("User Logged in successfully");
    try {
    } catch (error) {
      toast.error(error.message);
      throw new Error("Error Logging in user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
      </div>

      <div className="separator"></div>

      <div className="item">
        <h2>Create an account</h2>
        <form onSubmit={handleRegister}>
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
            name="registerEmail"
            id="registerEmail"
            placeholder="Email"
          />
          <input
            type="password"
            name="registerPassword"
            id="registerPassword"
            placeholder="Password"
          />
          <button disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

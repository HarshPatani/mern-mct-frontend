import React from "react";
import "./SignIn.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import rightImg from "./signin.jpg";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "") {
      toast.error("Please enter email", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (password.length < 6) {
      toast.error("Password Should be atleast 6 characters!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="signIn">
      <div className="signIn__card">
        <div className="signIn__left">
          <h1>
            Welcome back to <br /> Pretty Login
          </h1>
          <p>it's great to have you back!</p>
          <label htmlFor="email">EMAIL</label>
          <br />
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">PASSWORD</label>
          <br />
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className="signIn__remember">
            <div>
              <input type="checkbox" value="checked" name="remember" />{" "}
              <label htmlFor="remember">Remember me?</label>
            </div>
            <p>Forgot password?</p>
          </div>
          <div className="signIn__btns">
            <button className="signIn__btn__login" onClick={handleLogin}>
              Login
            </button>

            <button className="signIn__btn__createAccount">
              CREATE ACCOUNT
            </button>
          </div>
          <div className="signIn__socialLogin">
            <p>Or login With</p>
            <p>Facebook Google</p>
          </div>
        </div>

        <div className="signIn__right">
          <div className="signIn__right__img">
            <img src={rightImg} alt="Sign In Background" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;

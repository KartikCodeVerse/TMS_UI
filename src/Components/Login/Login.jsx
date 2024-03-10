import React from "react";
import "./Login.css";
import { TbUserFilled } from "react-icons/tb";

const Login = () => {
  return (
    <div className="login center">
      <div className="login_form">
        <div className="login_icon center">
          <TbUserFilled size={80} />
        </div>

        <form className="form_box col">
          <input className="login_input" type="text" placeholder="Username" />

          <input
            className="login_input"
            type="password"
            placeholder="Password"
          />

          <div className="link ">
            <a href="#">Forgot Password</a>
          </div>
          <button className="btn login_btn" type="submit">
            Login
          </button>
        </form>
        <div className="login_img"></div>
      </div>
    </div>
  );
};

export default Login;

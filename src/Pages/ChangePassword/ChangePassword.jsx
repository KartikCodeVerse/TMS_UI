import React from "react";
import "./ChangePassword.css";

const ChangePassword = () => {
  return (
    <div className="page_section center">
      <div className="setting_container">
        <div className="setting_details center">
          <div className="form col center">
            <h2>CHANGE PASSWORD</h2>

            <form className="form_box change_pass_form col ">
              <div className="input_container">
                <label htmlFor="username">User Name:</label>
                <input
                  id="username"
                  className="login_input"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="input_container">
                <label htmlFor="old_password">Old Password: </label>
                <input
                  id="old_password"
                  className="login_input"
                  type="password"
                  placeholder="Old Password"
                />
              </div>
              <div className="input_container">
                <label htmlFor="new_password">New Password: </label>
                <input
                  id="new_password"
                  className="login_input"
                  type="password"
                  placeholder=" New Password"
                />
              </div>
              <div className="input_container">
                <label htmlFor="confirm_password">Confirm Password: </label>
                <input
                  id="confirm_password"
                  className="login_input"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
            </form>
            <div className="exit_accept_btns center">
              <a href="#" className="btn form_btn">
                Exit
              </a>
              <a href="#" className="btn form_btn">
                Accept
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;

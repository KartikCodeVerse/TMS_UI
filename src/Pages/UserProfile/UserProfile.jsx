import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="page_section center">
      <div className="setting_container">
        <div className="setting_details center">
          <div className="form">
            <div className="select_user">
              <label>
                Select User Name:{" "}
                <select id="selectOption" name="selectOption">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </label>
              <a href="#" className="btn accept_btn">
                ACCEPT
              </a>
            </div>
            <div className="user_details_box">
              <div className="detail_box">
                <h5>Master Tab Option</h5>
                <div className="user_box"></div>
              </div>
              <div className="detail_box">
                <h5>Transacion Tab Option</h5>
                <div className="user_box"></div>
              </div>
              <div className="detail_box">
                <h5>Report Tab Option</h5>
                <div className="user_box"></div>
              </div>
              <div className="detail_box">
                <h5>Print Tab Option</h5>
                <div className="user_box"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="setting_btn center">
          <a href="#" className="btn form_btn">
            Exit
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

import React from "react";
import "./Setting.css";

const Setting = () => {
  return (
    <div className="page_section center">
      <div className="setting_container">
        <div className="setting_details center">
          <div className="form">
            <h5>Session Details</h5>
            <div className="form_input">
              <form>
                <label>
                  Charge on Chesel(%) :{" "}
                  <input
                    type="number"
                    className="input_box"
                    id="name"
                    name="name"
                    required
                  />
                </label>

                <label>
                  Charge on Earning(%) :{" "}
                  <input
                    type="number"
                    className="input_box"
                    id="name"
                    name="name"
                    required
                  />
                </label>

                <label>
                  Charge on Other Expenses(%) :{" "}
                  <input
                    type="number"
                    className="input_box"
                    id="name"
                    name="name"
                    required
                  />
                </label>

                <button className="btn form_btn">Update</button>
              </form>
            </div>
            <div className="box center">
              <div className="backup_box">
                <h5>BACKUP AND RESTORE DETAILS</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  excepturi minima ad assumenda labore deleniti iure id earum.
                </p>
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

export default Setting;

import React from "react";
import "./UserAccount.css";
import { AiTwotoneDelete } from "react-icons/ai";

const UserAccount = () => {
  return (
    <div className="page_section center">
      <div className="setting_container">
        <div className="setting_details center">
          <div className="form">
            <div className="users_btns">
              <button className="user_btn btn">CREATE USER</button>
              <button className="user_btn btn">MODIFY USER</button>
              <button className="user_btn btn">USER LIST</button>
            </div>
            <div className="user_details">
              <table>
                <thead>
                  <tr>
                    <th>Delete</th>
                    <th>S.No</th>
                    <th>User Name</th>
                    <th>Create Modify Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <button>
                        <AiTwotoneDelete size={"20"} />
                      </button>
                    </td>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>2024-03-07</td>
                  </tr>
                  <tr>
                    <td>
                      <button>
                        <AiTwotoneDelete size={"20"} />
                      </button>
                    </td>
                    <td>2</td>
                    <td>Jane Smith</td>
                    <td>2024-03-08</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="export_print_btns center">
              <a href="#" className="btn">
                Export
              </a>
              <a href="#" className="btn">
                Print
              </a>
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

export default UserAccount;

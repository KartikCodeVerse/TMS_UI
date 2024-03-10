import React from "react";
import "./Quite.css";
import { RxExit } from "react-icons/rx";

import { RxCross2 } from "react-icons/rx";

const Quite = () => {
  return (
    <div className="page_section center">
      <div className="quite_card">
        <div className="quite_top">
          <h2>
            <RxExit size={25} /> Sign Out
          </h2>

          <RxCross2
            style={{ fontSize: "2rem", fontWeight: "100", cursor: "pointer" }}
          />
        </div>
        <div className="quite_middle">
          <div className="quite_sure">
            <p>Are you sure?</p>
          </div>
        </div>
        <div className="quite_bottom">
          <div className="quite_btns">
            <a href="#" className="btn">
              Yes
            </a>
            <a href="#" className="btn">
              No
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quite;

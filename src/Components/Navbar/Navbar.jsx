import React from "react";
import logo from "../../assets/image/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar row">
      <div className="nav_brand row center">
        <div className="logo center">
          <img src={logo} alt="logo" style={{ width: "100%" }} />
        </div>
        <h2>TMS</h2>
      </div>

      <ul className="nav_container row">
        <li className="nav_item">
          <Link to="/" exact className="active-link ">
            home
          </Link>
        </li>
        <li className="nav_item">
          <Link to="/administrator" className="active-link center">
            Administrator <MdExpandMore />
          </Link>
        </li>
        <li className="nav_item">
          <Link to="/master" className="active-link center">
            Master <MdExpandMore />
          </Link>
        </li>
        <li className="nav_item">
          <Link to="/transaction" className="active-link center">
            Transaction <MdExpandMore />
          </Link>
        </li>
        <li className="nav_item">
          <Link to="/report" className="active-link center">
            Report <MdExpandMore />
          </Link>
        </li>
        <li className="nav_item">
          <Link to="/print" className="active-link center">
            Print <MdExpandMore />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

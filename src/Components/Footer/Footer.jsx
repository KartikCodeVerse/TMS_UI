import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGooglePlus } from "react-icons/fa6";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer center">
      <div className="footer_container col center">
        <div className="footer_top col center ">
          <div className="social ">
            <a href="#">
              <FaFacebook size={30} />
            </a>
            <a href="#">
              <RiInstagramFill size={30} />
            </a>
            <a href="#">
              <AiFillTwitterCircle size={30} />
            </a>
            <a href="#">
              <FaGooglePlus size={30} />
            </a>
          </div>

          <ul className="footer_nav row">
            <li className="nav_item">
              <Link to="/">home</Link>
            </li>
            <li className="nav_item">
              <Link to="/administrator">Administrator</Link>
            </li>
            <div className="nav_item">
              <Link to="/master">Master</Link>
            </div>
            <div className="nav_item">
              <Link to="/transaction">Transaction</Link>
            </div>
            <div className="nav_item">
              <Link to="/report">Report</Link>
            </div>
            <div className="nav_item">
              <Link to="/print">Print</Link>
            </div>
          </ul>
        </div>
        <div className="footer_bottom">
          <div className="rights">
            &#169; 2024 - 2025 TMS | All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

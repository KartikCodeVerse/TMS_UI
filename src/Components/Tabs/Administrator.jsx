import React from "react";
import "./Tab.css";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { PiUserCircleDuotone } from "react-icons/pi";
import { TbPasswordUser } from "react-icons/tb";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import { Link, Outlet, useLocation } from "react-router-dom";

const Administrator = () => {
  const location = useLocation();

  const isActive = (path) => {
    console.log(path);
    return location.pathname === path;
  };
  return (
    <div className="administrator_tab tab">
      <Outlet />
      <ul className="tab_items col">
        <li>
          <Link
            className={`tab_item col center ${
              isActive("/administrator") ? "active" : ""
            }`}
            to="/administrator"
          >
            <CiSearch style={{ fontSize: "1.5rem" }} />
            Setting
          </Link>
        </li>
        <li>
          <Link
            className={`tab_item col center ${
              isActive("/administrator/user/account") ? "active" : ""
            }`}
            to="/administrator/user/account"
          >
            <CiUser style={{ fontSize: "1.5rem" }} />
            User Account
          </Link>
        </li>
        <li>
          <Link
            className={`tab_item col center ${
              isActive("/administrator/user/profile") ? "active" : ""
            }`}
            to="/administrator/user/profile"
          >
            <PiUserCircleDuotone style={{ fontSize: "1.5rem" }} />
            User Profile
          </Link>
        </li>
        <li>
          <Link
            className={`tab_item col center ${
              isActive("/administrator/changepassword") ? "active" : ""
            }`}
            to="/administrator/changepassword"
          >
            <TbPasswordUser style={{ fontSize: "1.5rem" }} />
            Change Password
          </Link>
        </li>
        <li>
          <Link
            className={`tab_item col center ${
              isActive("/administrator/systeminfo") ? "active" : ""
            }`}
            to="/administrator/systeminfo"
          >
            <IoIosInformationCircleOutline style={{ fontSize: "1.5rem" }} />
            System Info
          </Link>
        </li>
        <li>
          <Link
            className={`tab_item col center ${
              isActive("/administrator/quite") ? "active" : ""
            }`}
            to="/administrator/quite"
          >
            <RxExit style={{ fontSize: "1.5rem" }} />
            Quite
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Administrator;

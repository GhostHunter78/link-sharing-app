import React from "react";
import { FaLink } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <div className="w-full bg-[#ffffff] py-4 pl-6 pr-4 flex items-center justify-between">
      <img src="/icons/logo-icon.svg" alt="logo-icon" />
      <div className="flex items-center">
        <Link to={"/home"}>
          <div
            style={
              location.pathname === "/home"
                ? { backgroundColor: "#efebff" }
                : { backgroundColor: "transparent" }
            }
            className="px-[27px] py-[11px] rounded-lg"
          >
            <FaLink
              color={location.pathname === "/home" ? "#633cff" : "#737373"}
            />
          </div>
        </Link>
        <Link to={"/profile"}>
          <div
            style={
              location.pathname === "/profile"
                ? { backgroundColor: "#efebff" }
                : { backgroundColor: "transparent" }
            }
            className="px-[27px] py-[11px] rounded-lg"
          >
            <CgProfile
              color={location.pathname === "/profile" ? "#633cff" : "#737373"}
            />
          </div>
        </Link>
      </div>
      <Link to={"/preview"}>
        <div
          style={{ border: "solid 1px #633cff" }}
          className="py-[11px] px-4 rounded-lg"
        >
          <IoEyeOutline color="#633cff" />
        </div>
      </Link>
    </div>
  );
}

export default Header;

import React, { useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import logo from "../../assets/image/Logo.png";

const Dashboard = () => {
  useEffect(() => {
    var menu_btn = document.querySelector("#menu-btn");
    var sidebar = document.querySelector("#sidebar");
    var container = document.querySelector(".my-container");
    menu_btn.addEventListener("click", () => {
      sidebar.classList.toggle("active-nav");
      container.classList.toggle("active-cont");
    });
  });

  return (
    <div>
      <h1 className="text-center p-3 m-0 bg-primary text-white">Dashboard</h1>
      <div
        className="side-navbar bg-primary active-nav d-flex justify-content-between flex-wrap flex-column"
        id="sidebar"
      >
        <ul className="nav flex-column text-white w-100">
          <img
            src={logo}
            className="d-inline-block my-3 mx-auto"
            style={{ width: "140px" }}
          />
          <li className="nav-link">
            <Link className="mx-2 text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link className="mx-2 text-white" to="bannerLists">
              Banner Lists
            </Link>
          </li>
          <li className="nav-link">
            <Link className="mx-2 text-white" to="addHeroBanner">
              Add Banner
            </Link>
          </li>
          <li className="nav-link">
            <Link className="mx-2 text-white" to="walletLists">
              Wallet Lists
            </Link>
          </li>
          <li className="nav-link">
            <Link className="mx-2 text-white" to="addWallet">
              Add Wallet
            </Link>
          </li>
          <li className="nav-link">
            <Link className="mx-2 text-white" to="featureLists">
              Feature Lists
            </Link>
          </li>
          <li className="nav-link">
            <Link className="mx-2 text-white" to="addFeature">
              Add Feature
            </Link>
          </li>
        </ul>
      </div>

      {/* sidebar button */}
      <div className="p-1 my-container active-cont">
        {/* Main Content Here ... Replace the menu toggle icon as per your needs */}
        <button className="btn border-0" id="menu-btn">
          <i className="bx bx-menu"></i>
          <BiMenu />
        </button>
      </div>
      <h2 className="text-center custom__dashboard__margin">
        Wellcome to your dashboard
      </h2>
      <Outlet />
    </div>
  );
};

export default Dashboard;

import React from "react";
import logo from "../../assets/nss.png";
import "./navbar.css";

const Navbar = () => {

  return (
    <div className="navbar-container">
      {/* Checkbox for sidebar toggle */}
      <input type="checkbox" id="sidebar-active" />

      {/* Logo and open sidebar button */}
      <div className="logo">
        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 -960 960 960"
            width="32"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </label>
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="" style={{ height: "35px", paddingTop: "3%" }} />
          <h3 style={{marginLeft:"10px"}}>RUN FOR EQUALITY 2 - 2024</h3>
        </a>
      </div>

      {/* Overlay for sidebar */}
      <label htmlFor="sidebar-active" id="overlay"></label>

      {/* Sidebar links container */}
      <div className="navbar-links-container">
        <div className="navbar-links-header">
          {/* Company name in header */}
          <div className="company-name">
            <a href="/">RUN FOR EQUALITY 2 - 2024</a>
          </div>
          {/* Close sidebar button */}
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 -960 960 960"
              width="32"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </label>
        </div>

        {/* Navbar links */}
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/registration">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

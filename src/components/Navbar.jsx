import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  const location = useLocation();

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode === "light" ? "light" : "dark"
      } bg-${props.mode} shadow-sm sticky-top`}
    >
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          📝 TextForge
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >
          {/* Navigation */}
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link
                className={`nav-link fw-medium px-3 ${
                  location.pathname === "/" ? "active fw-bold" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link fw-medium px-3 ${
                  location.pathname === "/about" ? "active fw-bold" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>

          </ul>

          {/* Desktop Theme Toggle */}
          <div
            className={`form-check form-switch d-flex align-items-center ms-lg-auto text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <label
              className="form-check-label me-2 fw-medium"
              htmlFor="themeSwitch"
            >
              {props.mode === "light" ? "☀️" : "🌙"}
            </label>

            <input
              className="form-check-input mx-10"
              type="checkbox"
              role="switch"
              id="themeSwitch"
              checked={props.mode === "dark"}
              onChange={props.toggleMode}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
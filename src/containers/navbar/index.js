import React, { useState } from "react";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg navbar-light`}>
      <div className={`${styles.container_fluid} container-fluid`}>
        <a className={styles.navbar_brand}>
          <img
            className={styles.navbar_logo}
            src="icons/navbar/logo.png"
            alt="Logo"
          />
        </a>
        <button
          className={`navbar-toggler ${styles.navbar_toggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className={`navbar-toggler-icon ${styles.navbar_toggler_icon}`}
          ></span>
        </button>
        <div
          className={`collapse navbar-collapse ${styles.navbar_collapse}`}
          id="navbarSupportedContent"
        >
          <ul className={`${styles.navbar_nav} navbar-nav mr-auto mb-2`}>
            <li className={`${styles.nav_item} nav-item active`}>
              <NavLink to="/" className={`${styles.nav_link} nav-link`}>
                HOME
              </NavLink>
            </li>
            <li className={`${styles.nav_item} nav-item dropdown`}>
              <a
                className={`${styles.nav_link} nav-link dropdown-toggle`}
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MY PROJECTS
              </a>
              <ul
                className={`${styles.dropdown_menu} dropdown-menu`}
                aria-labelledby="navbarDropdown"
              >
                <NavLink
                  to="/MyProjects/SimpleProjects"
                  className={`${styles.dropdown_item} dropdown-item`}
                >
                  Simple Projects
                </NavLink>
                <NavLink
                  to="/MyProjects/AdvanceProjects"
                  className={`${styles.dropdown_item} dropdown-item`}
                >
                  Advance Projects
                </NavLink>
              </ul>
            </li>
            <li className={`${styles.nav_item} nav-item dropdown`}>
              <a
                className={`${styles.nav_link} nav-link dropdown-toggle`}
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                BATCH_21
              </a>
              <ul
                className={`${styles.dropdown_menu} dropdown-menu`}
                aria-labelledby="navbarDropdown"
              >
                <NavLink
                  to="/Batch_21/Session1"
                  className={`${styles.dropdown_item} dropdown-item`}
                >
                  SESSION1
                </NavLink>
                <NavLink
                  to="/Batch_21/Session2"
                  className={`${styles.dropdown_item} dropdown-item`}
                >
                  SESSION2
                </NavLink>
                <NavLink
                  to="/Batch_21/Session3"
                  className={`${styles.dropdown_item} dropdown-item`}
                >
                  SESSION3
                </NavLink>
                <NavLink
                  to="/Batch_21/Session4"
                  className={`${styles.dropdown_item} dropdown-item`}
                >
                  SESSION4
                </NavLink>
                <NavLink
                  to="/Batch_21/Session5"
                  className={`${styles.dropdown_item} dropdown-item`}
                >
                  SESSION5
                </NavLink>
              </ul>
            </li>
            <li className={`${styles.nav_item} nav-item`}>
              <NavLink to="/Contact" className={`${styles.nav_link} nav-link`}>
                CONTACT
              </NavLink>
            </li>
            <li className={`${styles.nav_item} nav-item`}>
              <NavLink to="/Login" className={`${styles.nav_link} nav-link`}>
                LOGIN
              </NavLink>
            </li>
          </ul>
          <form className={`${styles.d_flex} d-flex`}>
            <input
              className={`${styles.form_control} form-control me-2`}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className={`${styles.form_logo} form-logo`}></div>
          </form>
        </div>
      </div>
    </nav>
  );
}

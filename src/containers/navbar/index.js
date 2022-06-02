import React, { useState } from "react";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg navbar-light`}>
      <div className={`${styles.container_fluid} container-fluid`}>
        <a className={styles.navbar_brand} href="#">
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
              <NavLink to="/" exact className={`${styles.nav_link} nav-link`}>
                HOME
              </NavLink>
            </li>
            <li className={`${styles.nav_item} nav-item`}>
              <a className={`${styles.nav_link} nav-link`} href="#">
                ABOUT US
              </a>
            </li>
            <li className={`${styles.nav_item} nav-item dropdown`}>
              <a
                className={`${styles.nav_link} nav-link dropdown-toggle`}
                href="#"
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
                  exact
                  to="/Session1"
                  className={`${styles.dropdown_item} dropdown-item`}
                >
                  SESSION1
                </NavLink>
                <NavLink
                  exact
                  to="/Session2"
                  className={`${styles.dropdown_item} dropdown-item`}
                >
                  SESSION2
                </NavLink>
              </ul>
            </li>
            <li className={`${styles.nav_item} nav-item`}>
              <NavLink
                to="/Contact"
                exact
                className={`${styles.nav_link} nav-link`}
              >
                CONTACT
              </NavLink>
            </li>
            <li className={`${styles.nav_item} nav-item`}>
              <NavLink
                to="/Login"
                exact
                className={`${styles.nav_link} nav-link`}
              >
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

import React, { useState, useEffect } from "react";
import "./Login.scss";
import "bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { checkLoginService } from "../../Services/AdminService";
import { NavLink } from "react-router-dom";
import LoginSlice from "../../Redux/Reducers/Slices/LoginSlice";

export default function Login() {
  const [isIconTogglePassword, setIsIconTogglePassword] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const disPatch = useDispatch();

  const togglePasswordClick = () => {
    setIsIconTogglePassword(!isIconTogglePassword);
  };

  const changeUser = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginClick = async () => {
    const email = user.email;
    const password = user.password;
    const res = await checkLoginService(email, password);
    console.log("check response from UI", res);
    if (res && res.message.errCode !== 0) {
      if (res.message.errCode === 1) {
        setMessage(res.message.errMessage);
        setUser({ email: "", password: password });
      }
      if (res.message.errCode === 2) {
        setMessage(res.message.errMessage);
        setUser({ email: "", password: password });
      }
      if (res.message.errCode === 3) {
        setMessage(res.message.errMessage);
        setUser({ email: email, password: "" });
      }
      if (res.message.errCode === 4) {
        setMessage(res.message.errMessage);
        setUser({ email: email, password: "" });
      }
    } else if (res && res.message.errCode === 0) {
      disPatch(LoginSlice.actions.login(true));
      setMessage(res.message.errMessage);
    }
  };

  useEffect(() => {
    disPatch(LoginSlice.actions.login(false));
  });

  return (
    <div className="bodyLogin row">
      <div className="container containerLogin">
        <NavLink to="/" exact>
          <i className="fa-solid fa-arrow-right-to-bracket" />
        </NavLink>
        <div className="row justify-content-center">
          <h5 className="containerLogin-title mb-3">ACCOUNT LOGIN</h5>
          <div className="containerLogin-form">
            <div className="form-group containerLogin-form-user mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Username"
                required
                value={user.email}
                onChange={(e) => changeUser(e)}
              />
            </div>
            <div className="form-group containerLogin-form-password mb-3">
              <input
                type={isIconTogglePassword === false ? "text" : "password"}
                className="form-control"
                name="password"
                placeholder="Password"
                required
                value={user.password}
                onChange={(e) => changeUser(e)}
              />
              <span
                className={
                  isIconTogglePassword === false
                    ? "fas fa-fw fa-eye field-icon toggle-password"
                    : "fas fa-eye-slash field-icon toggle-password"
                }
                onClick={togglePasswordClick}
              ></span>
            </div>
            <div className="col-12  mb-3 containerLogin-form-error">
              <i className="h5 text-warning">{message}</i>
            </div>
            <div className="form-group containerLogin-form-btn mb-4">
              <button className="button" onClick={loginClick}>
                LOGIN
              </button>
            </div>
            <div className="form-group containerLogin-form-forgotPassword row mb-5">
              <div className="col-6">
                <label className="checkbox-wrap checkbox-primary">
                  <input className="checkbox" type="checkbox" id="checkbox" />
                  <label className="label" htmlFor="checkbox">
                    <i className="fas fa-check"></i>
                  </label>
                  <span className="checkmark">Remember Me</span>
                </label>
              </div>
              <div className="text-md-right col-6 forgot">
                <a href="#" className="forgot-password">
                  Forgot Password
                </a>
              </div>
            </div>
          </div>
          <div className=" text-aline-center signInWith">
            <p className="text-white">
              <i className="fas fa-minus" />
              &nbsp;<span>Or Sign In With</span>&nbsp;
              <i className="fas fa-minus" />
            </p>
          </div>
          <div className=" text-aline-center row signInWith-social">
            <button className=" text-aline-center col-5 signInWith-social-ft">
              Facebook
            </button>
            <button className=" text-aline-center col-5 signInWith-social-ft">
              Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./ForgotPassword.css";
import logo from "../../images/new-logo.png";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";

const ForgotPassword = () => {
  return (
    <div className="login-container">
      <div className="loginbox">
        <div className="logo">
          <img src={logo} alt="Origin8solutions" />
        </div>
        <h1 className="heading">Forgot Password</h1>
        <form>
          <div className="form-group">
            <MailOutlineIcon />
            <input type="text" required placeholder="Enter your email" />
          </div>

          <button type="submit" className="formbtn">
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

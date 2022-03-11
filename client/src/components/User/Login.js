import React from "react";
import "./Login.css";
import logo from "../../images/new-logo.png";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  return (
    <div className="login-container">
      <div className="loginbox">
        <div className="logo">
          <img src={logo} alt="Origin8solutions" />
        </div>
        <h1 className="heading">Login</h1>
        <form>
          <div className="form-group">
            <MailOutlineIcon />
            <input type="text" required placeholder="Enter your email" />
          </div>
          <div className="form-group mb-10">
            <LockIcon />
            <input type="password" required placeholder="Enter your password" />
          </div>
          <div className="form-group checkbox">
            <div>
              <input type="checkbox" /> Remember Me
            </div>
            <div>
              <Link to="/forgotpassword">Forgot Password</Link>
            </div>
          </div>

          <button type="submit" className="formbtn">
            Login
          </button>
        </form>
        <p className="bottomtext">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

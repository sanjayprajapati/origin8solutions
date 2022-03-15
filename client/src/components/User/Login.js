import React, { useState, useEffect } from "react";
import "./Login.css";
import logo from "../../images/new-logo.png";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import { login } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const { loading, isAuthenticated } = useSelector((state) => state.user);

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <div className="login-container">
      <div className="loginbox">
        <div className="logo">
          <img src={logo} alt="Origin8solutions" />
        </div>
        <h1 className="heading">Login</h1>
        <form onSubmit={loginSubmit}>
          <div className="form-group">
            <MailOutlineIcon />
            <input
              type="text"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group mb-10">
            <LockIcon />
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
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

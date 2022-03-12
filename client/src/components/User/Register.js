import React from "react";
import "./Register.css";
import logo from "../../images/new-logo.png";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Register = () => {
  return (
    <div className="register-container">
      <div className="registerbox">
        <div className="logo">
          <img src={logo} alt="Origin8solutions" />
        </div>
        <h1 className="heading">Create Account</h1>
        <form>
          <div className="form-group">
            <PersonOutlineIcon />
            <input type="text" required placeholder="Enter your Name" />
          </div>
          <div className="form-group">
            <MailOutlineIcon />
            <input type="text" required placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <PhoneAndroidIcon />
            <input type="text" required placeholder="Enter your mobile" />
          </div>
          <div className="form-group">
            <ApartmentIcon />
            <select>
              <option value="0">Select Appartment</option>
            </select>
          </div>
          <div className="form-group">
            <LocationCityIcon />
            <select>
              <option value="0">Select City</option>
            </select>
          </div>
          <div className="form-group ">
            <LockIcon />
            <input type="password" required placeholder="Enter your password" />
          </div>
          <div className="form-group ">
            <LockIcon />
            <input
              type="password"
              required
              placeholder="Enter confirm password"
            />
          </div>

          <button type="submit" className="formbtn">
            Login
          </button>
        </form>
        <p className="bottomtext">
          Already have account <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

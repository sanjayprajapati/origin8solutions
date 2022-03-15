import React, { useState, useEffect, Fragment } from "react";
import "./Register.css";
import logo from "../../images/new-logo.png";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../../actions/cityAction";
import { getAppartment } from "../../actions/appartmentAction";
import Loader from "../Layout/Loader/Loader";
import { register } from "../../actions/userAction";

const Register = () => {
  const [user, setUser] = useState("");
  const {
    name,
    email,
    mobile,
    password,
    cpassword,
    city_name,
    appartmentname,
  } = user;

  const dispatch = useDispatch();
  const { loading, cities, error } = useSelector((state) => state.cities);
  const { appartment } = useSelector((state) => state.appartment);

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const registerSubmit = (e) => {
    e.preventDefault();

    console.log(user);

    dispatch(register(user));
  };

  useEffect(() => {
    dispatch(getCity());
    dispatch(getAppartment());
  }, []);
  console.log(loading);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="register-container">
          <div className="registerbox">
            <div className="logo">
              <img src={logo} alt="Origin8solutions" />
            </div>
            <h1 className="heading">Create Account</h1>
            <form onSubmit={registerSubmit}>
              <div className="form-group">
                <PersonOutlineIcon />
                <input
                  type="text"
                  required
                  placeholder="Enter your Name"
                  name="name"
                  value={name}
                  onChange={registerDataChange}
                />
              </div>
              <div className="form-group">
                <MailOutlineIcon />
                <input
                  type="text"
                  required
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={registerDataChange}
                />
              </div>
              <div className="form-group">
                <PhoneAndroidIcon />
                <input
                  type="text"
                  required
                  placeholder="Enter your mobile"
                  name="mobile"
                  value={mobile}
                  onChange={registerDataChange}
                />
              </div>
              <div className="form-group">
                <ApartmentIcon />
                <select name="appartmentname" onChange={registerDataChange}>
                  <option value="">Select Appartment</option>
                  {appartment &&
                    appartment.map((item) => (
                      <option key={item._id} value={item.appartmentname}>
                        {item.appartmentname}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <LocationCityIcon />
                <select name="city_name" onChange={registerDataChange}>
                  <option value="">Select City</option>
                  {cities &&
                    cities.map((item) => (
                      <option key={item._id} value={item.city_name}>
                        {item.city_name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group ">
                <LockIcon />
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={registerDataChange}
                />
              </div>
              <div className="form-group ">
                <LockIcon />
                <input
                  type="password"
                  required
                  placeholder="Enter confirm password"
                  name="cpassword"
                  value={cpassword}
                  onChange={registerDataChange}
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
      )}
    </Fragment>
  );
};

export default Register;

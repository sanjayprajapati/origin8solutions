import React, { useState, useEffect } from "react";
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

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [city, setCity] = useState("");
  const [appartment, setAppartment] = useState("");

  const dispatch = useDispatch();
  const { loading, cities, error } = useSelector((state) => state.cities);

  useEffect(() => {
    //  dispatch(getCity());
  }, []);
  console.log(cities[0].city_name);

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
            <input
              type="text"
              required
              placeholder="Enter your Name"
              value={username}
              onChange={(e) => setUsername(e.value)}
            />
          </div>
          <div className="form-group">
            <MailOutlineIcon />
            <input
              type="text"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.value)}
            />
          </div>
          <div className="form-group">
            <PhoneAndroidIcon />
            <input
              type="text"
              required
              placeholder="Enter your mobile"
              value={mobile}
              onChange={(e) => setMobile(e.value)}
            />
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
              {cities &&
                cities.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.city_name}
                  </option>
                ))}
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

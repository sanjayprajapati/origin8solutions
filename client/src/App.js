import "./App.css";
import React, { useEffect } from "react";
import Loader from "./components/Layout/Loader/Loader";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./components/Home/Home";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import store from "./store";
import { loadUser } from "./actions/userAction";
import ForgotPassword from "./components/User/ForgotPassword";
import Dashboard from "./components/User/Dashboard";
import Switches from "./components/User/Switches";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route
            exact
            path="/dashboard/:index"
            element={<Switches title="Room" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

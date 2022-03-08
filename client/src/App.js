import "./App.css";
import React, { useEffect } from "react";
import Loader from "./components/Layout/Loader/Loader";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./components/Home/Home";
import Login from "./components/User/Login";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    //store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

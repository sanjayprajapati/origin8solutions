import React, { Fragment } from "react";
import "./Header.css";
import logo from "../../../images/new-logo.png";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <nav>
            <div className="leftnav">
              <img src={logo} alt="Origin8solutions.com" />
            </div>
            <div className="rightnav"></div>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;

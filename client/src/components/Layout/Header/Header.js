import React, { Fragment } from "react";
import "./Header.css";
import logo from "../../../images/new-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <nav>
            <div className="leftnav">
              <ul>
                <li>
                  <Link to="/">
                    <img src={logo} alt="Origin8solutions.com" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="rightnav"></div>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;

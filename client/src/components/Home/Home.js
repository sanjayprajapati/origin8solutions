import React, { Fragment } from "react";
import MetaData from "../Layout/MetaData";
import "./Home.css";
import Header from "../Layout/Header/Header";

const Home = () => {
  return (
    <Fragment>
      <MetaData title="Home" />
      <Header />
      <div className="home-container">
        <div className="container">
          <h1>
            PHONE PE HOME
            <br />
            Controll Your Home Aplliences
            <br />
            AnyWhere AnyTime
          </h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

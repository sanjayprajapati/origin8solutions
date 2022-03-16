import React, { useEffect } from "react";
import "./Dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllrooms } from "../../actions/appartmentAction";
import img0 from "../../images/kitchen.png";
import img2 from "../../images/livingroom.png";
import img3 from "../../images/bedroom.png";
import img1 from "../../images/bathroom.png";
import imgstudyroom from "../../images/studyroom.png";
import { getSwitchUtilityClass } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const { rooms } = useSelector((state) => state.rooms);

  const getSwitches = (index) => {
    //console.log(index);
    navigate(`/dashboard/${index}`);
  };

  useEffect(() => {
    dispatch(getAllrooms());
  }, [dispatch]);

  const images = [img0, img1, img2, img3];
  return (
    <div className="container">
      <div className="dashboard">
        <div className="dashboard-box">
          <div className="header-box">
            <h2>Dashboard</h2>
          </div>
          <div className="rooms-box">
            {rooms &&
              rooms.map((item, index) => (
                <div title={item} key={item} onClick={() => getSwitches(index)}>
                  <img src={images[index]} alt={item} />
                  {item}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

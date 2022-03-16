import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSwitchesByRoom } from "../../actions/switchActions";
import { useParams } from "react-router-dom";

const Switches = ({ title }) => {
  const dispatch = useDispatch();
  const { loading, switches, error } = useSelector((state) => state.switches);
  const { index } = useParams();

  useEffect(() => {
    dispatch(getSwitchesByRoom(index));
  }, [index]);

  console.log(title);

  return (
    <div className="container">
      <div className="dashboard">
        <div className="dashboard-box">
          <div className="header-box">
            <h2>{}</h2>
          </div>
          <div className="rooms-box"></div>
        </div>
      </div>
    </div>
  );
};

export default Switches;

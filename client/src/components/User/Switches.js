import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSwitchesByRoom } from "../../actions/switchActions";
import { useParams } from "react-router-dom";
import "./Switches.css";

const Switches = ({ title }) => {
  const dispatch = useDispatch();
  const { loading, switches, error } = useSelector((state) => state.switches);
  const { index } = useParams();

  useEffect(() => {
    dispatch(getSwitchesByRoom(index));
  }, [index]);

  console.log(switches);

  return (
    <div className="container">
      <div className="dashboard">
        <div className="dashboard-box">
          <div className="header-box">
            <h2>{title}</h2>
          </div>
          <div className="switches-box">
            {switches &&
              switches.map((item) => (
                <div className="swiches" key={item._id}>
                  {item.switchName}
                  <span className="buttons">{item.switchStatus}</span>
                </div>
              ))}

            <button type="button" className="btncreate">
              Create Switch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switches;

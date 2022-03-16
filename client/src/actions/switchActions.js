import axios from "axios";
import {
  ALL_SWITCH_REQUEST,
  ALL_SWITCH_SUCCESS,
  ALL_SWITCH_FAIL,
  ALL_SWITCH_ROOM_REQUEST,
  ALL_SWITCH_ROOM_SUCCESS,
  ALL_SWITCH_ROOM_FAIL,
  SINGLE_SWITCH_REQUEST,
  SINGLE_SWITCH_SUCCESS,
  SINGLE_SWITCH_FAIL,
  CLEAR_ERRORS,
} from "../constants/switchesConstants";

export const getSwitchesByRoom = (index) => async (dispatch) => {
  try {
    dispatch({ type: ALL_SWITCH_ROOM_REQUEST });

    const { data } = await axios.get(`/api/v1/allswitches/${index}`);

    dispatch({
      type: ALL_SWITCH_ROOM_SUCCESS,
      payload: data.switches,
    });
  } catch (error) {
    dispatch({
      type: ALL_SWITCH_ROOM_FAIL,
      payload: error.response.data.message,
    });
  }
};

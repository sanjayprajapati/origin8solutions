import {
  APPARTMENT_REQUEST,
  APPARTMENT_SUCCESS,
  APPARTMENT_FAIL,
  ROOMS_SUCCESS,
  ROOMS_REQUEST,
  ROOMS_FAIL,
  CLEAR_ERRORS,
} from "../constants/appartmentConstants";
import axios from "axios";

// Get APPARTMENT
export const getAppartment = () => async (dispatch) => {
  try {
    dispatch({ type: APPARTMENT_REQUEST });

    const { data } = await axios.get(`/api/v1/appartments`);

    dispatch({
      type: APPARTMENT_SUCCESS,
      payload: data.appartment,
    });
  } catch (error) {
    dispatch({ type: APPARTMENT_FAIL, payload: error.response.data.message });
  }
};

export const getAllrooms = () => async (dispatch) => {
  try {
    dispatch({ type: ROOMS_REQUEST });

    const { data } = await axios.get(`/api/v1/allrooms`);

    dispatch({
      type: ROOMS_SUCCESS,
      payload: data.rooms,
    });
  } catch (error) {
    dispatch({ type: ROOMS_FAIL, payload: error.response.data.message });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

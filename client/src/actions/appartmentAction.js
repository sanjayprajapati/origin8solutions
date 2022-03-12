import {
  APPARTMENT_REQUEST,
  APPARTMENT_SUCCESS,
  APPARTMENT_FAIL,
  CLEAR_ERRORS,
} from "../constants/appartmentConstants";
import axios from "axios";

// Get APPARTMENT
export const getAppartment = () => async (dispatch) => {
  try {
    dispatch({ type: APPARTMENT_REQUEST });

    const { data } = await axios.get(`/api/v1/appartments`);

    dispatch({ type: APPARTMENT_SUCCESS, payload: data.appartments });
  } catch (error) {
    dispatch({ type: APPARTMENT_FAIL, payload: error.response.data.message });
  }
};

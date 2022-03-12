import {
  CITY_REQUEST,
  CITY_SUCCESS,
  CITY_FAIL,
  CLEAR_ERRORS,
} from "../constants/cityConstants";
import axios from "axios";

// Get City
export const getCity = () => async (dispatch) => {
  try {
    dispatch({ type: CITY_REQUEST });

    const { data } = await axios.get(`/api/v1/cities`);

    dispatch({ type: CITY_SUCCESS, payload: data.cities });
  } catch (error) {
    dispatch({ type: CITY_FAIL, payload: error.response.data.message });
  }
};

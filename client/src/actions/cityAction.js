import {
  CITY_REQUEST,
  CITY_SUCCESS,
  CITY_FAIL,
  CLEAR_ERRORS,
} from "../constants/cityConstants";

// Get City
export const getCity = () => async (dispatch) => {
  try {
    dispatch({ type: CITY_REQUEST });

    const { data } = await axios.get(`/api/v1/cities`);

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.city });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

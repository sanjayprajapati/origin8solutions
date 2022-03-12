import {
  CITY_REQUEST,
  CITY_SUCCESS,
  CITY_FAIL,
  CLEAR_ERRORS,
} from "../constants/cityConstants";

export const cityReducer = (state = { cities: {} }, action) => {
  switch (action.type) {
    case CITY_REQUEST:
      return {
        loading: true,
      };

    case CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        cities: action.payload,
      };

    case CITY_FAIL:
      return {
        ...state,
        loading: false,
        cities: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

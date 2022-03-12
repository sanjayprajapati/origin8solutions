import {
  APPARTMENT_REQUEST,
  APPARTMENT_SUCCESS,
  APPARTMENT_FAIL,
  CLEAR_ERRORS,
} from "../constants/appartmentConstants";

export const appartmentReducer = (state = { appartments: {} }, action) => {
  switch (action.type) {
    case APPARTMENT_REQUEST:
      return {
        loading: true,
      };

    case APPARTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        appartments: action.payload,
      };

    case APPARTMENT_FAIL:
      return {
        ...state,
        loading: false,
        appartments: null,
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

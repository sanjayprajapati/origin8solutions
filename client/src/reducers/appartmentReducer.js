import {
  APPARTMENT_REQUEST,
  APPARTMENT_SUCCESS,
  APPARTMENT_FAIL,
  ROOMS_REQUEST,
  ROOMS_SUCCESS,
  ROOMS_FAIL,
  CLEAR_ERRORS,
} from "../constants/appartmentConstants";

const initialState = {
  loading: false,
  appartment: [],
  rooms: [],
  error: null,
};

export const appartmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPARTMENT_REQUEST:
      return {
        loading: true,
        appartment: [],
      };

    case APPARTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        appartment: action.payload,
      };

    case APPARTMENT_FAIL:
      return {
        ...state,
        loading: false,
        appartment: [],
        error: action.payload,
      };

    case ROOMS_REQUEST:
      return {
        loading: true,
        rooms: [],
      };

    case ROOMS_SUCCESS:
      return {
        ...state,
        loading: false,
        rooms: action.payload,
      };

    case ROOMS_FAIL:
      return {
        ...state,
        loading: false,
        rooms: [],
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

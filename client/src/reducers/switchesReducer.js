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

const initialState = {
  loading: false,
  switches: [],
  error: null,
};

export const switchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_SWITCH_ROOM_REQUEST:
      return {
        loading: true,
        switches: [],
      };

    case ALL_SWITCH_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        switches: action.payload,
      };

    case ALL_SWITCH_ROOM_FAIL:
      return {
        ...state,
        loading: false,
        switches: [],
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

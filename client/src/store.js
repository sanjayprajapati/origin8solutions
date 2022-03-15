import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/userReducer";
import { cityReducer } from "./reducers/cityReducer";
import { appartmentReducer } from "./reducers/appartmentReducer";
import { switchesReducer } from "./reducers/switchesReducer";

const reducer = combineReducers({
  user: userReducer,
  rooms: appartmentReducer,
  cities: cityReducer,
  appartment: appartmentReducer,
  switches: switchesReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

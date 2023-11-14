import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/reducer";
import loadingReducer from "../reducers/loadingReducer";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  experiences: reducer,
  user: userReducer
});

const store = configureStore({ reducer: rootReducer });

export default store;

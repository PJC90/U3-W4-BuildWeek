import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/reducer";
import loadingReducer from "../reducers/loadingReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  experiences: reducer
});

const store = configureStore({ reducer: rootReducer });

export default store;

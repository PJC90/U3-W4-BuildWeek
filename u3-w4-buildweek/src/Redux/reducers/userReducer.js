import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "../actions/fetchUser";

const initialState = {
  userData: null,
  loading: true,
  error: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        loading: false,
        error: false
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        userData: null,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default userReducer;

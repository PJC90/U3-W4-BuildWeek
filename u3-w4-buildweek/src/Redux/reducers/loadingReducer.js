import SET_LOADING from "../actions/loading";

const initialState = {
  isLoading: true
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default loadingReducer;

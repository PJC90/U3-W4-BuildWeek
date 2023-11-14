import { ActionTypes } from "../actions/index";

const initialState = {
  allProfiles: null,
  allExperiences: null,
  personalProfile: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_ALL_PROFILES:
      return { ...state, allProfiles: action.payload };
    case ActionTypes.SET_ALL_EXPERIENCES:
      return { ...state, allExperiences: action.payload };
    case ActionTypes.SET_PERSONAL_PROFILE:
      return { ...state, personalProfile: action.payload };
    case ActionTypes.RESET_TEST:
      return { ...state, test: null };
    default:
      return state;
  }
};

export default reducer;

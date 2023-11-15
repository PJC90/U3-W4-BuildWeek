import { SET_ALL_POSTS } from "../actions/posts";

const initialState = {
  allPosts: null
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_POSTS:
      return { ...state, allPosts: action.payload };
    default:
      return state;
  }
};

export default postsReducer;

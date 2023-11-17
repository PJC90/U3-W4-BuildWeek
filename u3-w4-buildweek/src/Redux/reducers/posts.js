import {
  SET_ALL_POSTS,
  SET_FETCHED_USERS,
  SET_POSTS_COMMENTS
} from "../actions/posts";

const initialState = {
  allPosts: null,
  fetchedUsers: [],
  comments: null
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_POSTS:
      return { ...state, allPosts: action.payload };
    case SET_FETCHED_USERS:
      return { ...state, fetchedUsers: action.payload };
    case SET_POSTS_COMMENTS:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};

export default postsReducer;

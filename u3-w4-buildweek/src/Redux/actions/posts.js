export const SET_ALL_POSTS = "SET_ALL_POSTS";
export const SET_POST = "SET_POST";
export const SET_FETCHED_USERS = "SET_FETCHED_USERS";

export const setAllPosts = (posts) => ({
  type: SET_ALL_POSTS,
  payload: posts
});

export const setPost = (post) => ({
  type: SET_POST,
  payload: post
});

export const setFetchedUsers = (id) => ({
  type: SET_FETCHED_USERS,
  payload: id
});

export const getAllPosts = () => async (dispatch) => {
  const ENDPOINT = "https://striveschool-api.herokuapp.com/api/posts/";
  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMTIyYmM1NWU3ZTAwMThmODNjMmMiLCJpYXQiOjE2OTk4Nzk2NzQsImV4cCI6MTcwMTA4OTI3NH0.usy-4B4WgD-20ezReYqhjPpRfsfl1phLJRdEt-o73GM";
  try {
    const response = await fetch(ENDPOINT, {
      headers: { Authorization: TOKEN }
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setAllPosts(data));
      console.log("all posts: ", data);
    } else {
      throw new Error("Network error.");
    }
  } catch (error) {
    console.log(error);
  }
};

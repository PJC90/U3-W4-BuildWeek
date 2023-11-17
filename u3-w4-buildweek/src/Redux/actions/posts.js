export const SET_ALL_POSTS = "SET_ALL_POSTS";
export const SET_POST = "SET_POST";
export const SET_FETCHED_USERS = "SET_FETCHED_USERS";
export const SET_POSTS_COMMENTS = "SET_POSTS_COMMENTS";

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

export const setPostsComments = (comments) => ({
  type: SET_POSTS_COMMENTS,
  payload: comments
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

export const deletePost = (postId) => async (dispatch) => {
  const ENDPOINT = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;
  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMTIyYmM1NWU3ZTAwMThmODNjMmMiLCJpYXQiOjE2OTk4Nzk2NzQsImV4cCI6MTcwMTA4OTI3NH0.usy-4B4WgD-20ezReYqhjPpRfsfl1phLJRdEt-o73GM";
  try {
    const response = await fetch(ENDPOINT, {
      method: "DELETE",
      headers: { Authorization: TOKEN }
    });
    if (response.ok) {
      dispatch(getAllPosts());
    } else {
      throw new Error("Network error.");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllComments = () => async (dispatch) => {
  const ENDPOINT = "https://striveschool-api.herokuapp.com/api/comments/";
  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjljNWY2ZTNkZDAwMTQ5NWU0NjUiLCJpYXQiOjE3MDAxNzQ2MTcsImV4cCI6MTcwMTM4NDIxN30.UMJlveT86fx5Rkmzys9zpnk8qI_p5E5eY344E9z6wgM ";
  try {
    const response = await fetch(ENDPOINT, {
      headers: { Authorization: TOKEN }
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setPostsComments(data));
      console.log("all comments: ", data);
      return data;
    } else {
      throw new Error("Network error.");
    }
  } catch (error) {
    console.log(error);
  }
};

export const postComment =
  (commentText, rate, elementId) => async (dispatch) => {
    const objToUse = { comment: commentText, rate: rate, elementId: elementId };
    const ENDPOINT = "https://striveschool-api.herokuapp.com/api/comments/";
    const TOKEN =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjljNWY2ZTNkZDAwMTQ5NWU0NjUiLCJpYXQiOjE3MDAxNzQ2MTcsImV4cCI6MTcwMTM4NDIxN30.UMJlveT86fx5Rkmzys9zpnk8qI_p5E5eY344E9z6wgM ";
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: TOKEN,
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(objToUse)
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(getAllComments());
        console.log("comment: ", data);
      } else {
        throw new Error("Network error.");
      }
    } catch (error) {
      console.log(error);
    }
  };

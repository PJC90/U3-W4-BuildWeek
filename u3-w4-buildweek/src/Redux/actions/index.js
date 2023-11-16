export const ActionTypes = {
  SET_ALL_PROFILES: "SET_ALL_PROFILES",
  SET_PERSONAL_PROFILE: "SET_PERSONAL_PROFILE",
  SET_ALL_EXPERIENCES: "SET_ALL_EXPERIENCES",
  RESET_TEST: "RESET_TEST"
};

export const setAllProfiles = (profiles) => ({
  type: ActionTypes.SET_ALL_PROFILES,
  payload: profiles
});

export const setPersonalProfile = (profile) => ({
  type: ActionTypes.SET_PERSONAL_PROFILE,
  payload: profile
});

export const setAllExperiences = (experiences) => ({
  type: ActionTypes.SET_ALL_EXPERIENCES,
  payload: experiences
});

export const resetTest = () => ({
  type: ActionTypes.RESET_TEST
});

export const getAllProfiles = () => async (dispatch) => {
  const URL = "https://striveschool-api.herokuapp.com/api/profile/";
  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMTIyYmM1NWU3ZTAwMThmODNjMmMiLCJpYXQiOjE2OTk4Nzk2NzQsImV4cCI6MTcwMTA4OTI3NH0.usy-4B4WgD-20ezReYqhjPpRfsfl1phLJRdEt-o73GM";
  try {
    const response = await fetch(URL, {
      headers: {
        Authorization: TOKEN
      }
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setAllProfiles(data));
    } else {
      throw new Error("Network error.");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllExperiences = (userId) => async (dispatch) => {
  const URL = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMTIyYmM1NWU3ZTAwMThmODNjMmMiLCJpYXQiOjE2OTk4Nzk2NzQsImV4cCI6MTcwMTA4OTI3NH0.usy-4B4WgD-20ezReYqhjPpRfsfl1phLJRdEt-o73GM";
  try {
    const response = await fetch(URL, {
      headers: {
        Authorization: TOKEN
      }
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setAllExperiences(data));
    } else {
      throw new Error("Network error.");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getMyProfile = () => async (dispatch) => {
  const URL = "https://striveschool-api.herokuapp.com/api/profile/me";
  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMTIyYmM1NWU3ZTAwMThmODNjMmMiLCJpYXQiOjE2OTk4Nzk2NzQsImV4cCI6MTcwMTA4OTI3NH0.usy-4B4WgD-20ezReYqhjPpRfsfl1phLJRdEt-o73GM";
  try {
    const response = await fetch(URL, {
      headers: {
        Authorization: TOKEN
      }
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setPersonalProfile(data));
      return data;
    } else {
      throw new Error("Network error.");
    }
  } catch (error) {
    console.log(error);
  }
};

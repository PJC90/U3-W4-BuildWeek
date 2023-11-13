import { Container } from "react-bootstrap";
import {
  getAllExperiences,
  getMyProfile,
  setAllExperiences,
  setAllProfiles,
  setExperience
} from "../Redux/actions";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import ExperienceCard from "./ExperienceCard";

const Experience = function () {
  const allExperiences = useSelector((state) => state.allExperiences);
  const personalProfile = useSelector((state) => state.personalProfile);
  const profileFetchedRef = useRef(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyProfile());
  }, []);

  const removeExperience = async function (experienceId) {
    const URL = `https://striveschool-api.herokuapp.com/api/profile/${personalProfile._id}/experiences/${experienceId}`;
    const TOKEN =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMTIyYmM1NWU3ZTAwMThmODNjMmMiLCJpYXQiOjE2OTk4Nzk2NzQsImV4cCI6MTcwMTA4OTI3NH0.usy-4B4WgD-20ezReYqhjPpRfsfl1phLJRdEt-o73GM";
    try {
      const response = await fetch(URL, {
        method: "DELETE",
        headers: { Authorization: TOKEN }
      });
      if (response.ok) {
        console.log("fatto");
      } else {
        throw new Error("Network error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (personalProfile && !profileFetchedRef.current) {
    // alert("richiesta");
    profileFetchedRef.current = true;
    // dispatch(setExperience(personalProfile._id));
    dispatch(getAllExperiences(personalProfile._id));
  }
  return (
    <Container
      fluid
      className="d-flex flex-column gap-2 py-2 bg-white rounded-3"
    >
      <h5 className="fw-semibold">Esperienza</h5>
      {allExperiences !== null
        ? allExperiences.map((experience) => (
            <>
              <ExperienceCard key={experience._id} experience={experience} />
              {/* <button onClick={() => removeExperience(experience._id)}>
                rimuovi
              </button> */}
            </>
          ))
        : null}
    </Container>
  );
};

export default Experience;

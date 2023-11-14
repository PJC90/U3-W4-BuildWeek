import { Container } from "react-bootstrap";
import {
  getAllExperiences,
  getMyProfile,
  setAllExperiences,
  setAllProfiles,
  setExperience
} from "../Redux/actions";
import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ExperienceCard from "./ExperienceCard";
import { setLoading } from "../Redux/actions/loading";
import ExperienceModal from "./ExperienceModal";

const Experience = function () {
  const allExperiences = useSelector(
    (state) => state.experiences.allExperiences
  );
  const personalProfile = useSelector(
    (state) => state.experiences.personalProfile
  );

  const isLoading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfile()).then((personalProfile) => {
      if (personalProfile) {
        dispatch(getAllExperiences(personalProfile._id)).then(() => {
          dispatch(setLoading(false));
        });
        //aggiungi un altro then, al termine del quale setti uno state 'loading'su false.
        //sposta il codice in app.js, cosi tutti i componenti avranno a disposizione i dati all'avvio della pagina
      }
    });
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

  // if (personalProfile && !profileFetchedRef.current) {
  //   // alert("richiesta");
  //   profileFetchedRef.current = true;
  //   // dispatch(setExperience(personalProfile._id));
  //   dispatch(getAllExperiences(personalProfile._id));
  // }

  return (
    <Container
      fluid
      className="d-flex flex-column gap-2 py-2 bg-white rounded-3"
    >
      {!isLoading && (
        <div className="d-flex justify-content-between">
          <h5 className="fw-semibold">Esperienza</h5>
          <ExperienceModal personalProfile={personalProfile} />
        </div>
      )}

      {allExperiences !== null
        ? allExperiences.map((experience) => (
            <Fragment key={experience._id}>
              <ExperienceCard experience={experience} />
              {/* <button onClick={() => removeExperience(experience._id)}>
                rimuovi
              </button> */}
            </Fragment>
          ))
        : null}
    </Container>
  );
};

export default Experience;

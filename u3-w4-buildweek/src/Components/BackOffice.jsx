import { useState } from "react";
import { Form, Button, Container, ButtonGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { getMyProfile } from "../Redux/actions";
import { setLoading } from "../Redux/actions/loading";

const BackOffice = function () {
  const personalProfile = useSelector(
    (state) => state.experiences.personalProfile
  );
  const [formInputData, setFormData] = useState({
    role: "",
    company: "",
    description: "",
    area: "",
    image: ""
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [userId, setUserId] = useState(undefined);
  const [selected, setSelected] = useState("");
  const profileFetchedRef = useRef(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyProfile()).then(() => {
      dispatch(setLoading(false));
    });
  }, []);

  if (personalProfile && !profileFetchedRef.current) {
    // alert("richiesta");
    profileFetchedRef.current = true;
    // dispatch(setExperience(personalProfile._id));
    setUserId(personalProfile._id);
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async function () {
    if (!userId) {
      alert(userId);
      throw new Error("manca l'userId");
    }
    const objToUse =
      selected === "experiences"
        ? {
            role: formInputData.role,
            company: formInputData.company,
            startDate: formInputData.startDate,
            description: formInputData.description,
            area: formInputData.area
          }
        : { text: formInputData.text };
    const formData = new FormData();
    formData.append(
      selected === "experiences" ? "experience" : "post",
      selectedFile
    );
    const URL =
      selected === "experiences"
        ? `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`
        : `https://striveschool-api.herokuapp.com/api/posts/`;
    const TOKEN =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMTIyYmM1NWU3ZTAwMThmODNjMmMiLCJpYXQiOjE2OTk4Nzk2NzQsImV4cCI6MTcwMTA4OTI3NH0.usy-4B4WgD-20ezReYqhjPpRfsfl1phLJRdEt-o73GM";
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          Authorization: TOKEN,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(objToUse)
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        //imposto l'immagine ->
        try {
          const postsImageEndpoint = `https://striveschool-api.herokuapp.com/api/posts/${data._id}`;
          const experiencesImageEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${data._id}/picture`;
          const endPointToUse =
            selected === "experiences"
              ? experiencesImageEndpoint
              : postsImageEndpoint;
          const res = await fetch(endPointToUse, {
            method: "POST",
            headers: {
              Authorization: TOKEN
            },
            body: formData
          });
          if (res.ok) {
            console.log("immagine aggiunta");
          } else {
            throw new Error("Network error.");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        throw new Error("Network error.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormDataChange = function (key, value) {
    setFormData({ ...formInputData, [key]: value });
  };
  return (
    <Container className=" align-items-center py-5">
      <ButtonGroup className="d-flex gap-2 justify-content-center align-items-center w-25 mx-auto">
        <Button
          onClick={() => {
            setSelected("experiences");
          }}
        >
          experiences
        </Button>
        <Button
          onClick={() => {
            setSelected("posts");
          }}
        >
          posts
        </Button>
      </ButtonGroup>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Form.Group className="mb-3" controlId="formRole">
          <Form.Label>
            {selected === "experiences" ? "role" : "text"}
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="role"
            onChange={(e) => {
              handleFormDataChange(
                selected === "experiences" ? "role" : "text",
                e.target.value
              );
            }}
          />
          <Form.Text className="text-muted">
            (example: Full Stack Web Developer)
          </Form.Text>
        </Form.Group>
        {selected !== "posts" ? (
          <>
            <Form.Group className="mb-3" controlId="formCompany">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="example: EPICODE"
                onChange={(e) =>
                  handleFormDataChange("company", e.target.value)
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStartDate">
              <Form.Label>start date</Form.Label>
              <Form.Control
                type="text"
                placeholder="example: 2022-06-16"
                onChange={(e) =>
                  handleFormDataChange("startDate", e.target.value)
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="example: Implementing new features"
                onChange={(e) =>
                  handleFormDataChange("description", e.target.value)
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formArea">
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="example: Milan"
                onChange={(e) => handleFormDataChange("area", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImage">
              <Form.Label>Immagine</Form.Label>
              <Form.Control type="file" onChange={(e) => handleFileChange(e)} />
            </Form.Group>
          </>
        ) : (
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Immagine</Form.Label>
            <Form.Control type="file" onChange={(e) => handleFileChange(e)} />
          </Form.Group>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default BackOffice;

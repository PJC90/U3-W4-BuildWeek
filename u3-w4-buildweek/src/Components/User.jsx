import { useEffect, useState } from "react";
import { Button, Card, Col, Dropdown, Row } from "react-bootstrap";
import {
  Arrow90degRight,
  Bell,
  BellFill,
  Check2,
  Download,
  InfoSquareFill,
  PencilFill,
  PersonPlusFill,
  PlusLg,
  VolumeUpFill
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../Redux/actions/fetchUser";
import UserModal from "./UserModal";

const User = function () {
  const [isClicked, setIsClicked] = useState(false);
  const [showTolltip, setShowTolltip] = useState(false);
  const [seguiButton, setSeguiButton] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    bio: "",
    title: "",
    area: "",
    image: ""
  })
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleSeguiButton = () => {
    setSeguiButton((statoSegui) => !statoSegui);
  };
  const handleMouseEnter = () => {
    setShowTolltip(true);
  };
  const handleMouseLeave = () => {
    setShowTolltip(false);
  };
  const handleEditClick = () => {setShowModal(true)}

  const handleSaveChanges = async () => {
    try {
      
      let response = await fetch('https://striveschool-api.herokuapp.com/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMjc5MWM1NWU3ZTAwMThmODNjNDciLCJpYXQiOjE2OTk4ODI4OTcsImV4cCI6MTcwMTA5MjQ5N30.kOr7iDAngb-ynvpkBFXSJFA4dTCuVin-ZGRTDWNQLGk',
        },
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        dispatch(fetchUser())
      } else {
        throw new Error('Errore durante la modifica dei dati del profilo');
      }
    } catch (error) {
      console.error(error);
    }

    setShowModal(false)
  }

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const allExperiences = useSelector(
    (state) => state.experiences.allExperiences
  );

  useEffect(() => {
    console.log("Fetch");
    dispatch(fetchUser());
  }, []);

  if (!userData) {
    // Se userData è ancora undefined
    console.log("loading");
    return <div>Loading...</div>;
  }
  
  return (
    <>
      {userData && !isLoading && (
        <Card className="mt-5">
          <Card.Img
            variant="top"
            src="https://media.licdn.com/dms/image/C4D16AQHOVtvrNfDs2A/profile-displaybackgroundimage-shrink_350_1400/0/1583686617387?e=1705536000&v=beta&t=C8TwrUsaDXQHR9N5wECRUYkWfrycPDjtLEXMQH-ite4"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body style={{ position: "relative" }}>
            <img
              src={userData.image}
              alt="image-profile"
              style={{
                width: "150px",
                height:"150px",
                position: "absolute",
                top: "0%",
                left: "3%",
                transform: "translateY( -70%)",
                borderRadius: "50%",
                border: "5px solid white"
              }}
            />
            {isClicked ? (
              <BellFill
                className="fs-4 d-flex ms-auto me-2 mb-2"
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ) : (
              <Bell
                className="fs-4 d-flex ms-auto me-2 mb-2"
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            )}
            {showTolltip && (
              <div
                style={{
                  position: "absolute",
                  top: "20%",
                  right: "-20%",
                  backgroundColor: "#fff",
                  padding: "5px",
                  border: "1px solid #ccc",
                  borderRadius: "3px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.46)"
                }}
              >
                {isClicked &&
                  `Ricevi Notifiche solo per i post principali di ${userData.name}`}
                {!isClicked &&
                  `Ricevi Notifiche per tutti i post di ${userData.name}`}
              </div>
            )}

            <Row>
              <Col>
                <div className="d-flex align-items-end">
                  <Card.Title className="ms-0 mb-0 fs-4">
                    {userData.name} {userData.surname}{" "}
                  </Card.Title>
                  <p className="text-secondary ms-2 mb-0">
                    <VolumeUpFill className="fs-3" /> (He/him) • 3°
                  </p>
                </div>
                <div className="ms-1 mt-1">
                  <Card.Text className="mb-0">{userData.title}</Card.Text>
                  <Card.Text className="text-secondary mt-2 mb-0">
                    {userData.area}
                  </Card.Text>
                  <Card.Text className=" mb-1">
                    <a href="a">Informazioni di contatto</a>
                  </Card.Text>
                  <Card.Text className="text-secondary">
                    Più di 500 collegamenti
                  </Card.Text>
                  <Button variant="primary" className="rounded-pill">
                    Messaggio
                  </Button>
                  <Button
                    variant={
                      seguiButton ? "outline-secondary" : "outline-primary"
                    }
                    className="rounded-pill ms-2"
                    onClick={handleSeguiButton}
                  >
                    {seguiButton ? (
                      <Check2 className="mb-1 me-1" />
                    ) : (
                      <PlusLg className="mb-1 me-1" />
                    )}
                    {seguiButton ? "Già segui" : "Segui"}
                  </Button>
                  <style>{`.dropdown-toggle::after {display: none; }`}</style>
                  <Dropdown className=" ms-2 d-inline-block" >
                    <Dropdown.Toggle variant="outline-secondary" className="rounded-pill"  >
                      <span className="d-none d-sm-inline-block">Altro</span>
                      <span className="d-sm-none">•••</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href=""><Arrow90degRight className="me-3"/>Invia il profilo in un messaggio</Dropdown.Item>
                      <Dropdown.Item href=""><Download className="me-3"/>Salva come PDF</Dropdown.Item>
                      <Dropdown.Item href=""><PersonPlusFill className="me-3"/>Collegati</Dropdown.Item>
                      <Dropdown.Item href=""><InfoSquareFill className="me-3"/>Informazioni su questo profilo</Dropdown.Item>
                      <Dropdown.Item href="" onClick={handleEditClick}><PencilFill className="me-3"/>Modifica</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <UserModal
                  show={showModal}
                  handleClose={() => setShowModal(false)}
                  handleSaveChanges={handleSaveChanges}
                  profileData={profileData}
                  setProfileData={setProfileData}
                  />
                </div>
              </Col>
              <Col className="d-none d-lg-block" lg={4}>
                {allExperiences.slice(0, 2).map((experience) => (
                  <div
                    key={experience._id}
                    className="d-lg-flex align-items-center gap-2 pb-2"
                  >
                    <Col lg={2}>
                      <img
                        src={experience.image}
                        alt="experience"
                        className="img-fluid"
                      />
                    </Col>
                    <Col>{experience.role}</Col>
                  </div>
                ))}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default User;

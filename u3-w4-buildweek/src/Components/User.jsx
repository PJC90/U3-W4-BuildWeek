import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Bell, PlusLg, VolumeUpFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../Redux/actions/fetchUser";

const User = function () {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  useEffect(() => {
    console.log("Fetch");
    dispatch(fetchUser());
  }, []);

  if (!userData) {
    // Se userData è ancora undefined
    console.log("loading");
    return <div>Loading...</div>;
  }
  console.log(userData);
  console.log("ciao");
  return (
    <>
      {userData && (
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
                position: "absolute",
                top: "0%",
                left: "3%",
                transform: "translateY( -70%)",
                borderRadius: "50%",
                border: "5px solid white"
              }}
            />
            <Bell className="fs-4 d-flex ms-auto me-2 mb-2" />
            <Row>
              <Col>
                <div className="d-flex align-items-end">
                  <Card.Title className=" mb-0 fs-3">
                    {userData.name} {userData.surname}{" "}
                  </Card.Title>
                  <p className="text-secondary ms-2 mb-0">
                    <VolumeUpFill className="fs-3" /> (He/him) • 3°
                  </p>
                </div>
              </Col>
              <Col className="d-none d-lg-block" lg={4}>
                <div>Esperienza 1</div>
                <div>Esperienza 2</div>
              </Col>
            </Row>

            <Card.Text className="mb-0">{userData.title}</Card.Text>
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
            <Button variant="outline-primary" className="rounded-pill mx-2">
              <PlusLg className="mb-1" /> Segui
            </Button>
            <Button variant="outline-secondary" className="rounded-pill">
              Altro
            </Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default User;

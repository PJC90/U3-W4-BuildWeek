import Sidebar from "./Sidebar";
import User from "./User";
import Chat from "./Chat";
import { Col, Container, Row } from "react-bootstrap";
import Experience from "./Experience";
import { useSelector } from "react-redux";

const Profile = function () {
  return (
    <>
      <Container>
        <Row className="mx-0 ms-sm-5">
          <Col  lg={8} className="mx-0 mx-sm-3 d-flex flex-column gap-3">
            <User />
            <Experience />
          </Col>
          <Col lg={3}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col xs={12} sm={7} md={5} lg={4} xl={3} className="ms-auto me-5">
            <Chat />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;

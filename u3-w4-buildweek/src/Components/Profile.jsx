import Sidebar from "./Sidebar";
import User from "./User";
import { Col, Container, Row } from "react-bootstrap";
import Experience from "./Experience";

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
    </>
  );
};

export default Profile;

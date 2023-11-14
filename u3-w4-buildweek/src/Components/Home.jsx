import Sidebar from "./Sidebar";
import User from "./User";
import Chat from "./Chat";
import { Col, Container, Row } from "react-bootstrap";
import Experience from "./Experience";
import { useSelector } from "react-redux";
import OverlayLoading from "./OverlayLoading";
import Navbar from "./Navbar";

const Home = function () {
  return (
    <>
      <OverlayLoading />
      <Navbar />
      <Container>
        <Row className="mx-5">
          <Col xs={12} md={8} lg={8} className="mx-3 d-flex flex-column gap-3">
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

export default Home;

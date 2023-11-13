import Sidebar from "./Sidebar";
import User from "./User";
import Chat from "./Chat";
import { Col, Container, Row } from "react-bootstrap"


const Home = function () {
    return (
        <>
        <Container>
        <Row className="mx-5">
            <Col xs={12} md={8} lg={8} className="mx-3">
                <User/>
             </Col>
             <Col lg={3} >
                 <Sidebar/>
             </Col>     
        </Row>
        </Container>
        <Row>
            <Col md={2} className="ms-auto me-5">
            <Chat/>
            </Col>
        </Row>
        </>
    )
  };
  
  export default Home;
  
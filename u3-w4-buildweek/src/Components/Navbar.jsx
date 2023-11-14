import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../images/logo.png";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { HouseDoorFill } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { BriefcaseFill } from "react-bootstrap-icons";
import { ChatLeftDotsFill } from "react-bootstrap-icons";
import { BellFill } from "react-bootstrap-icons";
import { Grid3x3GapFill } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";

function LinkedinNav() {
  return (
    <Container fluid className="h-100">
      <Navbar
        className="d-flex row bg-white pt-3 mb-3 pt-4 border-bottom border-light-emphasis"
        style={{ fontSize: "12px", height: "70px" }}
      >
        <Row className="">
          <Col className="col col-md-9 ">
            <Row className="col col-md-7 ms-5">
              <Col className="me-auto">
                <div className="d-inline-flex ms-5">
                  <img
                    src={Logo}
                    alt="logo"
                    style={{ width: "40px", height: "40px" }}
                    className="ms-3"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Cerca"
                    className="ms-1"
                  />
                </div>
              </Col>

              <Col className="col col-md-5 ">
                <ul className="d-inline-flex ms-5">
                  <li className="d-flex flex-column align-items-center me-3">
                    <HouseDoorFill style={{ fontSize: "22px" }} />
                    <Nav.Link href="#home">Home</Nav.Link>
                  </li>
                  <li className="d-flex flex-column align-items-center ms-4 me-3">
                    <PeopleFill style={{ fontSize: "22px" }} />
                    <Nav.Link href="#home">Rete</Nav.Link>
                  </li>
                  <li className="d-flex flex-column align-items-center ms-4 me-3">
                    <BriefcaseFill style={{ fontSize: "22px" }} />
                    <Nav.Link href="#home">Lavoro</Nav.Link>
                  </li>
                  <li className="d-flex flex-column align-items-center ms-4 me-3">
                    <ChatLeftDotsFill style={{ fontSize: "22px" }} />
                    <Nav.Link href="#home">Messagistica</Nav.Link>
                  </li>
                  <li className="d-flex flex-column align-items-center ms-4 me-3 ">
                    <BellFill style={{ fontSize: "22px" }} />
                    <Nav.Link href="#home">Notifiche</Nav.Link>
                  </li>
                  <li className="d-flex flex-column align-items-center ms-4 pe-0">
                    {" "}
                    <div className="d-flex flex-column">
                      <img src="" alt="profilo" />
                      <NavDropdown>
                        <NavDropdown.Item href="#">
                          <Row>
                            <Col>
                              <img src="#" alt="profilo" />
                            </Col>
                            <Col>
                              <div>
                                <h4>Nome</h4>
                                <p>Descrizione</p>
                              </div>
                            </Col>
                          </Row>
                          <Button variant="outline-primary">
                            Visualizza il profilo
                          </Button>
                        </NavDropdown.Item>

                        <NavDropdown.Item href="#">
                          <ul>
                            <strong>Account</strong>
                          </ul>
                          <li>
                            <i></i>Prova Premium per 0 EUR
                          </li>
                          <li>
                            <Nav.Link href="/home">
                              Impostazioni e privacy
                            </Nav.Link>
                          </li>
                          <li>
                            <Nav.Link href="/home">Guida</Nav.Link>
                          </li>
                          <li>
                            {" "}
                            <Nav.Link href="/home">Lingua</Nav.Link>
                          </li>
                        </NavDropdown.Item>

                        <NavDropdown.Divider />

                        <NavDropdown.Item href="#">
                          <ul>
                            <strong>Gestisci</strong>
                          </ul>
                          <li>
                            <Nav.Link href="/home">Post e attività</Nav.Link>
                          </li>
                          <li>
                            <Nav.Link href="/home">
                              Account per la pubblicazione di offerte
                            </Nav.Link>
                          </li>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">
                          {" "}
                          <Nav.Link href="/home">Esci</Nav.Link>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>

          <Col className="col col-md-2 d-flex flex-grow-1">
            <Row className="d-flex flex-column align-items-start ">
              <ul
                className="d-inline-flex"
                style={{ listStyleType: "none", textAlign: "center" }}
              >
                <li className="d-flex flex-column align-items-center">
                  <Grid3x3GapFill style={{ fontSize: "22px" }} />
                  <Nav.Link href="#home">Per le aziende</Nav.Link>
                </li>
                <li className="ms-5" style={{ textAlign: "center" }}>
                  <Nav.Link href="/home">
                    Prova Premium per <br />0 EUR
                  </Nav.Link>
                </li>
              </ul>
            </Row>
          </Col>
        </Row>
      </Navbar>
    </Container>
  );
}

export default LinkedinNav;

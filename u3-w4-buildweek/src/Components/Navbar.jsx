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
import Avatar from "../Static Img/Avatar.webp";


function LinkedinNav() {
    return (
      <Navbar sticky="top" expand="lg" className="pt-1 pb-1 mb-3" style={{fontSize:'12px',backgroundColor:'white'}}>
        <Container fluid className="ms-5">
          <Navbar.Brand className="ms-3"><img
                    src={Logo}
                    alt="logo"
                    style={{ width: "30px", height: "30px" }}
                    className="ms-4 "
                  /></Navbar.Brand>
                   <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 bg-light"
                aria-label="Search"
                style={{width:'300px',height:'30px'}}
              />
            </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 ms-5 ps-4"
              style={{ maxHeight: '100px' }}
              navbarScroll
              
            >
              <Nav.Link href="#action1" className="d-flex flex-column align-items-center ms-3"><HouseDoorFill style={{width:'20px',height:'20px'}}/><Nav.Link href="#home" className="py-0">Home</Nav.Link></Nav.Link>
              <Nav.Link href="#action2" className="d-flex flex-column align-items-center"><PeopleFill style={{width:'20px',height:'20px'}}/><Nav.Link href="#home" className="py-0">Rete</Nav.Link></Nav.Link>
              <Nav.Link href="#action1" className="d-flex flex-column align-items-center"><BriefcaseFill style={{width:'20px',height:'20px'}}/><Nav.Link href="#home" className="py-0">Lavoro</Nav.Link></Nav.Link>
              <Nav.Link href="#action2" className="d-flex flex-column align-items-center"><ChatLeftDotsFill style={{width:'20px',height:'20px'}}/><Nav.Link href="#home" className="py-0">Messaggistica</Nav.Link></Nav.Link>
              <Nav.Link href="#action1" className="d-flex flex-column align-items-center"><BellFill style={{width:'20px',height:'20px'}}/><Nav.Link href="#home" className="py-0">Notifiche</Nav.Link></Nav.Link>
              
              <div className="d-flex flex-column align-items-center">
                <img src={Avatar} style={{width:'20px',height:'20px'}} alt="profile"></img>
                <NavDropdown title="Tu" className="pt-0" id="navbarScrollingDropdown" >
                
              <NavDropdown.Item href="#" className="pt-0">
                          <Row>
                            <Col>
                              <img src={Avatar} alt="profilo" style={{width:'80px',height:'80px'}}/>
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
                      </NavDropdown></div>      
            </Nav>
            <Nav >
               <div className="d-flex flex-column align-items-center">
                        <Grid3x3GapFill style={{width:'20px',height:'20px'}}/>
                        <NavDropdown
              id="nav-dropdown-dark-example"
              title="Per le Aziende"
              menuVariant="dark" >
            </NavDropdown> 
            </div>
            <Nav.Link href="/home" className="me-4 pe-4" style={{ textAlign: "center",color:'darkgoldenrod' }}><u>
                    Prova Premium per <br />0 EUR</u>
                  </Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
    /*<Container fluid className="h-100">
      <Navbar
        className="d-flex row bg-white mt-2 mb-3 pt-4 border-bottom border-light-emphasis"
        style={{ fontSize: "12px", height: "50px" }}>
        <Row >
          <Col className="col col-md-9 ms-5">
            <Row className="col col-md-7 ms-2">
              <Col >
                <div className="d-inline-flex pt-1">
                  <img
                    src={Logo}
                    alt="logo"
                    style={{ width: "30px", height: "30px" }}
                    className="ms-3"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Cerca"
                    className="ms-1 bg-light"
                    style={{height: "30px", width:'100%' }}
                  />
                </div>
              </Col>

              <Col className="col col-md-4 ps-5 ">
                <ul className="d-inline-flex ms-3">
                  <li className="d-flex flex-column align-items-center me-3">
                    <HouseDoorFill style={{ fontSize:'20px' }} />
                    <Nav.Link href="#home">Home</Nav.Link>
                  </li>
                  <li className="d-flex flex-column align-items-center ms-4 me-3">
                    <PeopleFill style={{ fontSize: "20px" }} />
                    <Nav.Link href="#home">Rete</Nav.Link>
                  </li>
                  <li className="d-flex flex-column align-items-center ms-4 me-3">
                    <BriefcaseFill style={{ fontSize: "20px" }} />
                    <Nav.Link href="#home">Lavoro</Nav.Link>
                  </li>
                  <li className="d-flex flex-column align-items-center ms-4 me-3">
                    <ChatLeftDotsFill style={{ fontSize: "20px" }} />
                    <Nav.Link href="#home">Messagistica</Nav.Link>
                  </li>
                  <li className="d-flex flex-column align-items-center ms-4 me-3 ">
                    <BellFill style={{ fontSize: "20px" }} />
                    <Nav.Link href="#home">Notifiche</Nav.Link>
                  </li>
                  <li className="d-flex flex-column align-items-center ms-4 pe-0 ">
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

          <Col className="col  d-flex flex-grow-1 ms-2">
            <Row className="d-flex flex-column align-items-start ">
              <ul
                className="d-inline-flex ps-0"
                style={{ listStyleType: "none", textAlign: "center" }}
              >
                <li className="d-flex flex-column align-items-center ps-0">
                  <Grid3x3GapFill style={{ fontSize: "20px" }} />
                  <Nav.Link href="#home">Per le aziende</Nav.Link>
                </li>
                <li className="ms-4" style={{ textAlign: "center",color:'darkgoldenrod' }}>
                  <Nav.Link href="/home"><u>
                    Prova Premium per <br />0 EUR</u>
                  </Nav.Link>
                </li>
              </ul>
            </Row>
          </Col>
        </Row>
      </Navbar>
    </Container>
  );
}*/

export default LinkedinNav;

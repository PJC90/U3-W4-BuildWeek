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
import { Link, useNavigate, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../Redux/actions/loading";
import { useEffect } from "react";
import { fetchUser } from "../Redux/actions/fetchUser";
import { setSearchValue } from "../Redux/actions/searchActions";


function LinkedinNav() {
  const userData = useSelector((state) => state.user.userData);
  const searchValue = useSelector((state) => state.search.searchValue);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleHomeClick = () => {
    dispatch(setLoading(true))
    navigate("/")
  }
  const handleJobsClick = () => {
    dispatch(setLoading(true))
    navigate("/jobs")
  }
  const handleProfileClick = () => {
    dispatch(setLoading(true))
    navigate("/me")
  }
  const handleSearchChange = (e) => {
    const value = e.target.value
    dispatch(setSearchValue(value))
  }
    return (
      <Navbar sticky="top" expand="lg" className="pt-1 pb-1 mb-3" style={{fontSize:'12px',backgroundColor:'white'}}>
        <Container >
          <Row className="w-100">
            <Col className="d-flex align-items-center">
                        <Navbar.Brand className="ms-3"><img
                                  src={Logo}
                                  alt="logo"
                                  style={{ width: "30px", height: "30px" }}/>
                        </Navbar.Brand>
                      <Form className="d-flex" onSubmit={(e)=>e.preventDefault()}>
                            <Form.Control
                              type="search"
                              placeholder="Search"
                              className="me-2 bg-light d-none d-xl-inline-block"
                              aria-label="Search"
                              style={{width:'200px',height:'32px'}}
                              value={searchValue}
                              onChange={handleSearchChange}
                            />
                      </Form>
            </Col>
            
            <Col >
                      <Navbar.Collapse id="navbarScroll" >
                        <Nav className="me-auto my-2 my-lg-0 ms-5 ps-4" style={{ maxHeight: '100px' }}>
                          <Nav.Link className="d-flex flex-column align-items-center ms-3" onClick={handleHomeClick}><HouseDoorFill style={{width:'20px',height:'20px'}}/><Nav.Link className="py-0">Home</Nav.Link></Nav.Link>
                          <Nav.Link className="d-flex flex-column align-items-center"><PeopleFill style={{width:'20px',height:'20px'}}/><Nav.Link href="#home" className="py-0">Rete</Nav.Link></Nav.Link>
                          <Nav.Link className="d-flex flex-column align-items-center" onClick={handleJobsClick}><BriefcaseFill style={{width:'20px',height:'20px'}}/><Nav.Link href="#home" className="py-0">Lavoro</Nav.Link></Nav.Link>
                          <Nav.Link className="d-flex flex-column align-items-center"><ChatLeftDotsFill style={{width:'20px',height:'20px'}}/><Nav.Link href="#home" className="py-0">Messaggistica</Nav.Link></Nav.Link>
                          <Nav.Link className="d-flex flex-column align-items-center"><BellFill style={{width:'20px',height:'20px'}}/><Nav.Link href="#home" className="py-0">Notifiche</Nav.Link></Nav.Link>
                          
                          <div className="d-flex flex-column justify-content-center me-4 ms-2">
                            <img src={userData && userData.image} style={{width:'25px',height:'25px', borderRadius: '50%'}} alt="profile"></img>
                            <NavDropdown title="Tu" className="" id="navbarScrollingDropdown" >
                            
                          <NavDropdown.Item href="#" className="pt-0">
                                      <Row>
                                        <Col className="col-4">
                                          <img src={userData && userData.image} alt="profilo" style={{width:'80px',height:'80px'}}/>
                                        </Col>
                                        <Col className="col-8">
                                          <div>
                                            <h4>{userData && userData.name} {userData && userData.surname}</h4>
                                            <p>{userData && userData.title}</p>
                                          </div>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col className="ms-5">
                                      <Button variant="outline-primary" onClick={handleProfileClick} className="mt-3 rounded-pill">
                                        Visualizza il profilo
                                      </Button>
                                        </Col>
                                      </Row>
                                    </NavDropdown.Item>

                          <NavDropdown.Item href="#" >
                                      <ul className="mb-0 ps-0"><strong>Account</strong></ul>
                                      <li>Prova Premium con il 50% di sconto</li>
                                      <li>Impostazioni e privacy </li>
                                      <li>Guida</li> 
                                      <li>Lingua</li>                                   
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />

                                    <div className="ms-3">
                                      <ul className="mb-0 ps-0"><strong>Gestisci</strong></ul>
                                      <li><Link to="/backOffice" style={{ textDecoration: 'none', color: 'inherit' }}>BackOffice</Link></li>
                                      <li>Account per la pubblicazione di offerte </li> 
                                    </div>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                      <Nav.Link >Esci</Nav.Link>
                                    </NavDropdown.Item>
                                  </NavDropdown></div>      
                        </Nav>
                        <Nav className="d-flex border-start" >
                                  <div className="d-flex flex-column align-items-center justify-content-center ms-4">
                                          <Grid3x3GapFill style={{width:'20px',height:'20px'}}/>                       
                                          <NavDropdown id="nav-dropdown-dark-example" title="Per le Aziende" menuVariant="dark" >
                                          </NavDropdown> 
                                    </div>
                      
                                        <Nav.Link href="/home" style={{ textAlign: "center",color:'darkgoldenrod', width:"170px" }}><u>
                                          Riattiva Premium con il <br />50% di sconto</u>
                                        </Nav.Link>
                        </Nav>
                      
                      </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  }
  
export default LinkedinNav;

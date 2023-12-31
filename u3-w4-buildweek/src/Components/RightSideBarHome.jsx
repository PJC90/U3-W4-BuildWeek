import { Button, Col, Container, ListGroup, Row } from "react-bootstrap"
import { InfoSquareFill } from "react-bootstrap-icons"
import Pubblicità from '../SidebarImgs/pubblicità.png';
import { CaretDown } from "react-bootstrap-icons";
import { CaretUp } from 'react-bootstrap-icons';
import { useState } from "react";

const RightSideBar = () => {

    const [showMore, setShowMore] = useState(true)

    const toggleShowButton = () => {
        setShowMore(!showMore)
    }

    return (
        <>
            <div>
                <ListGroup>
                    <ListGroup.Item className="border-0 d-flex justify-content-between pb-0">
                    <h6>LinkedIn Notizie</h6>
                    <InfoSquareFill />
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 pt-0">
                        <p className="m-0" style={{fontSize: '0.9em'}}><strong>Esselunga ora compete con Tannico</strong></p>
                        <p className="m-0" style={{fontSize: '0.7em'}}>1 giorno fa</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 pt-0">
                        <p className="m-0" style={{fontSize: '0.9em'}}><strong>Effetto ATP Finals per Torino</strong></p>
                        <p className="m-0" style={{fontSize: '0.7em'}}>1 giorno fa</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 pt-0">
                        <p className="m-0" style={{fontSize: '0.9em'}}><strong>Le esperienze trainano il lusso</strong></p>
                        <p className="m-0" style={{fontSize: '0.7em'}}>1 giorno fa</p>
                    </ListGroup.Item>
                    {
                        showMore ? 
                        <Button variant="light" style={{color: 'grey'}} onClick={toggleShowButton}>Show more <CaretDown /></Button>
                        :
                        <>
                        <ListGroup.Item className="border-0 pt-0">
                        <p className="m-0" style={{fontSize: '0.9em'}}><strong>Le Telco peggiorano ancora</strong></p>
                        <p className="m-0" style={{fontSize: '0.7em'}}>1 giorno fa</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 pt-0">
                        <p className="m-0" style={{fontSize: '0.9em'}}><strong>Manuale di critica costruttiva</strong></p>
                        <p className="m-0" style={{fontSize: '0.7em'}}>1 giorno fa</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 pt-0">
                        <p className="m-0" style={{fontSize: '0.9em'}}><strong>Ristorazione sotto la lente</strong></p>
                        <p className="m-0" style={{fontSize: '0.7em'}}>1 giorno fa</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 pt-0">
                        <p className="m-0" style={{fontSize: '0.9em'}}><strong>Guerra Israele-Hamas: le ultime notizie</strong></p>
                        <p className="m-0" style={{fontSize: '0.7em'}}>1 giorno fa</p>
                        </ListGroup.Item>
                        <Button variant="light" style={{color: 'grey'}} onClick={toggleShowButton}>Show less <CaretUp /></Button>
                        </>
                    }
                </ListGroup>
            </div>
            <div className="position-sticky-70">
                <div>
                    <div className='mt-4'>
                        <img src={Pubblicità} alt="pubblicità" className='rounded border-dark-subtle w-100' />
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-around mt-3">
                            <p className="m-0" style={{fontSize: '0.7em', backgroundColor: '#F4F2EE', color: 'grey'}}>Informazioni</p>
                            <p className="m-0" style={{fontSize: '0.7em', backgroundColor: '#F4F2EE', color: 'grey'}}>Accessibilità</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-around mt-1 mt-1">
                            <p className="m-0" style={{fontSize: '0.7em', backgroundColor: '#F4F2EE', color: 'grey'}}>Centro assistenza</p>
                            <p className="m-0" style={{fontSize: '0.7em', backgroundColor: '#F4F2EE', color: 'grey'}}>Provacy e condizioni</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-around mt-1">
                            <p className="m-0" style={{fontSize: '0.7em', backgroundColor: '#F4F2EE', color: 'grey'}}>Opzioni per gli annunci pubblicitari</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-around mt-1">
                            <p className="m-0" style={{fontSize: '0.7em', backgroundColor: '#F4F2EE', color: 'grey'}}>Pubblicità</p>
                            <p className="m-0" style={{fontSize: '0.7em', backgroundColor: '#F4F2EE', color: 'grey'}}>Servizi alle aziende</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-around mt-1">
                            <p className="m-0" style={{fontSize: '0.7em', backgroundColor: '#F4F2EE', color: 'grey'}}>Scarica l'app LinkedIn</p>
                            <p className="m-0" style={{fontSize: '0.7em', backgroundColor: '#F4F2EE', color: 'grey'}}>Altro</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-around mt-3">
                            <p className="m-0" style={{fontSize: '0.7em', backgroundColor: '#F4F2EE'}}>LinkedIn Corporation &#169; 2023</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default RightSideBar
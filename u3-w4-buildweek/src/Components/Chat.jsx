import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { ThreeDots } from "react-bootstrap-icons";
import { PencilSquare } from 'react-bootstrap-icons';
// import { Search } from 'react-bootstrap-icons';
import { CaretDown } from 'react-bootstrap-icons';
import { PersonCircle } from 'react-bootstrap-icons';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { CaretUp } from 'react-bootstrap-icons';


const Chat = function () {

    const [isChatClosed, setIsChatClosed] = useState(true)

    const toggleChat = () => {
        setIsChatClosed(!isChatClosed)
    }

    return (
        <>
            <ListGroup className='position-fixed bottom-0 end-0'>
                <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                    <PersonCircle className='fs-1'/>
                    <p className='m-0 ms-2'>Messaggistica</p>
                    </div>
                    <div>
                    <ThreeDots className='me-2'/>
                    <PencilSquare className='me-2'/>
                    {isChatClosed ? 
                    (
                    <CaretUp className='me-2' onClick={toggleChat}/>)
                    :  
                    (<CaretDown className='me-2' onClick={toggleChat}/>)
                    }               
                    </div>
                    </ListGroup.Item>
                <ListGroup.Item>
                    {isChatClosed ? 
                    (<></>) 
                    :
                    (
                        <>
                            <Form>
                                <Form.Group className="mb-3">
                                    {/* <span><Search /></span> */}
                                    <Form.Control type="text" placeholder='Cerca messaggi' className="searchchat-bg" style={{backgroundColor: '#bed6ff'}}/>
                                </Form.Group>
                            </Form>
                            <Container>
                                <Row className='align-items-center mt-3 pb-2 border-bottom'>
                                    <Col className='col-4 p-0'>
                                        <img src="http://placekitten.com/100" alt="profile" className='rounded-circle w-75' />
                                    </Col>
                                    <Col className='ms-1 p-0' style={{fontSize: '0.9em', maxWidth: '60%'}}>
                                        <div className='d-flex justify-content-between'>
                                        <p className='m-0'><strong>Nome utente</strong></p>
                                        <p className='m-0'><strong>15:32</strong></p>
                                        </div>
                                        <p className='m-0'>Offerta lavoro</p>
                                        <p className='m-0 text-truncate' style={{maxWidth: '40%'}}>Descrizione lavoroooooooooo</p>
                                    </Col>
                                </Row>
                                <Row className='align-items-center mt-3 pb-2 border-bottom'>
                                    <Col className='col-4 p-0'>
                                        <img src="http://placekitten.com/100" alt="profile" className='rounded-circle w-75' />
                                    </Col>
                                    <Col className='ms-1 p-0' style={{fontSize: '0.9em', maxWidth: '60%'}}>
                                        <div className='d-flex justify-content-between'>
                                        <p className='m-0'><strong>Nome utente</strong></p>
                                        <p className='m-0'><strong>15:32</strong></p>
                                        </div>
                                        <p className='m-0'>Offerta lavoro</p>
                                        <p className='m-0 text-truncate' style={{maxWidth: '40%'}}>Descrizione lavoroooooooooo</p>
                                    </Col>
                                </Row>
                            </Container>
                        </>
                    )
                    }
                </ListGroup.Item>
            </ListGroup>
        </>
    )
};

export default Chat;
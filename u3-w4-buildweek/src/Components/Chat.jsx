import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { ThreeDots } from "react-bootstrap-icons";
import { PencilSquare } from 'react-bootstrap-icons';
// import { Search } from 'react-bootstrap-icons';
import { CaretDown } from 'react-bootstrap-icons';
import { PersonCircle } from 'react-bootstrap-icons';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { CaretUp } from 'react-bootstrap-icons';

const Chat = function () {

    const [isChatClosed, setIsChatClosed] = useState(true)
    const [users, setUsers] = useState([])
    const [searchUser, setSearchUser] = useState('')

    const toggleChat = () => {
        setIsChatClosed(!isChatClosed)
    }


    const getUsers = () => {
        fetch('https://striveschool-api.herokuapp.com/api/profile/', {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzNzNhM2RkOTllZjAwMTlhMDkzNjMiLCJpYXQiOjE2OTk5Njc5MDcsImV4cCI6MTcwMTE3NzUwN30.Q9zdWfrH_WggJv79ncIGKAEjK9TE7rEwev5YbbTRJAU"
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then((data) => {
            // console.log(data);
            setUsers(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Container>
            <Row>
                <Col className='position-fixed bottom-0 end-0' md={5} lg={4} xl={2}>
                    <ListGroup >
                        <ListGroup.Item className='d-flex justify-content-between align-items-center' style={{backgroundColor: '#0e76a8', color: 'white'}}>
                            <div className='d-flex align-items-center'>
                            <PersonCircle className='fs-1'/>
                            <p className='m-0 ms-2' style={{backgroundColor: '#0e76a8'}}>Messaggistica</p>
                            </div>
                            <div className='d-flex w-50 justify-content-evenly ms-4'>
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
                                            <Form.Control 
                                                type="text" 
                                                placeholder='Cerca messaggi' 
                                                style={{backgroundColor: '#bed6ff'}} 
                                                value={searchUser} 
                                                onChange={(e) => {
                                                    setSearchUser(e.target.value)
                                            }}/>
                                        </Form.Group>
                                    </Form>
                                    <Container style={{maxHeight: 700, overflow: 'auto'}}>
                                        {users
                                        .filter((utente) => utente.name.toLowerCase().includes(searchUser.toLowerCase()))
                                        .map((utente) => {
                                            return (
                                                <Row className='align-items-center mt-3 pb-2 border-bottom'>
                                                <Col className='col-4 p-0'>
                                                    <img src={utente.image} alt="profile" className='rounded-circle w-75' />
                                                </Col>
                                                <Col className='ms-1 p-0' style={{fontSize: '0.9em', maxWidth: '60%'}}>
                                                    <div className='d-flex justify-content-between'>
                                                    <p className='m-0'><strong>{utente.name}</strong></p>
                                                    <p className='m-0'><strong>15:32</strong></p>
                                                    </div>
                                                    <p className='m-0'>Offerta lavoro</p>
                                                    <p className='m-0 text-truncate' style={{maxWidth: '40%'}}>Descrizione lavoroooooooooo</p>
                                                </Col>
                                            </Row>
                                            )
                                        })}
                                    </Container>
                                </>
                            )
                            }
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
};

export default Chat;
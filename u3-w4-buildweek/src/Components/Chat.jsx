import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

const Chat = function () {
    return (
        <>
            <ListGroup>
                <ListGroup.Item>Messaggistica</ListGroup.Item>
                <ListGroup.Item>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Cerca messaggi" className="searchchat-bg"/>
                    </Form.Group>
                </Form>
                </ListGroup.Item>
            </ListGroup>
        </>
    )
};

export default Chat;
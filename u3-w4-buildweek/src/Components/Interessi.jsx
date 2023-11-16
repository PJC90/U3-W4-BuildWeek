import { Col, Row } from "react-bootstrap";

function Interessi(){
    return(
        <div>
            <h3>Interessi</h3>
            <ul>
                <li>Aziende</li>
                <li>Gruppi</li>
                <li>Scuole o università</li>
            </ul>
            <hr />
            <Row>
                <Col>
                <Row>
                    <Col></Col>
                    <Col><strong><p>Tesla</p></strong><p>11.644.301 follower</p><button>+ Segui</button></Col>
                </Row>
            </Col>
                <Col>
                <Row>
                    <Col></Col>
                    <Col><strong><p>Space X</p></strong><p>3.093.301 follower</p><button>+ Segui</button></Col>
                </Row>
                </Col>
            </Row>
            <hr />
            <Row><strong><p style={{textAlign:'center'}}>Mostra tutte le Competenze (17) </p></strong></Row>
        </div>
    )
}

export default Interessi
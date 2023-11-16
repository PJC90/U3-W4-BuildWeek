import { Col, Row } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import avatar from '../Static Img/Avatar.webp';
import { ArrowRight } from "react-bootstrap-icons";
import { PencilSquare } from "react-bootstrap-icons";

function Competenze(){
    return(
        
            <div className="d-flex row me-4 ms-2 pb-2 pt-3 ps-2" style={{backgroundColor:'white',borderRadius:'5px',width:'650px'}}>
            <Row>
                <Col ><h3 style={{fontSize:'20px'}}>Competenze</h3></Col>
                <Col className="col col-lg-1"><PlusLg/></Col>
                <Col className="col col-lg-1"><PencilSquare/></Col>
                </Row>
            <div>
                <h4 style={{fontSize:'18px'}}>Javascript</h4>
            <Row >
                <Col className='d-inline-flex'> <PersonCircle className="me-2" style={{width:'25px', height:'25px'}}/><p>Competenze confermate da Maksim Sinik</p></Col>
            </Row> 
            <Row><Col className='d-inline-flex'><img src={avatar} alt="avatar" className="me-2" style={{width:'25px', height:'25px'}} /><p>Confermata da 1 persone negli ultimi 6 mesi</p></Col></Row>
            <Row><Col className='d-inline-flex'> <PeopleFill className="me-2" style={{width:'25px', height:'25px'}}/><p>20 conferme</p></Col></Row>
            </div>

            <div>
                <h4 style={{fontSize:'18px'}}>React.js</h4>
                <Row >
                <Col className='d-inline-flex'> <PersonCircle className="me-2" style={{width:'25px', height:'25px'}}/><p>Competenze confermate da Maksim Sinik</p></Col>
            </Row> 
            <Row><Col className='d-inline-flex'><img src={avatar} alt="avatar" className="me-2" style={{width:'25px', height:'25px'}} /><p>Confermata da 1 persone negli ultimi 6 mesi</p></Col></Row>
            <Row><Col className='d-inline-flex'> <PeopleFill className="me-2" style={{width:'25px', height:'25px'}}/><p>10 conferme</p></Col></Row>
            </div>

            <hr />
            <Row><strong><p style={{textAlign:'center'}}>Mostra tutte le Competenze  (17) <ArrowRight/></p></strong></Row>
            
        </div>
    )
}

export default Competenze